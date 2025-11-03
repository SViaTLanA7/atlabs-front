// src/lib/auth.ts
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import type { NextAuthOptions } from "next-auth";
import GitHubProvider from "next-auth/providers/github";
// при желании подключай ещё провайдеры (Google и т.д.)
import { prisma } from "./prisma";

export const authOptions: NextAuthOptions = {
    adapter: PrismaAdapter(prisma),
    session: { strategy: "jwt" },

    providers: [
        GitHubProvider({
            clientId: process.env.GITHUB_ID ?? "",
            clientSecret: process.env.GITHUB_SECRET ?? "",
        }),
        // GoogleProvider({ clientId: ..., clientSecret: ... }),
    ],

    pages: {
        signIn: "/login",
    },

    callbacks: {
        async jwt({ token, user }) {
            if (user) token.uid = user.id;
            return token;
        },
        async session({ session, token }) {
            if (token?.uid && session.user) {
                (session.user as any).id = token.uid;
            }
            return session;
        },
    },
};
