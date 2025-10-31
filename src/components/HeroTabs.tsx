'use client';

import { useState } from 'react';
import Link from 'next/link';

type Tab = {
    key: string;
    title: string;
    subtitle: string;
    points: string[];
    cta: { href: string; label: string };
    icon?: string; // путь к svg из /public/atlabs
};

const TABS: Tab[] = [
    {
        key: 'study',
        title: 'Помощь с учёбой',
        subtitle: 'Решай задачи, пиши мини-конспекты и готовься к сессии быстрее.',
        points: [
            '160+ школьных и вузовских предметов',
            'Разбор по шагам и проверка решения',
            'Готовые мини-конспекты за 30 секунд',
        ],
        cta: { href: '/solutions', label: 'Решить задачу' },
        icon: '/atlabs/lab-1.svg',
    },
    {
        key: 'career',
        title: 'Карьера и навыки',
        subtitle: 'План обучения и развитие soft/hard-skills для роста.',
        points: [
            'Индивидуальный план обучения',
            'Разбор резюме и подготовка к интервью',
            'Ежедневка: маленькие шаги — большой прогресс',
        ],
        cta: { href: '/growth', label: 'Построить план' },
        icon: '/atlabs/lab-3.svg',
    },
    {
        key: 'finance',
        title: 'Финансы',
        subtitle: 'Учимся вести личный бюджет и принимать решения.',
        points: [
            'Учёт доходов и расходов',
            'Простые рекомендации по экономии',
            'Финансовая грамотность без сложных терминов',
        ],
        cta: { href: '/finance', label: 'Начать вести бюджет' },
        icon: '/atlabs/lab-4.svg',
    },
];

export default function HeroTabs() {
    const [active, setActive] = useState<Tab['key']>('study');
    const tab = TABS.find(t => t.key === active)!;

    return (
        <section className="container-1160 px-4 mt-6 md:mt-10">
            {/* Переключатели */}
            <div className="flex w-full gap-2 md:gap-3 overflow-x-auto no-scrollbar">
                {TABS.map(t => {
                    const isActive = t.key === active;
                    return (
                        <button
                            key={t.key}
                            onClick={() => setActive(t.key)}
                            className={`whitespace-nowrap rounded-2xl border px-4 py-2 text-[14px] md:text-[15px] transition
                ${isActive
                                ? 'bg-[--brand] text-white border-[--brand]'
                                : 'bg-white text-[--text] border-[--br] hover:bg-[--brand-50]'
                            }`}
                        >
                            {t.title}
                        </button>
                    );
                })}
            </div>

            {/* Контент активной вкладки */}
            <div className="card mt-4 md:mt-6 p-5 md:p-6 grid md:grid-cols-3 gap-5 items-start">
                <div className="md:col-span-2">
                    <div className="flex items-center gap-3">
                        {tab.icon && (
                            // иконки лежат в /public/atlabs/*
                            <img src={tab.icon} alt="" className="h-8 w-8" />
                        )}
                        <h3 className="text-[18px] md:text-[20px] font-semibold">{tab.title}</h3>
                    </div>
                    <p className="mt-2 text-[15px] text-[var(--muted)]">{tab.subtitle}</p>

                    <ul className="mt-4 space-y-2 text-[15px]">
                        {tab.points.map(p => (
                            <li key={p} className="flex gap-2">
                                <span className="mt-1 inline-block h-2 w-2 rounded-full bg-[--brand]" />
                                <span>{p}</span>
                            </li>
                        ))}
                    </ul>

                    <Link
                        href={tab.cta.href}
                        className="inline-flex mt-5 btn-primary bg-[--brand] hover:opacity-90"
                    >
                        {tab.cta.label}
                    </Link>
                </div>

                {/* Правый блок — иллюстрация/плейсхолдер */}
                <div className="md:col-span-1">
                    <div className="rounded-2xl border border-[--br] bg-[--brand-50] h-[180px] md:h-full min-h-[180px] flex items-center justify-center text-[--brand] font-semibold">
                        Иллюстрация
                    </div>
                </div>
            </div>
        </section>
    );
}
