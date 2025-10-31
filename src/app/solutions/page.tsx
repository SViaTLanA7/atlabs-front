"use client";

import { useState, useRef } from "react";
import Spinner from "@/components/ui/Spinner";
import { historyAdd, type HistoryItem } from "@/lib/history";

type ApiResponse =
    | {
    id: string;
    createdAt: number;
    input: { text: string; files: { name: string; size?: number }[] };
    output: { title: string; steps: string[]; note?: string };
    tokensSpent: number;
    status: "done";
}
    | { error: string };

export default function Solutions() {
    const [text, setText] = useState("");
    const [files, setFiles] = useState<File[]>([]);
    const [submitting, setSubmitting] = useState(false);
    const [tokens, setTokens] = useState(100);
    const [result, setResult] = useState<HistoryItem | null>(null);
    const [error, setError] = useState<string | null>(null);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleSubmit = async () => {
        setError(null);
        setResult(null);
        if (!text.trim() && files.length === 0) {
            setError("Введите условие или прикрепите файл.");
            return;
        }
        setSubmitting(true);
        try {
            // Готовим JSON про файлы (только имена/размеры для мок-API)
            const filesInfo = files.map((f) => ({ name: f.name, size: f.size }));

            const res = await fetch("/api/solutions", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ text, files: filesInfo }),
            });

            const data: ApiResponse = await res.json();

            if (!res.ok || "error" in data) {
                throw new Error((data as any).error || "REQUEST_FAILED");
            }

            // Списываем токены локально
            setTokens((t) => Math.max(0, t - (data.tokensSpent ?? 5)));

            const item: HistoryItem = {
                id: data.id,
                createdAt: data.createdAt,
                input: data.input,
                output: data.output,
                tokensSpent: data.tokensSpent,
                status: data.status,
            };

            setResult(item);
            historyAdd(item);
            setText("");
            setFiles([]);
        } catch (e) {
            setError("Произошла ошибка при отправке. Попробуйте ещё раз.");
        } finally {
            setSubmitting(false);
        }
    };

    const handleFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
        const list = e.target.files;
        if (!list) return;
        setFiles((prev) => [...prev, ...Array.from(list)]);
        if (fileInputRef.current) fileInputRef.current.value = "";
    };

    const removeFile = (name: string) => {
        setFiles((prev) => prev.filter((f) => f.name !== name));
    };

    return (
        <section className="container-1160 px-4 py-8">
            <h1 className="h1 text-[36px]">РЕШЕНИЯ ЗАДАЧ</h1>
            <p className="mt-2 max-w-[720px] text-[15px] text-[var(--muted)]">
                Введи условие или прикрепи фото — подготовим решение за секунды.
            </p>

            <div className="mt-6 grid grid-cols-12 gap-6">
                {/* Левая часть */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="card p-4 space-y-4">
            <textarea
                className="w-full h-[140px] rounded-[10px] bg-[var(--bg-input)] text-white placeholder:text-[var(--muted)] px-3 py-2 outline-none resize-none"
                placeholder="Например: Решите квадратное уравнение x² - 5x + 6 = 0"
                value={text}
                onChange={(e) => setText(e.target.value)}
                disabled={submitting}
            />

                        <div className="flex flex-wrap items-center gap-3">
                            <button
                                type="button"
                                onClick={() => fileInputRef.current?.click()}
                                className="btn btn-secondary disabled:opacity-60"
                                disabled={submitting}
                            >
                                📎 Прикрепить файл
                            </button>
                            <input
                                type="file"
                                multiple
                                ref={fileInputRef}
                                onChange={handleFiles}
                                className="hidden"
                                accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.txt"
                            />
                            <span className="text-[13px] opacity-70">
                PNG, JPG, PDF, DOC — до 10 МБ
              </span>
                        </div>

                        {files.length > 0 && (
                            <div className="mt-2 space-y-1">
                                {files.map((f) => (
                                    <div
                                        key={f.name + f.size}
                                        className="flex justify-between items-center bg-white/5 rounded-lg px-3 py-2 text-[14px]"
                                    >
                                        <span className="truncate max-w-[70%]">{f.name}</span>
                                        <button
                                            type="button"
                                            onClick={() => removeFile(f.name)}
                                            className="text-white/60 hover:text-white"
                                            disabled={submitting}
                                        >
                                            ✕
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {error && (
                            <div className="rounded-lg border border-red-400/40 bg-red-500/10 px-3 py-2 text-red-100 text-sm">
                                {error}
                            </div>
                        )}
                    </div>

                    <button
                        onClick={handleSubmit}
                        disabled={submitting}
                        className="mt-4 btn btn-primary rounded-[10px] inline-flex items-center gap-2 disabled:opacity-60"
                    >
                        {submitting ? (
                            <>
                                <Spinner /> <span>Отправляем…</span>
                            </>
                        ) : (
                            "Получить решение"
                        )}
                    </button>

                    <div className="mt-2 text-sm opacity-70">
                        5 токенов ≈ 1 задача · Осталось:{" "}
                        <span className="font-semibold">{tokens}</span>
                    </div>

                    {/* Результат ниже карточки */}
                    {submitting && (
                        <div className="mt-6 card p-4">
                            <div className="flex items-center gap-3 text-white/90">
                                <Spinner />
                                <span>Готовим решение…</span>
                            </div>
                            <div className="mt-3 h-[100px] rounded-lg bg-white/5 animate-pulse" />
                        </div>
                    )}

                    {result && !submitting && (
                        <div className="mt-6 card p-4 space-y-3">
                            <h3 className="text-[18px] font-semibold">{result.output.title}</h3>
                            <div className="space-y-2 text-[15px] leading-relaxed">
                                {result.output.steps.map((s, i) => (
                                    <p key={i}>{s}</p>
                                ))}
                            </div>
                            {result.output.note && (
                                <div className="mt-2 text-[13px] opacity-75">{result.output.note}</div>
                            )}
                            <div className="pt-3 flex gap-3 border-t border-white/10">
                                <a href="/history" className="btn btn-secondary">Сохранено в Историю</a>
                                <button className="btn btn-secondary">Пояснить проще</button>
                                <button className="btn btn-secondary">Сформировать конспект</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Правая часть */}
                <aside className="col-span-12 lg:col-span-4">
                    <div className="card p-4">
                        <h4 className="font-semibold">Подписка с безлимитом токенов</h4>
                        <ul className="mt-2 list-disc pl-5 text-[14px] space-y-1">
                            <li>Решай без ограничений</li>
                            <li>Поддержка по 160+ предметам</li>
                            <li>Доступ к базе готовых решений</li>
                        </ul>
                        <a className="mt-4 w-full btn btn-secondary inline-flex justify-center" href="/pricing">
                            Перейти к тарифам
                        </a>
                    </div>
                </aside>
            </div>
        </section>
    );
}
