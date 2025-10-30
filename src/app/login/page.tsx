'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
    const [email, setEmail] = useState('');
    const [code, setCode] = useState('');
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErr(null);
        const res = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, code }),
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
            setErr(data.error ?? 'Ошибка входа');
            return;
        }
        router.push('/dashboard');
    }

    return (
        <section className="mx-auto max-w-md p-6">
            <h1 className="text-2xl font-semibold mb-4">Войти</h1>

            <form className="space-y-3" onSubmit={onSubmit}>
                <div>
                    <label className="block text-sm mb-1">Email</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded border px-3 py-2"
                        required
                    />
                </div>

                <div>
                    <label className="block text-sm mb-1">Код (если требуется)</label>
                    <input
                        type="text"
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        className="w-full rounded border px-3 py-2"
                    />
                </div>

                {err && <p className="text-red-600 text-sm">{err}</p>}

                <button type="submit" className="w-full rounded bg-black text-white py-2">
                    Войти
                </button>
            </form>

            <p className="mt-4 text-sm">
                Нет аккаунта? <Link href="/register" className="underline">Зарегистрироваться</Link>
            </p>
        </section>
    );
}
