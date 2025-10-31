// src/app/api/solutions/route.ts
import { NextResponse } from "next/server";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";

/**
 * Принимает JSON:
 * {
 *   text: string;
 *   files?: { name: string; size?: number }[];
 * }
 * Возвращает JSON с "решением" (мок).
 */
export async function POST(req: Request) {
    try {
        const body = await req.json().catch(() => ({}));
        const text = (body?.text ?? "").toString();
        const files = Array.isArray(body?.files) ? body.files : [];

        if (!text.trim() && files.length === 0) {
            return NextResponse.json({ error: "EMPTY_INPUT" }, { status: 400 });
        }

        // имитация обработки
        await new Promise((r) => setTimeout(r, 900));

        // Мок-результат
        const result = {
            id: crypto.randomUUID(),
            createdAt: Date.now(),
            input: {
                text,
                files,
            },
            output: {
                title: "Решение задачи",
                steps: [
                    "1) Определим тип задачи и приведём условие к стандартной форме.",
                    "2) Выполним преобразования/подстановки и упростим выражения.",
                    "3) Рассчитаем промежуточные значения и проверим ограничения.",
                    "4) Сформируем итоговый ответ и краткое объяснение.",
                ],
                note:
                    "Примечание: для итоговой проверки используйте оригинальные допущения/единицы из условия.",
            },
            tokensSpent: 5,
            status: "done" as const,
        };

        return NextResponse.json(result, { status: 200 });
    } catch (e) {
        return NextResponse.json({ error: "SERVER_ERROR" }, { status: 500 });
    }
}
