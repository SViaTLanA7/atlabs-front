// src/lib/auth.ts
import NextAuth, { type DefaultSession } from "next-auth";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { prisma } from "../lib/prisma";
import EmailProvider from "next-auth/providers/email";
// при желании можно включить OAuth провайдеры
// import Google from "next-auth/providers/google";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            plan: "FREE" | "STUDENT" | "PRO";
            stripeCustomerId?: string | null;
        } & DefaultSession["user"];
    }
    interface User {
        plan: "FREE" | "STUDENT" | "PRO";
        stripeCustomerId?: string | null;
    }
}

export const {
    handlers: { GET, POST },
    auth,
    signIn,
    signOut,
} = NextAuth({
    debug: process.env.NODE_ENV === "development",
    adapter: PrismaAdapter(prisma),
    session: { strategy: "database" },
    trustHost: true,
    providers: [
        EmailProvider({
            server: {
                host: process.env.EMAIL_SERVER_HOST!,
                port: Number(process.env.EMAIL_SERVER_PORT || 587),
                auth: {
                    user: process.env.EMAIL_SERVER_USER!,
                    pass: process.env.EMAIL_SERVER_PASSWORD!,
                },
            },
            from: process.env.EMAIL_FROM!,
        }),
        // Google({ clientId: ..., clientSecret: ... })
    ],
    callbacks: {
        async session({ session, user }) {
            if (session.user) {
                (session.user as any).id = user.id;
                (session.user as any).plan = user.plan;
                (session.user as any).stripeCustomerId = user.stripeCustomerId ?? null;
            }
            return session;
        },
    },
});
