'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/50 border-b border-[var(--br)]">
            <div className="container-1160 px-4 h-14 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-bold">
                    <span className="inline-flex h-6 w-6 items-center justify-center rounded-md bg-[--brand] text-white">—</span>
                    <span>StudyFlow</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-[14px]">
                    <Link href="/about">О StudyFlow</Link>
                    <Link href="/solutions">Решение задач</Link>
                    <Link href="/write">Написание работ</Link>
                    <Link href="/help">Помощь с контрольной</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/support">Поддержка</Link>
                </nav>

                <div className="hidden md:flex items-center gap-2">
                    <Link href="/register" className="btn-outline py-2">Зарегистрироваться</Link>
                    <Link href="/login" className="btn-primary py-2">Войти</Link>
                </div>

                <button className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--br)]"
                        onClick={() => setOpen(v => !v)} aria-label="Меню">
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t border-[var(--br)] bg-white">
                    <div className="container-1160 px-4 py-3 grid gap-3 text-[15px]">
                        <Link href="/about" onClick={()=>setOpen(false)}>О StudyFlow</Link>
                        <Link href="/solutions" onClick={()=>setOpen(false)}>Решение задач</Link>
                        <Link href="/write" onClick={()=>setOpen(false)}>Написание работ</Link>
                        <Link href="/help" onClick={()=>setOpen(false)}>Помощь с контрольной</Link>
                        <Link href="/faq" onClick={()=>setOpen(false)}>FAQ</Link>
                        <Link href="/support" onClick={()=>setOpen(false)}>Поддержка</Link>
                        <div className="flex gap-2 pt-2">
                            <Link href="/register" className="btn-outline flex-1 text-center py-2">Регистрация</Link>
                            <Link href="/login" className="btn-primary flex-1 text-center py-2">Войти</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
