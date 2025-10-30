'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [err, setErr] = useState<string | null>(null);
    const router = useRouter();

    async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setErr(null);
        const res = await fetch('/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password }),
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
            setErr(data.error ?? 'Ошибка регистрации');
            return;
        }
        router.push('/dashboard');
    }

    return (
        <section className="mx-auto max-w-md p-6">
            <h1 className="text-2xl font-semibold mb-4">Регистрация</h1>

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
                    <label className="block text-sm mb-1">Пароль</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="w-full rounded border px-3 py-2"
                        required
                    />
                </div>

                {err && <p className="text-red-600 text-sm">{err}</p>}

                <button type="submit" className="w-full rounded bg-black text-white py-2">
                    Создать аккаунт
                </button>
            </form>

            <p className="mt-4 text-sm">
                Уже есть аккаунт? <Link href="/login" className="underline">Войти</Link>
            </p>
        </section>
    );
}
