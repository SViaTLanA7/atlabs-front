import { NextResponse } from "next/server";
import { registerSchema } from "@/lib/validators";

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { email, password } = registerSchema.parse(body);

        // Здесь могла бы быть реальная запись в БД
        // Мы просто возвращаем "успех" и ставим куку token

        const res = NextResponse.json({ ok: true, email });
        res.cookies.set("token", `demo-${email}`, {
            httpOnly: true,
            path: "/",
            maxAge: 60 * 60 * 24 * 7, // 7 дней
        });
        return res;
    } catch (e: any) {
        return NextResponse.json(
            { ok: false, error: e?.message ?? "Invalid data" },
            { status: 400 }
        );
    }
}
