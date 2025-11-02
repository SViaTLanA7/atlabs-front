// src/app/solutions/SolutionsClient.tsx
'use client';

import { useState, useRef } from 'react';

type ApiOk = {
    id: string;
    createdAt: number;
    input: { text: string; files: { name: string; size?: number }[] };
    output: { title: string; steps: string[]; note?: string };
    tokensSpent: number;
    status: 'done';
};
type ApiResponse = ApiOk | { error: string };

export default function SolutionsClient() {
    const [text, setText] = useState('');
    const [files, setFiles] = useState<File[]>([]);
    const [loading, setLoading] = useState(false);
    const [tokens, setTokens] = useState(100);
    const [answer, setAnswer] = useState<ApiOk | null>(null);
    const [err, setErr] = useState<string | null>(null);
    const fileRef = useRef<HTMLInputElement>(null);

    const onFiles = (e: React.ChangeEvent<HTMLInputElement>) => {
        const list = e.target.files;
        if (!list) return;
        setFiles((p) => [...p, ...Array.from(list)]);
        if (fileRef.current) fileRef.current.value = '';
    };
    const removeFile = (name: string) => setFiles((p) => p.filter(f => f.name !== name));

    const submit = async () => {
        setErr(null);
        setAnswer(null);
        if (!text.trim() && files.length === 0) {
            setErr('Введите условие или прикрепите файл.');
            return;
        }
        setLoading(true);
        try {
            const filesInfo = files.map(f => ({ name: f.name, size: f.size }));
            const res = await fetch('/api/solutions', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ text, files: filesInfo }),
            });
            const data: ApiResponse = await res.json();
            if (!res.ok || 'error' in data) throw new Error((data as any).error || 'REQUEST_FAILED');
            setTokens(t => Math.max(0, t - (data.tokensSpent ?? 5)));
            setAnswer(data as ApiOk);
            setText('');
            setFiles([]);
        } catch {
            setErr('Произошла ошибка при отправке. Попробуйте ещё раз.');
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="container-1160 px-4 py-8">
            <h1 className="h1 text-[36px] md:text-[40px]">РЕШЕНИЯ ЗАДАЧ</h1>
            <p className="mt-2 max-w-[720px] text-[15px] text-[var(--muted)]">
                Введи условие или прикрепи фото — подготовим аккуратное решение за секунды.
            </p>

            <div className="mt-8 grid grid-cols-12 gap-16">
                {/* Левая часть */}
                <div className="col-span-12 lg:col-span-8">
                    <div className="card p-10 grid gap-10">
            <textarea
                className="w-full h-[160px] rounded-[12px] border border-[var(--br)] px-12 py-10 text-[15px] outline-none"
                placeholder="Например: решите квадратное уравнение x² − 5x + 6 = 0"
                value={text}
                onChange={(e)=>setText(e.target.value)}
                disabled={loading}
            />

                        <div className="flex flex-wrap items-center gap-10">
                            <button
                                type="button"
                                onClick={()=>fileRef.current?.click()}
                                className="btn-outline rounded-[12px] disabled:opacity-60"
                                disabled={loading}
                            >
                                📎 Прикрепить файл
                            </button>
                            <input
                                ref={fileRef}
                                type="file"
                                multiple
                                accept=".png,.jpg,.jpeg,.pdf,.doc,.docx,.txt"
                                onChange={onFiles}
                                className="hidden"
                            />
                            <span className="text-[13px] text-[var(--muted)]">PNG, JPG, PDF, DOC — до 10 МБ</span>
                        </div>

                        {files.length > 0 && (
                            <div className="grid gap-8">
                                {files.map(f=>(
                                    <div key={f.name+f.size} className="flex items-center justify-between rounded-[10px] border border-[var(--br)] px-12 py-8 text-[14px]">
                                        <span className="truncate max-w-[70%]">{f.name}</span>
                                        <button onClick={()=>removeFile(f.name)} className="btn-outline rounded-[10px] px-12 py-6">Удалить</button>
                                    </div>
                                ))}
                            </div>
                        )}

                        {err && (
                            <div className="rounded-[10px] border border-red-300 bg-red-50 px-12 py-8 text-[14px] text-red-700">
                                {err}
                            </div>
                        )}
                    </div>

                    <div className="mt-10 flex items-center gap-10">
                        <button
                            onClick={submit}
                            disabled={loading}
                            className="btn-primary rounded-[12px] disabled:opacity-60"
                        >
                            {loading ? 'Отправляем…' : 'Получить решение'}
                        </button>
                        <div className="text-[14px] text-[var(--muted)]">
                            5 токенов ≈ 1 задача · Осталось: <span className="font-semibold text-[var(--text)]">{tokens}</span>
                        </div>
                    </div>

                    {/* Ответ */}
                    {loading && (
                        <div className="mt-12 card p-10">
                            Готовим решение…
                            <div className="mt-8 h-[8px] w-full rounded-full bg-[var(--brand-100)]">
                                <div className="h-[8px] w-[45%] rounded-full bg-[var(--brand)] animate-pulse" />
                            </div>
                        </div>
                    )}
                    {answer && !loading && (
                        <div className="mt-12 card p-10 grid gap-10">
                            <h3 className="text-[18px] font-semibold">{answer.output.title}</h3>
                            <div className="grid gap-8 text-[15px] leading-relaxed">
                                {answer.output.steps.map((s,i)=> <p key={i}>{s}</p>)}
                            </div>
                            {answer.output.note && <div className="text-[13px] text-[var(--muted)]">{answer.output.note}</div>}
                            <div className="pt-10 border-t border-[var(--br)] flex flex-wrap gap-10">
                                <a href="/history" className="btn-outline rounded-[12px]">Сохранено в Историю</a>
                                <button className="btn-outline rounded-[12px]">Пояснить проще</button>
                                <button className="btn-outline rounded-[12px]">Сформировать конспект</button>
                            </div>
                        </div>
                    )}
                </div>

                {/* Правая колонка */}
                <aside className="col-span-12 lg:col-span-4">
                    <div className="card p-10">
                        <h4 className="font-semibold text-[18px]">Подписка с безлимитом токенов</h4>
                        <ul className="mt-10 grid gap-8 text-[14px]">
                            <li>— Решай без ограничений</li>
                            <li>— Поддержка по 160+ предметам</li>
                            <li>— Доступ к базе готовых решений</li>
                        </ul>
                        <a href="/pricing" className="mt-12 btn-primary rounded-[12px] w-full text-center">Перейти к тарифам</a>
                    </div>
                </aside>
            </div>
        </section>
    );
}
