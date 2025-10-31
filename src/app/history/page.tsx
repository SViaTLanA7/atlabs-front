// src/app/history/page.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import { historyList, historyClear, type HistoryItem } from "@/lib/history";

export default function HistoryPage() {
    const [items, setItems] = useState<HistoryItem[]>([]);
    const [q, setQ] = useState("");

    useEffect(() => {
        setItems(historyList());
    }, []);

    const filtered = useMemo(() => {
        const term = q.trim().toLowerCase();
        if (!term) return items;
        return items.filter(
            (it) =>
                it.input.text.toLowerCase().includes(term) ||
                it.output.title.toLowerCase().includes(term) ||
                it.output.steps.join("\n").toLowerCase().includes(term)
        );
    }, [items, q]);

    const onClear = () => {
        historyClear();
        setItems([]);
    };

    return (
        <main className="container-1160 px-4 py-8">
            <h1 className="h1 text-[32px]">ИСТОРИЯ РЕШЕНИЙ</h1>
            <p className="mt-2 text-[15px] text-[var(--muted)]">
                Здесь сохраняются отправленные задачи и полученные ответы (локально в вашем браузере).
            </p>

            <div className="mt-6 flex flex-col md:flex-row gap-3 md:items-center">
                <input
                    placeholder="Поиск по тексту…"
                    value={q}
                    onChange={(e) => setQ(e.target.value)}
                    className="flex-1 rounded-[10px] bg-[var(--bg-input)] text-white placeholder:text-[var(--muted)] px-3 py-2 outline-none"
                />
                <button onClick={onClear} className="btn btn-secondary">
                    Очистить историю
                </button>
            </div>

            <div className="mt-6 space-y-4">
                {filtered.length === 0 && (
                    <div className="card p-4 text-[var(--muted)]">История пуста.</div>
                )}

                {filtered.map((it) => (
                    <article key={it.id} className="card p-4">
                        <header className="flex items-center justify-between">
                            <div className="text-white/90 font-medium">{it.output.title}</div>
                            <div className="text-sm opacity-70">
                                {new Date(it.createdAt).toLocaleString()}
                            </div>
                        </header>

                        <div className="mt-3 grid md:grid-cols-2 gap-4">
                            <div>
                                <div className="text-white/70 text-sm">Запрос</div>
                                <p className="mt-1 whitespace-pre-wrap">{it.input.text || "—"}</p>
                                {it.input.files?.length > 0 && (
                                    <div className="mt-2 text-sm opacity-80">
                                        Файлы: {it.input.files.map((f) => f.name).join(", ")}
                                    </div>
                                )}
                            </div>
                            <div>
                                <div className="text-white/70 text-sm">Ответ</div>
                                <div className="mt-1 space-y-1">
                                    {it.output.steps.map((s, idx) => (
                                        <p key={idx}>{s}</p>
                                    ))}
                                </div>
                                {it.output.note && (
                                    <div className="mt-2 text-[13px] opacity-75">{it.output.note}</div>
                                )}
                            </div>
                        </div>

                        <footer className="mt-3 flex items-center gap-4 text-sm opacity-80">
                            <span>Статус: {it.status === "done" ? "готово" : "ошибка"}</span>
                            <span>·</span>
                            <span>Токены: {it.tokensSpent}</span>
                        </footer>
                    </article>
                ))}
            </div>
        </main>
    );
}
