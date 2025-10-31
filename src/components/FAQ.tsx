// src/components/FAQ.tsx
"use client";

import { useId, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type FaqItem = { q: string; a: string };

const items: FaqItem[] = [
    {
        q: "Это ИИ напишет за меня контрольную?",
        a: "Нет. StudyFlow помогает понять материал, подготовиться и разобрать решение по шагам, но не заменяет самостоятельную работу.",
    },
    {
        q: "Насколько точны ответы?",
        a: "Для типовых задач точность высокая (95%+), особенно по математике, физике, химии и биологии. Мы постоянно улучшаем модели.",
    },
    {
        q: "Есть бесплатный режим?",
        a: "Да, первые 100 токенов выдаются автоматически после регистрации.",
    },
    {
        q: "Будет ли мини-приложение Telegram?",
        a: "Да, уже доступно в тестовом режиме. Можно будет решать задачи прямо в Telegram.",
    },
];

export default function FAQ() {
    const [open, setOpen] = useState<number | null>(0);

    return (
        <div className="space-y-3">
            {items.map((it, idx) => (
                <FaqRow
                    key={idx}
                    item={it}
                    isOpen={open === idx}
                    onToggle={() => setOpen(open === idx ? null : idx)}
                />
            ))}
        </div>
    );
}

function FaqRow({
                    item,
                    isOpen,
                    onToggle,
                }: {
    item: FaqItem;
    isOpen: boolean;
    onToggle: () => void;
}) {
    const contentId = useId();

    return (
        <article className="card p-0 overflow-hidden border border-white/10">
            {/* Header */}
            <button
                type="button"
                aria-expanded={isOpen}
                aria-controls={contentId}
                onClick={onToggle}
                className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-white/5 transition"
            >
                <h3 className="text-[16px] md:text-[18px] font-semibold pr-3">
                    {item.q}
                </h3>

                <motion.span
                    initial={false}
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.2 }}
                    className="inline-flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-white/80"
                    aria-hidden
                    title={isOpen ? "Свернуть" : "Развернуть"}
                >
                    +
                </motion.span>
            </button>

            {/* Animated content */}
            <AnimatePresence initial={false}>
                {isOpen && (
                    <motion.div
                        id={contentId}
                        key="content"
                        initial="collapsed"
                        animate="open"
                        exit="collapsed"
                        variants={{
                            open: { height: "auto", opacity: 1 },
                            collapsed: { height: 0, opacity: 0 },
                        }}
                        transition={{ duration: 0.26, ease: [0.2, 0.8, 0.2, 1] }}
                        className="px-4"
                    >
                        <div className="border-t border-white/10" />
                        <div className="py-3 text-[14px] leading-relaxed text-[var(--muted)]">
                            {item.a}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </article>
    );
}
