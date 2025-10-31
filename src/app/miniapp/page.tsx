// src/app/miniapp/page.tsx
'use client';

import { useEffect, useMemo, useState } from 'react';
import type { WebApp } from '@twa-dev/sdk';

declare global {
    interface Window {
        Telegram?: { WebApp?: WebApp };
    }
}

export const metadata = { title: 'StudyFlow · Telegram Mini App' };

export default function MiniAppPage() {
    const [ready, setReady] = useState(false);
    const [tg, setTg] = useState<WebApp | null>(null);
    const [username, setUsername] = useState<string | null>(null);
    const [theme, setTheme] = useState<'light' | 'dark'>('light');

    const isInTelegram = useMemo(()=> typeof window !== 'undefined' && !!window.Telegram?.WebApp, []);

    useEffect(() => {
        if (!isInTelegram) return;
        const webapp = window.Telegram!.WebApp;

        try {
            // Инициализация
            webapp.expand();
            webapp.ready();
            webapp.BackButton.show();
            webapp.onEvent('backButtonClicked', () => webapp.close());

            setUsername(webapp.initDataUnsafe?.user?.username ?? null);
            setTheme(webapp.colorScheme === 'dark' ? 'dark' : 'light');
            setTg(webapp);
            setReady(true);
        } catch (e) {
            console.error('TWA init error', e);
        }

        return () => {
            try { webapp.offEvent('backButtonClicked', () => webapp.close()); } catch {}
        };
    }, [isInTelegram]);

    return (
        <section className={`container-1160 px-4 py-8 ${theme==='dark' ? 'dark' : ''}`}>
            <div className="card p-5">
                <h1>StudyFlow · Mini App</h1>
                {!isInTelegram && (
                    <p className="mt-2">
                        Откройте эту страницу из Telegram (кнопка «Open in» у вашего бота). В браузере мини-приложение работает в демо-режиме.
                    </p>
                )}
                {isInTelegram && (
                    <p className="mt-2">Привет{username ? `, @${username}` : ''}! Мини-приложение инициализировано: {ready ? 'готово ✅' : 'инициализация…'}</p>
                )}

                <div className="mt-4 grid sm:grid-cols-2 gap-3">
                    <button
                        className="btn-primary"
                        onClick={()=>{
                            if (tg) tg.MainButton.setParams({ text: 'Отправить запрос' });
                            tg?.MainButton.show();
                        }}
                    >
                        Показать MainButton
                    </button>

                    <button
                        className="border rounded-[10px] px-5 py-3"
                        onClick={()=>{
                            tg?.HapticFeedback.impactOccurred('soft');
                            alert('Имитация запроса: «Найди план подготовки к кр в алгебре»');
                        }}
                    >
                        Пример запроса
                    </button>
                </div>

                <p className="mt-3 text-sm opacity-70">
                    Подключено: @twa-dev/sdk. Поддерживаются BackButton, MainButton, Haptics, тёмная/светлая тема.
                </p>
            </div>
        </section>
    );
}
