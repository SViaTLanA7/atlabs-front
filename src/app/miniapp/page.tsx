'use client';

import { useEffect, useState } from 'react';
import type { WebApp } from '@twa-dev/sdk';

declare global {
    interface Window {
        Telegram?: { WebApp?: WebApp };
    }
}

export default function MiniAppPage() {
    const [ready, setReady] = useState(false);
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        if (!window.Telegram?.WebApp) return;
        const tg = window.Telegram.WebApp;
        tg.ready();
        tg.expand();
        tg.BackButton.show();
        tg.onEvent('backButtonClicked', () => tg.close());
        setUsername(tg.initDataUnsafe?.user?.username ?? null);
        setReady(true);
    }, []);

    return (
        <section className="container-1160 px-4 py-10">
            <h1>StudyFlow Mini App</h1>
            <p className="mt-2">Привет {username || 'гость'}! {ready ? 'Мини-приложение готово ✅' : 'Инициализация…'}</p>
        </section>
    );
}
