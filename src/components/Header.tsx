// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-50 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[var(--br)]">
            <div className="wrap flex items-center justify-between h-[64px] px-4">
                <div className="flex items-center gap-3">
                    <Link href="/" className="font-extrabold tracking-[-0.02em] text-[20px]">AtLabs</Link>
                </div>

                <nav className="hidden md:flex items-center gap-24">
                    <ul className="flex items-center gap-18 text-[15px]">
                        <li><Link href="/solutions">Решение задач</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/pricing">Тарифы</Link></li>
                        <li><Link href="/help">Помощь</Link></li>
                    </ul>
                </nav>

                <div className="hidden md:flex items-center gap-10">
                    <Link href="/register" className="btn-primary rounded-[12px]">Зарегистрироваться</Link>
                    <Link href="/login" className="btn-outline rounded-[12px]">Войти</Link>
                </div>

                {/* Mobile */}
                <button
                    className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--br)]"
                    aria-label="Меню"
                    onClick={() => setOpen((v) => !v)}
                >
                    ☰
                </button>
            </div>

            {/* Мобильное меню */}
            {open && (
                <div className="md:hidden border-t border-[var(--br)] px-4 pb-4">
                    <ul className="grid gap-10 py-10 text-[15px]">
                        <li><Link href="/solutions" onClick={() => setOpen(false)}>Решение задач</Link></li>
                        <li><Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link></li>
                        <li><Link href="/pricing" onClick={() => setOpen(false)}>Тарифы</Link></li>
                        <li><Link href="/help" onClick={() => setOpen(false)}>Помощь</Link></li>
                    </ul>
                    <div className="grid gap-10">
                        <Link href="/register" className="btn-primary rounded-[12px] text-center">Зарегистрироваться</Link>
                        <Link href="/login" className="btn-outline rounded-[12px] text-center">Войти</Link>
                    </div>
                </div>
            )}
        </header>
    );
}
