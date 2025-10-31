// src/app/chat/page.tsx
"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { chatList, chatSave, chatClear, type ChatMsg } from "@/lib/chat";
import MessageBubble from "@/components/chat/MessageBubble";

export default function ChatPage() {
    const [msgs, setMsgs] = useState<ChatMsg[]>([]);
    const [text, setText] = useState("");
    const [pending, setPending] = useState(false);
    const [files, setFiles] = useState<File[]>([]);
    const fileRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setMsgs(chatList().length ? chatList() : seed());
    }, []);

    useEffect(() => {
        chatSave(msgs);
        bottomRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [msgs]);

    const send = async () => {
        if (!text.trim() && files.length === 0) return;
        const user: ChatMsg = {
            id: crypto.randomUUID(),
            role: "user",
            content: text,
            ts: Date.now(),
            files: files.map((f) => ({ name: f.name, size: f.size })),
        };
        setMsgs((m) => [...m, user]);
        setText("");
        setFiles([]);
        setPending(true);

        // Мок ответа ассистента
        const reply: ChatMsg = {
            id: crypto.randomUUID(),
            role: "assistant",
            ts: Date.now() + 1000,
            content:
                "Принял. Я разберу задачу по шагам: 1) уточню условие, 2) выберу метод решения, 3) поясню каждое действие, 4) проверю итог. Можешь прислать фото условия для точности.",
        };

        await new Promise((r) => setTimeout(r, 1000));
        setMsgs((m) => [...m, reply]);
        setPending(false);
    };

    const onFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
        const list = e.target.files;
        if (!list) return;
        setFiles((prev) => [...prev, ...Array.from(list)]);
        if (fileRef.current) fileRef.current.value = "";
    };

    const removeFile = (name: string) => {
        setFiles((prev) => prev.filter((f) => f.name !== name));
    };

    const quick = (prompt: string) => {
        setText((t) => (t ? t + "\n" + prompt : prompt));
    };

    const hasMsgs = useMemo(() => msgs.length > 0, [msgs]);

    return (
        <main className="container-1160 px-4 py-8">
            <header className="mb-4 flex items-center justify-between">
                <h1 className="h1 text-[28px]">ЧАТ С ASSISTANT</h1>
                <button className="btn btn-secondary" onClick={() => { chatClear(); setMsgs(seed()); }}>
                    Очистить диалог
                </button>
            </header>

            <div className="card p-4 min-h-[60vh] flex flex-col gap-3">
                <div className="space-y-3">
                    {hasMsgs ? (
                        msgs.map((m) => <MessageBubble key={m.id} msg={m} />)
                    ) : (
                        <div className="text-[var(--muted)]">Начни диалог — я помогу.</div>
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Быстрые действия */}
                <div className="mt-2 flex flex-wrap gap-2">
                    <button className="chip" onClick={() => quick("Объясни проще, как для новичка")}>
                        Объясни проще
                    </button>
                    <button className="chip" onClick={() => quick("Сделай краткий конспект по пунктам")}>
                        Конспект
                    </button>
                    <button className="chip" onClick={() => quick("Приведи пример с числами и проверь ответ")}>
                        Пример и проверка
                    </button>
                </div>
            </div>

            {/* Composer */}
            <div className="mt-4 card p-3">
                <div className="flex items-start gap-3">
          <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              placeholder="Напиши вопрос или вставь условие задачи…"
              className="flex-1 rounded-[10px] bg-[var(--bg-input)] text-white placeholder:text-[var(--muted)] px-3 py-2 outline-none resize-y min-h-[80px]"
              disabled={pending}
          />
                    <div className="flex flex-col gap-2">
                        <button
                            className="btn btn-secondary"
                            onClick={() => fileRef.current?.click()}
                            disabled={pending}
                            title="Прикрепить файл"
                        >
                            📎 Файл
                        </button>
                        <button
                            className="btn btn-primary"
                            onClick={send}
                            disabled={pending}
                            title="Отправить"
                        >
                            {pending ? "Отправляю…" : "Отправить"}
                        </button>
                    </div>
                </div>

                <input
                    type="file"
                    multiple
                    ref={fileRef}
                    onChange={onFiles}
                    className="hidden"
                    accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.txt"
                />

                {files.length > 0 && (
                    <div className="mt-2 flex flex-wrap gap-2">
                        {files.map((f) => (
                            <div
                                key={f.name + f.size}
                                className="px-2 py-1 rounded-lg bg-white/8 text-white text-sm flex items-center gap-2"
                            >
                                <span className="truncate max-w-[200px]">{f.name}</span>
                                <button
                                    className="text-white/70 hover:text-white"
                                    onClick={() => removeFile(f.name)}
                                >
                                    ✕
                                </button>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </main>
    );
}

function seed(): ChatMsg[] {
    return [
        {
            id: crypto.randomUUID(),
            role: "assistant",
            content:
                "Привет! Я StudyFlow. Пришли условие задачи или задай вопрос — разберём по шагам. Можно прикрепить фото.",
            ts: Date.now(),
        },
    ];
}
