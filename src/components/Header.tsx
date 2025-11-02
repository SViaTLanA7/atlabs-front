"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-40 bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-[var(--br)]">
            <div className="container-1160 px-4 h-[56px] flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 font-semibold">
                    <Image src="/brand/logo.svg" alt="" width={20} height={20} />
                    <span>StudyFlow</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-[14px]">
                    <Link href="/solutions">Решение задач</Link>
                    <Link href="/faq">FAQ</Link>
                    <Link href="/pricing">Тарифы</Link>
                    <Link href="/chat">Помощь</Link>
                </nav>

                <div className="hidden md:flex items-center gap-8">
                    <div className="text-[12px] opacity-70">★ 5.0 на основе 1000+ сессий</div>
                    <div className="flex items-center gap-8">
                        <Link href="/register" className="btn-outline">Зарегистрироваться</Link>
                        <Link href="/login" className="btn-primary">Войти</Link>
                    </div>
                </div>

                {/* mobile */}
                <button
                    className="md:hidden inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[var(--br)]"
                    onClick={() => setOpen((v) => !v)}
                    aria-label="menu"
                >
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t border-[var(--br)]">
                    <div className="container-1160 px-4 py-3 flex flex-col gap-2 text-[15px]">
                        <Link href="/solutions">Решение задач</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/pricing">Тарифы</Link>
                        <Link href="/chat">Помощь</Link>
                        <div className="pt-2 flex gap-8">
                            <Link href="/register" className="btn-outline">Зарегистрироваться</Link>
                            <Link href="/login" className="btn-primary">Войти</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
