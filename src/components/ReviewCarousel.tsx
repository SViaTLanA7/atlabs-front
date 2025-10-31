// src/components/ReviewCarousel.tsx
"use client";
import { useState } from "react";
import Image from "next/image";

type Review = {
    name: string;
    role: string;
    text: string;
    rating?: number;
};

const DOT = "•";

export default function ReviewCarousel() {
    const items: Review[] = [
        { name: "Анна", role: "Студент", text: "Я думала, не успею к экзамену. Но всё сдала и спокойно спала впервые за семестр", rating: 5 },
        { name: "Илья", role: "Студент", text: "Помог по шагам разобрать тему и собрать конспект. Удобно", rating: 5 },
        { name: "Оля", role: "Студент", text: "Круто, что можно прикрепить фото условия и получить понятное решение", rating: 5 },
    ];

    const [idx, setIdx] = useState(0);
    const prev = () => setIdx((p) => (p - 1 + items.length) % items.length);
    const next = () => setIdx((p) => (p + 1) % items.length);

    const it = items[idx];

    return (
        <div className="rounded-2xl border border-white/15 bg-white/6 p-5 md:p-6">
            <div className="flex items-center gap-3">
                <Image src="/atlabs/user.svg" alt="" width={40} height={40} />
                <div>
                    <div className="font-semibold text-white">{it.name}</div>
                    <div className="text-xs text-white/70">{it.role}</div>
                </div>
                <div className="ml-auto text-white/80 text-sm">
                    {"★".repeat(it.rating ?? 5)} <span className="text-white/60">5.0</span>
                </div>
            </div>
            <p className="mt-4 text-white/85">{`“${it.text}”`}</p>

            <div className="mt-6 flex items-center justify-between">
                <button onClick={prev} className="rounded-lg bg-white/10 px-3 py-2 text-white hover:bg-white/15">
                    ←
                </button>
                <div className="text-white/60 text-sm">
                    {items.map((_, i) => (
                        <span key={i} className={i === idx ? "text-white" : ""}>
              {DOT}
            </span>
                    ))}
                </div>
                <button onClick={next} className="rounded-lg bg-white/10 px-3 py-2 text-white hover:bg-white/15">
                    →
                </button>
            </div>
        </div>
    );
}
