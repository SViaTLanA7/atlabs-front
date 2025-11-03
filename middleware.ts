// src/middleware.ts
import { NextResponse, type NextRequest } from "next/server";
import { auth } from "./lib/auth";

export async function middleware(req: NextRequest) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/chat") || url.pathname.startsWith("/dashboard")) {
        const session = await auth();
        if (!session) {
            const signInUrl = new URL("/login", url.origin);
            signInUrl.searchParams.set("callbackUrl", url.pathname);
            return NextResponse.redirect(signInUrl);
        }
    }
    return NextResponse.next();
}

export const config = {
    matcher: ["/chat/:path*", "/dashboard/:path*"],
};
