'use client';

import { useState } from 'react';

const items = [
    { q: 'Это ИИ напишет за меня контрольную?', a: 'Мы помогаем понять и подготовиться...' },
    { q: 'Насколько точны ответы?', a: 'Для типовых задач точность высокая...' },
    { q: 'Есть бесплатный режим?', a: 'Да, первые 100 токенов бесплатно.' },
    { q: 'Будет ли мини-приложение Telegram?', a: 'Да, уже в тесте.' },
];

export default function FAQPage() {
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section className="container-1160 px-4 py-10">
            <h1>FAQ</h1>
            <div className="mt-6 space-y-3">
                {items.map((it, idx) => (
                    <div key={idx} className="card p-4">
                        <button className="w-full text-left" onClick={() => setOpen(open === idx ? null : idx)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-[18px] font-semibold">{it.q}</h3>
                                <span className="text-sm opacity-60">{open === idx ? '–' : '+'}</span>
                            </div>
                        </button>
                        {open === idx && <p className="mt-2">{it.a}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
}
