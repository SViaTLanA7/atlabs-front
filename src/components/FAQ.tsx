"use client";

import { useState } from "react";

type QA = { q: string; a: string };

const DATA: QA[] = [
    {
        q: "Что такое StudyFlow?",
        a: "StudyFlow — это набор AI-инструментов для учёбы: решение задач, мини-конспекты, планирование и психологические практики. Работает в веб-приложении и через мини-агентов.",
    },
    {
        q: "Мне подойдут лаборатории, если учусь не на очном?",
        a: "Да. Лаборатории спроектированы как универсальные модули: конспекты, разборы, тренажёры, Pomodoro и чек-листы. Их можно использовать в любом графике обучения.",
    },
    {
        q: "Сколько стоят токены?",
        a: "В подписке «Студент» и «Про» токены уже включены. В бесплатном тарифе даём 100 токенов на старт.",
    },
    {
        q: "Это безопасно?",
        a: "Мы не используем ваши данные для обучения моделей, а все вложения удаляются из очереди обработки после ответа.",
    },
    {
        q: "Можно ли отменить подписку?",
        a: "Да. Подписку можно отменить в любой момент в личном кабинете — доступ сохранится до конца оплаченного периода.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <section className="faq container-1160">
            <h2>ЧАСТЫЕ ВОПРОСЫ</h2>

            <div className="faq-list">
                {DATA.map((item, idx) => {
                    const isOpen = open === idx;
                    return (
                        <details
                            key={idx}
                            className="faq-item"
                            open={isOpen}
                            onClick={(e) => {
                                e.preventDefault();
                                setOpen(isOpen ? null : idx);
                            }}
                        >
                            <summary>
                                <span>{item.q}</span>
                                <span className={`faq-arrow ${isOpen ? "rot" : ""}`}>▾</span>
                            </summary>
                            <div className="faq-body">{item.a}</div>
                        </details>
                    );
                })}
            </div>
        </section>
    );
}
