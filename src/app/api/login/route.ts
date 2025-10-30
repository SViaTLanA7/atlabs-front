import { NextResponse } from "next/server";
import { loginSchema } from "@/lib/validators";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email } = loginSchema.parse(body);

        // В реальности здесь должна быть проверка пользователя
        const res = NextResponse.json({ ok: true, email });
        res.cookies.set("token", `demo-${email}`, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 7,
        });
        return res;
    } catch (e: any) {
        return NextResponse.json(
            { ok: false, error: e?.message ?? "Invalid data" },
            { status: 400 }
        );
    }
}
