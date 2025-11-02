"use client";

import { useState } from "react";
import Link from "next/link";

type Plan = {
    id: string;
    title: string;
    subtitle: string;
    price: string;
    period: string;
    tokens: string;
    bullets: string[];
    highlight?: boolean;
};

const PLANS: Plan[] = [
    {
        id: "starter",
        title: "Базовый",
        subtitle: "Для пробы и быстрых задач",
        price: "0 ₽",
        period: "бесплатно",
        tokens: "100 токенов",
        bullets: ["Мини-агенты для учёбы", "Решения и конспекты", "История запросов"],
    },
    {
        id: "student",
        title: "Студент",
        subtitle: "На каждый день учёбы",
        price: "330 ₽",
        period: "в месяц",
        tokens: "1000 токенов",
        bullets: ["Все мини-агенты", "Безлимит по конспектам", "Приоритетные ответы"],
        highlight: true,
    },
    {
        id: "pro",
        title: "Про",
        subtitle: "Максимум возможностей",
        price: "820 ₽",
        period: "в месяц",
        tokens: "безлимит*",
        bullets: ["Доступ ко всем лабораториям", "Загрузка файлов", "Экспорт PDF/Docx"],
    },
];

export default function Pricing() {
    const [selected, setSelected] = useState<string>(PLANS[1].id);

    return (
        <section className="pricing">
            <header className="pricing-head">
                <h2>ОТКРОЙ ПОЛНЫЙ ДОСТУП К StudyFlow</h2>
                <p className="muted">При регистрации дарим 100 токенов — хватит на первые решения</p>
            </header>

            <div className="pricing-grid container-1160">
                {PLANS.map((p) => (
                    <article
                        key={p.id}
                        className={`card price-card ${p.highlight ? "price-card--hot" : ""}`}
                    >
                        <div className="price-top">
                            <div className="price-title">{p.title}</div>
                            <div className="price-sub">{p.subtitle}</div>
                        </div>

                        <div className="price-tag">
                            <div className="price">{p.price}</div>
                            <div className="period">{p.period}</div>
                        </div>

                        <div className="price-meta">
                            <div className="tokens">{p.tokens}</div>
                        </div>

                        <ul className="price-list">
                            {p.bullets.map((b, i) => (
                                <li key={i}>{b}</li>
                            ))}
                        </ul>

                        <label className="price-radio">
                            <input
                                type="radio"
                                name="plan"
                                value={p.id}
                                checked={selected === p.id}
                                onChange={() => setSelected(p.id)}
                            />
                            <span>Выбрать тариф</span>
                        </label>
                    </article>
                ))}
            </div>

            <div className="pricing-cta">
                <Link
                    href={`/pricing?plan=${selected}`}
                    className="btn-primary"
                >
                    Оформить подписку
                </Link>
                <div className="muted text-[13px]">
                    * Безлимит действует по fair-use: система предупреждает при сверхнагрузке.
                </div>
            </div>
        </section>
    );
}
