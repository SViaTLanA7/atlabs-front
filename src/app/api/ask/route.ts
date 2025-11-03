// src/app/api/ask/route.ts
import { NextResponse } from "next/server";
import { auth } from "../../../lib/auth";
import { prisma } from "../../../lib/prisma";
import { rateLimit } from "../../../lib/ratelimit";

const OPENROUTER_URL = "https://openrouter.ai/api/v1/chat/completions";
const MODEL = process.env.OPENROUTER_MODEL || "google/gemini-flash-1.5";

export const runtime = "nodejs";

export async function POST(req: Request) {
    const session = await auth();
    const ip = req.headers.get("x-forwarded-for") ?? "anon";
    // Рейт-лимит для анонима
    if (!session?.user?.id) {
        const lim = await rateLimit.limit(`anon:${ip}`);
        if (!lim.success) {
            return NextResponse.json({ error: "Too many requests" }, { status: 429 });
        }
    }

    const { q, messages } = await req.json();
    if (!q && (!messages || !Array.isArray(messages))) {
        return NextResponse.json({ error: "Bad request" }, { status: 400 });
    }

    // Usage + тарифы
    let canProceed = true;
    let tokensRemaining = 100;
    if (session?.user?.id) {
        const user = await prisma.user.findUnique({
            where: { id: session.user.id },
            include: { usage: true, Subscription: true as any },
        });

        const plan = user?.plan ?? "FREE";
        const limitByPlan = plan === "PRO" ? 200000 : plan === "STUDENT" ? 10000 : 100;
        const used = user?.usage?.tokensUsed ?? 0;
        tokensRemaining = limitByPlan - used;
        if (tokensRemaining <= 0) canProceed = false;

        if (!user?.usage) {
            await prisma.usage.create({
                data: { userId: session.user.id, tokensLimit: limitByPlan },
            });
        } else if (user.usage.tokensLimit !== limitByPlan) {
            await prisma.usage.update({
                where: { userId: session.user.id },
                data: { tokensLimit: limitByPlan },
            });
        }
    }

    if (!canProceed) {
        return NextResponse.json(
            { error: "Quota exceeded. Upgrade your plan.", code: "QUOTA" },
            { status: 402 }
        );
    }

    // Формируем запрос в OpenRouter
    const body = {
        model: MODEL,
        messages: messages ?? [{ role: "user", content: q }],
        stream: true,
    };

    const upstream = await fetch(OPENROUTER_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "HTTP-Referer": process.env.NEXTAUTH_URL || "https://studyflow.app",
            "X-Title": "StudyFlow",
            Authorization: `Bearer ${process.env.OPENROUTER_API_KEY}`,
        },
        body: JSON.stringify(body),
    });

    if (!upstream.ok || !upstream.body) {
        const text = await upstream.text().catch(() => "");
        return NextResponse.json(
            { error: "LLM upstream error", details: text.slice(0, 500) },
            { status: 502 }
        );
    }

    // Проксируем стрим как есть
    const stream = new ReadableStream({
        async start(controller) {
            const reader = upstream.body!.getReader();
            const encoder = new TextEncoder();

            // сохраняем вопрос в историю
            if (session?.user?.id && q) {
                await prisma.message.create({
                    data: { userId: session.user.id, role: "user", content: String(q).slice(0, 4000) },
                });
            }

            let collected = "";
            try {
                while (true) {
                    const { value, done } = await reader.read();
                    if (done) break;
                    controller.enqueue(value);
                    // грубая оценка токенов (по символам) для usage
                    collected += new TextDecoder().decode(value);
                }
            } catch (e) {
                controller.error(e);
                return;
            } finally {
                controller.close();
                // Прикидываем расход токенов и пишем usage + ответ в историю
                if (session?.user?.id) {
                    const approxTokens = Math.ceil(collected.length / 3.5); // очень грубо
                    await prisma.usage.update({
                        where: { userId: session.user.id },
                        data: { tokensUsed: { increment: approxTokens } },
                    });
                    await prisma.message.create({
                        data: {
                            userId: session.user.id,
                            role: "assistant",
                            content: collected.slice(0, 4000),
                        },
                    });
                }
            }
        },
    });

    return new Response(stream, {
        headers: {
            "Content-Type": "text/event-stream; charset=utf-8",
            "Cache-Control": "no-cache, no-transform",
            Connection: "keep-alive",
        },
    });
}
