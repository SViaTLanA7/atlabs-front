// src/components/solutions/SolutionsClient.tsx
"use client";

import { useRef, useState } from "react";
import Image from "next/image";

type FilePreview = { id: string; name: string; size: number };

export default function SolutionsClient() {
    const [text, setText] = useState("");
    const [files, setFiles] = useState<FilePreview[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [tokensLeft, setTokensLeft] = useState(100); // заглушка: «100 токенов»

    const inputRef = useRef<HTMLInputElement | null>(null);

    function onPickFiles() {
        inputRef.current?.click();
    }

    function onFilesSelected(e: React.ChangeEvent<HTMLInputElement>) {
        const list = e.target.files;
        if (!list) return;
        const next: FilePreview[] = [];
        for (let i = 0; i < list.length; i++) {
            const f = list.item(i)!;
            next.push({ id: crypto.randomUUID(), name: f.name, size: f.size });
        }
        setFiles((prev) => [...prev, ...next]);
        // очищаем value, чтобы можно было выбрать те же файлы повторно
        e.currentTarget.value = "";
    }

    function removeFile(id: string) {
        setFiles((prev) => prev.filter((f) => f.id !== id));
    }

    async function onSubmit(e: React.FormEvent) {
        e.preventDefault();
        if (!text.trim() && files.length === 0) return;

        setSubmitting(true);
        try {
            // тут будет реальный вызов API (FastAPI/Next API) — заглушка:
            await new Promise((r) => setTimeout(r, 1200));
            setTokensLeft((n) => Math.max(0, n - 5)); // условно списали 5 токенов
            setText("");
            setFiles([]);
            alert("Заявка отправлена! Мы подготовим решение и уведомим.");
        } finally {
            setSubmitting(false);
        }
    }

    return (
        <main className="bg-[oklch(0.68_0.2_300)] min-h-screen">
            <section className="py-10 md:py-14">
                <div className="container mx-auto px-4">
                    {/* Заголовок */}
                    <div className="mb-6 md:mb-8">
                        <h1 className="text-3xl md:text-4xl font-semibold text-white tracking-[-0.01em]">
                            РЕШЕНИЯ ЗАДАЧ
                        </h1>
                        <p className="mt-2 text-white/85 max-w-2xl">
                            Просто введи условие или прикрепи фото — мы быстро подготовим
                            пошаговое решение с объяснениями.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[1fr_360px] gap-6">
                        {/* Левая колонка: форма */}
                        <form
                            onSubmit={onSubmit}
                            className="rounded-3xl border border-white/15 bg-white/8 backdrop-blur p-4 md:p-6"
                        >
                            <label className="block text-white/90 text-sm mb-3">
                                Введи или прикрепи задачу (текст, фото, файл)
                            </label>

                            <textarea
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                placeholder="Например: «Решите квадратное уравнение x² - 5x + 6 = 0»"
                                className="min-h-[160px] w-full resize-y rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:bg-white/12"
                            />

                            {/* Прикрепления */}
                            <div className="mt-4 flex flex-wrap items-center gap-3">
                                <button
                                    type="button"
                                    onClick={onPickFiles}
                                    className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-4 py-2 text-white hover:bg-white/15 transition"
                                >
                                    <PaperclipIcon />
                                    Прикрепить файл
                                </button>
                                <input
                                    ref={inputRef}
                                    type="file"
                                    multiple
                                    onChange={onFilesSelected}
                                    className="hidden"
                                    accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.txt"
                                />
                                <span className="text-white/70 text-sm">Допустимо: PNG/JPG/PDF/DOC/TXT</span>
                            </div>

                            {files.length > 0 && (
                                <div className="mt-4 rounded-xl border border-white/15 bg-white/6">
                                    {files.map((f) => (
                                        <div
                                            key={f.id}
                                            className="flex items-center justify-between px-4 py-2 text-white/90"
                                        >
                                            <div className="flex items-center gap-3">
                                                <Image
                                                    src="/atlabs/folder.svg"
                                                    alt=""
                                                    width={20}
                                                    height={20}
                                                    className="opacity-80"
                                                />
                                                <div className="text-sm">
                                                    {f.name}{" "}
                                                    <span className="text-white/60">
                            ({Math.round(f.size / 1024)} кб)
                          </span>
                                                </div>
                                            </div>
                                            <button
                                                type="button"
                                                onClick={() => removeFile(f.id)}
                                                className="text-white/70 hover:text-white"
                                                aria-label="Удалить файл"
                                                title="Удалить"
                                            >
                                                ✕
                                            </button>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="mt-6 flex flex-col sm:flex-row items-center gap-3">
                                <button
                                    type="submit"
                                    disabled={submitting || (!text.trim() && files.length === 0)}
                                    className="inline-flex w-full sm:w-auto items-center justify-center rounded-xl bg-white px-6 py-3 font-medium text-[oklch(0.5_0.21_300)] hover:opacity-90 disabled:opacity-50 transition"
                                >
                                    {submitting ? "Отправляем…" : "Получить решение"}
                                </button>

                                <div className="text-white/80 text-sm">
                                    5 токенов ≈ 1 задача · Осталось:{" "}
                                    <span className="text-white font-semibold">{tokensLeft}</span>
                                </div>
                            </div>
                        </form>

                        {/* Правая колонка: преимущества / подсказки */}
                        <aside className="rounded-3xl border border-white/15 bg-white/6 p-4 md:p-6">
                            <div className="flex items-center gap-3">
                                <Image src="/atlabs/book.svg" alt="" width={32} height={32} />
                                <div className="text-white font-semibold">
                                    Подписка с безлимитом токенов
                                </div>
                            </div>

                            <ul className="mt-4 space-y-3 text-white/85 text-sm">
                                <li>• Решай задачи онлайн без ограничений</li>
                                <li>• Поддержка по 160+ предметам</li>
                                <li>• Доступ к базе готовых решений и конспектов</li>
                                <li>• Бесплатные работы каждый месяц</li>
                                <li>• Экономь время и деньги — учись удобнее и быстрее</li>
                            </ul>

                            <button
                                className="mt-6 w-full rounded-xl bg-white/10 py-2.5 text-white hover:bg-white/15 transition"
                                onClick={() => alert("Откроем страницу тарифов")}
                            >
                                Перейти к тарифам
                            </button>

                            <hr className="my-6 border-white/10" />

                            <div className="text-white/90 font-medium mb-2">
                                Советы для быстрого ответа
                            </div>
                            <ul className="space-y-2 text-white/80 text-sm">
                                <li>• Пишите условие максимально конкретно</li>
                                <li>• Прикладывайте фото с хорошим качеством</li>
                                <li>• Указывайте формат результата: «пошаговое решение», «конспект», «объясни простыми словами»</li>
                            </ul>
                        </aside>
                    </div>
                </div>
            </section>
        </main>
    );
}

function PaperclipIcon() {
    return (
        <svg width="16" height="16" viewBox="0 0 24 24" className="text-white">
            <path
                fill="currentColor"
                d="M7 13.5V6.75a4.75 4.75 0 1 1 9.5 0V14a6.5 6.5 0 1 1-13 0V8.5a3 3 0 1 1 6 0V15a1.5 1.5 0 1 1-3 0V9h1.5v6a.5.5 0 0 0 1 0V8.5a1.5 1.5 0 1 0-3 0V14a5 5 0 1 0 10 0V6.75a3.25 3.25 0 1 0-6.5 0V13.5H7Z"
            />
        </svg>
    );
}
