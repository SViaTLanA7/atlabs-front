// src/middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
    const { pathname } = request.nextUrl;

    // пропускаем публичные маршруты
    const isPublic =
        pathname === "/" ||
        pathname.startsWith("/login") ||
        pathname.startsWith("/register") ||
        pathname.startsWith("/api");

    if (isPublic) {
        return NextResponse.next();
    }

    // читаем куку токена
    const token = request.cookies.get("token")?.value;

    // защищаем /dashboard (+ все вложенные)
    if (pathname.startsWith("/dashboard") && !token) {
        const url = new URL("/login", request.url);
        return NextResponse.redirect(url);
    }

    return NextResponse.next();
}

// матчим только то, что нужно
export const config = {
    matcher: ["/dashboard/:path*", "/((?!_next|favicon.ico|public).*)"],
};
