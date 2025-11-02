'use client';

import React, { useState, FormEvent } from 'react';
import Link from 'next/link';

type Mode = 'login' | 'register';

export default function AuthForm({ mode }: { mode: Mode }) {
    const isLogin = mode === 'login';

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [code, setCode] = useState(''); // для экрана "Введите код", если понадобится
    const [loading, setLoading] = useState(false);

    async function onSubmit(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setLoading(true);
        try {
            // Здесь будет твоя реальная логика (запрос на бэкенд)
            // Пока просто имитируем успех:
            console.log({ mode, email, password, code });
            alert(`OK: ${isLogin ? 'Вход' : 'Регистрация'} для ${email}`);
        } catch (err) {
            console.error(err);
            alert('Ошибка. Проверь данные.');
        } finally {
            setLoading(false);
        }
    }

    return (
        <section className="max-w-[480px] mx-auto py-12 px-4">
            <h1 className="text-2xl font-semibold mb-6">
                {isLogin ? 'Войти' : 'Регистрация'}
            </h1>

            <form onSubmit={onSubmit} className="space-y-4">
                {/* Email */}
                <div className="grid gap-2">
                    <label className="text-sm">Email</label>
                    <input
                        className="border rounded-md px-3 py-2 outline-none"
                        type="email"
                        placeholder="you@example.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        autoComplete="email"
                    />
                </div>

                {/* Пароль (на экране регистрации тоже нужен) */}
                <div className="grid gap-2">
                    <label className="text-sm">Пароль</label>
                    <input
                        className="border rounded-md px-3 py-2 outline-none"
                        type="password"
                        placeholder="••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        autoComplete={isLogin ? 'current-password' : 'new-password'}
                    />
                </div>

                {/* Блок для ввода кода, если понадобится — можешь скрыть/показать по условию */}
                {/* <div className="grid gap-2">
          <label className="text-sm">Код из письма</label>
          <input
            className="border rounded-md px-3 py-2 outline-none tracking-widest text-center"
            type="text"
            placeholder="1234"
            value={code}
            onChange={(e) => setCode(e.target.value)}
          />
        </div> */}

                <button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-lg py-3 font-medium bg-[oklch(0.205_0_0)] text-white disabled:opacity-70"
                >
                    {loading ? 'Подождите…' : isLogin ? 'Войти' : 'Зарегистрироваться'}
                </button>
            </form>

            <p className="mt-4 text-sm">
                {isLogin ? (
                    <>
                        Нет аккаунта?{' '}
                        <Link className="underline" href="/register">
                            Зарегистрируйтесь
                        </Link>
                    </>
                ) : (
                    <>
                        Уже есть аккаунт?{' '}
                        <Link className="underline" href="/login">
                            Войдите
                        </Link>
                    </>
                )}
            </p>
        </section>
    );
}
