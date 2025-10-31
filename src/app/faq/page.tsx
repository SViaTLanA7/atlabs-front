// src/app/faq/page.tsx
'use client';

import { useState } from 'react';
export const metadata = { title: 'FAQ — ответы на вопросы' };

const items = [
    { q: 'Это ИИ напишет за меня контрольную?', a: 'Мы помогаем понять и подготовиться. Генерируем план, подсказки, разбор и примеры — чтобы ты мог(ла) сделать работу самостоятельно и уверенно.' },
    { q: 'Насколько точны ответы?', a: 'Для типовых задач точность высокая. В спорных темах — даём шаги проверки и альтернативы. Можно запросить детальный разбор.' },
    { q: 'Есть бесплатный режим?', a: 'Да: первые 100 токенов бесплатно. Далее — подписка или тарифы по потреблению.' },
    { q: 'Будет ли мини-приложение Telegram?', a: 'Да. У нас уже есть alpha-версия. Поддерживаются TWA SDK, back-button и темы.' },
];

export default function FAQPage(){
    const [open, setOpen] = useState<number | null>(0);
    return (
        <section className="container-1160 px-4 py-10">
            <h1>FAQ</h1>
            <div className="mt-6 space-y-3">
                {items.map((it, idx)=>(
                    <div key={idx} className="card p-4">
                        <button className="w-full text-left" onClick={()=>setOpen(open===idx?null:idx)}>
                            <div className="flex items-center justify-between">
                                <h3 className="text-[18px] font-semibold">{it.q}</h3>
                                <span className="text-sm opacity-60">{open===idx?'–':'+'}</span>
                            </div>
                        </button>
                        {open===idx && <p className="mt-2">{it.a}</p>}
                    </div>
                ))}
            </div>
        </section>
    );
}
