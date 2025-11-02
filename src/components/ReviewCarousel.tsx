"use client";

import { useState } from "react";
import Image from "next/image";

type Item = {
    name: string;
    role: string;
    avatar: string;
    badge?: string;
    rating: 1 | 2 | 3 | 4 | 5;
    text: string;
};

export default function ReviewCarousel({ items }: { items: Item[] }) {
    // защита: пустой список
    if (!items || items.length === 0) {
        return null;
    }

    const [i, setI] = useState(0);
    const current = items[i];

    const next = () => setI((v) => (v + 1) % items.length);
    const prev = () => setI((v) => (v - 1 + items.length) % items.length);

    return (
        <div className="review-wrap" role="region" aria-label="Отзывы пользователей">
            <button
                className="carousel-btn"
                type="button"
                onClick={prev}
                aria-label="Назад"
            >
                ‹
            </button>

            <div className="card review-card">
                <div className="review-top">
                    <Image
                        src={current.avatar}
                        alt=""
                        width={40}
                        height={40}
                        className="rounded-full"
                    />
                    <div>
                        <div className="font-semibold">{current.name}</div>
                        <div className="muted text-[13px]">{current.role}</div>
                    </div>
                    {current.badge && <span className="badge">{current.badge}</span>}
                    <div className="ml-auto" aria-label={`Оценка ${current.rating} из 5`}>
                        {"★★★★★".slice(0, current.rating)}
                        {"☆☆☆☆☆".slice(current.rating)}
                    </div>
                </div>
                <p className="review-text">{current.text}</p>
            </div>

            <button
                className="carousel-btn"
                type="button"
                onClick={next}
                aria-label="Вперёд"
            >
                ›
            </button>
        </div>
    );
}
