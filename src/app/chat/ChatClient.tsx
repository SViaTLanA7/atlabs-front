'use client';

import { useState } from 'react';

type Msg = { role: 'user' | 'assistant'; content: string };

export default function ChatClient() {
    const [input, setInput] = useState('');
    const [msgs, setMsgs] = useState<Msg[]>([
        { role: 'assistant', content: 'Привет! Я помогу с задачами и конспектами. Напиши условие.' },
    ]);
    const [loading, setLoading] = useState(false);

    async function onSend() {
        const text = input.trim();
        if (!text) return;
        setInput('');
        setMsgs(prev => [...prev, { role: 'user', content: text }]);
        setLoading(true);

        try {
            // Тут позже подключим реальный API. Пока — mock-ответ:
            await new Promise(r => setTimeout(r, 600));
            const reply =
                'Принято! Для решения мне пригодится фото/текст условия и предмет. Могу дать краткий план решения.';

            setMsgs(prev => [...prev, { role: 'assistant', content: reply }]);
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="container-1160 px-4 py-8">
            <h1 className="h1 text-[28px] md:text-[36px]">Чат-ассистент</h1>

            <div className="mt-6 card p-4">
                <div className="space-y-3 max-h-[420px] overflow-auto pr-1">
                    {msgs.map((m, i) => (
                        <div key={i} className={m.role === 'user' ? 'text-right' : 'text-left'}>
                            <div
                                className={
                                    'inline-block rounded-xl px-3 py-2 ' +
                                    (m.role === 'user' ? 'bg-[--brand] text-white' : 'bg-white/70')
                                }
                            >
                                {m.content}
                            </div>
                        </div>
                    ))}
                    {loading && (
                        <div className="text-left">
                            <span className="inline-block rounded-xl px-3 py-2 bg-white/60">…печатаю</span>
                        </div>
                    )}
                </div>

                <div className="mt-4 flex gap-2">
                    <input
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        onKeyDown={e => e.key === 'Enter' && onSend()}
                        placeholder="Напиши условие или вопрос…"
                        className="flex-1 input"
                    />
                    <button onClick={onSend} className="btn btn-primary">
                        Отправить
                    </button>
                </div>
            </div>
        </section>
    );
}
