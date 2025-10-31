'use client';

import { useEffect, useState } from 'react';
import { getTelegramWebApp } from '@/lib/telegram';

export default function MiniAppPage() {
    const [ready, setReady] = useState(false);
    const [username, setUsername] = useState<string | null>(null);

    useEffect(() => {
        const tg = getTelegramWebApp();
        if (!tg) return;

        // инициализация
        tg.ready?.();

        const uname =
            tg.initDataUnsafe?.user?.username ||
            tg.initDataUnsafe?.user?.first_name ||
            null;

        setUsername(uname);
        setReady(true);

        // пример работы с mainButton
        tg.MainButton?.setText('Открыть профиль');
        tg.MainButton?.show();
        const click = () => tg.openTelegramLink?.('https://t.me/sidarenkas');
        tg.MainButton?.onClick?.(click);

        return () => tg.MainButton?.offClick?.(click);
    }, []);

    return (
        <section className="container-1160 px-4 py-10">
            <h1 className="h1">Mini App</h1>
            <p className="mt-2">
                {ready
                    ? `Привет${username ? `, ${username}` : ''}! Mini App готов.`
                    : 'Инициализация…'}
            </p>
        </section>
    );
}
