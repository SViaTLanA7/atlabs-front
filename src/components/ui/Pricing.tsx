// src/components/ui/Pricing.tsx
"use client";

import { useState, useMemo } from "react";
import Link from "next/link";

type Plan = {
    id: "starter" | "student" | "pro";
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
    const [selected, setSelected] = useState<Plan["id"]>("student");
    const [loading, setLoading] = useState<"checkout" | "portal" | null>(null);
    const selectedPlan = useMemo(
        () => PLANS.find((p) => p.id === selected)!,
        [selected]
    );

    const handleCheckout = async () => {
        try {
            setLoading("checkout");
            const res = await fetch("/api/billing/checkout", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ plan: selected }), // "starter" | "student" | "pro"
            });
            const data = await res.json();
            if (res.ok && data?.url) {
                window.location.href = data.url; // переход в Stripe Checkout
            } else {
                alert(data?.error || "Не удалось создать сессию оплаты");
            }
        } catch (e) {
            alert("Ошибка сети при попытке оплаты");
        } finally {
            setLoading(null);
        }
    };

    const handlePortal = async () => {
        try {
            setLoading("portal");
            const res = await fetch("/api/billing/portal", { method: "POST" });
            const data = await res.json();
            if (res.ok && data?.url) {
                window.location.href = data.url; // Stripe Customer Portal
            } else {
                alert(data?.error || "Не удалось открыть портал подписки");
            }
        } catch (e) {
            alert("Ошибка сети при открытии портала");
        } finally {
            setLoading(null);
        }
    };

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
                {/* Кнопка оплаты (Stripe Checkout) */}
                <button
                    className="btn-primary"
                    onClick={handleCheckout}
                    disabled={loading !== null || selectedPlan.id === "starter"}
                    title={selectedPlan.id === "starter" ? "Оплата не нужна на бесплатном тарифе" : ""}
                >
                    {loading === "checkout" ? "Создаём оплату…" : "Оформить подписку"}
                </button>

                {/* Портал управления подпиской (Stripe Customer Portal) */}
                <button
                    className="btn-outline"
                    onClick={handlePortal}
                    disabled={loading !== null}
                    style={{ marginTop: 6 }}
                >
                    {loading === "portal" ? "Открываем портал…" : "Управлять подпиской"}
                </button>

                <div className="muted text-[13px]" style={{ marginTop: 8 }}>
                    * Безлимит действует по fair-use: система предупреждает при сверхнагрузке.
                </div>

                {/* Опционально: ссылка на оферту/политику */}
                <div className="muted text-[12px]" style={{ marginTop: 6 }}>
                    Оформляя подписку вы соглашаетесь с{" "}
                    <Link href="/legal/offer" className="underline">офертой</Link> и{" "}
                    <Link href="/legal/privacy" className="underline">политикой конфиденциальности</Link>.
                </div>
            </div>
        </section>
    );
}
