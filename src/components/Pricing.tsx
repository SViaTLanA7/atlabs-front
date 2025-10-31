// src/components/Pricing.tsx
"use client";

type Plan = {
    name: string;
    price: string;
    note?: string;
    badge?: string;
    features: string[];
    best?: boolean;
};

const plans: Plan[] = [
    {
        name: "Базовый",
        price: "330 ₽",
        note: "100 токенов",
        badge: "-17%",
        features: ["Решения задач", "Мини-конспекты", "Чат-подсказки"],
    },
    {
        name: "Стандарт",
        price: "820 ₽",
        badge: "-25%",
        best: true,
        features: ["Всё из Базового", "Ежедневные задания", "Приоритет поддержки"],
    },
    {
        name: "Премиум",
        price: "2 890 ₽",
        badge: "-29%",
        features: ["Безлимит токенов", "Готовые шаблоны", "Доступ к mini-app Telegram"],
    },
];

export default function Pricing() {
    return (
        <div className="grid md:grid-cols-3 gap-4">
            {plans.map((p) => (
                <article
                    key={p.name}
                    className={`card p-5 relative ${
                        p.best ? "ring-2 ring-white/40" : ""
                    }`}
                >
                    {p.best && (
                        <span className="absolute -top-3 left-5 rounded-full bg-white text-[oklch(0.5_0.21_300)] px-2 py-1 text-[11px] font-semibold">
              Рекомендуем
            </span>
                    )}

                    <div className="flex items-center justify-between">
                        <h3 className="text-white font-semibold">{p.name}</h3>
                        {p.badge && (
                            <span className="rounded-full bg-white/10 text-white px-2 py-1 text-xs border border-white/15">
                {p.badge}
              </span>
                        )}
                    </div>

                    <div className="text-[28px] font-extrabold mt-2">{p.price}</div>
                    {p.note && <div className="text-sm opacity-70">{p.note}</div>}

                    <ul className="mt-4 space-y-1 text-[14px]">
                        {p.features.map((f) => (
                            <li key={f}>• {f}</li>
                        ))}
                    </ul>

                    <a
                        href="/checkout?plan="
                        onClick={(e) => {
                            e.currentTarget.href = `/checkout?plan=${encodeURIComponent(p.name)}`;
                        }}
                        className="btn btn-primary mt-4 w-full inline-flex justify-center rounded-[10px]"
                    >
                        Оформить подписку
                    </a>
                </article>
            ))}
        </div>
    );
}
