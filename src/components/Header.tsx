// src/components/Header.tsx
"use client";

import Link from "next/link";

export default function Header() {
    return (
        <header className="border-b bg-white/80 backdrop-blur">
            <div className="container-1160 flex items-center gap-4 py-3">
                {/* ЛОГО */}
                <Link href="/" className="flex items-center gap-2">
                    {/* если файла нет, покажем текстовый логотип */}
                    <img
                        src="/brand/logo.svg"
                        alt="StudyFlow"
                        className="h-6 w-auto hidden sm:block"
                        onError={(e) => {
                            (e.currentTarget as HTMLImageElement).style.display = "none";
                        }}
                    />
                    <span className="text-[20px] font-semibold tracking-tight">StudyFlow</span>
                </Link>

                {/* НАВ */}
                <nav className="ml-6 hidden md:flex items-center gap-5 text-[14px]">
                    <Link href="/about" className="hover:opacity-80">О StudyFlow</Link>
                    <Link href="/solutions" className="hover:opacity-80">Решение задач</Link>
                    <Link href="/writing" className="hover:opacity-80">Написание работ</Link>
                    <Link href="/help" className="hover:opacity-80">Помощь с контрольной</Link>
                    <Link href="/faq" className="hover:opacity-80">FAQ</Link>
                </nav>

                {/* CTA */}
                <div className="ml-auto flex items-center gap-3">
                    <Link
                        href="/register"
                        className="border rounded-[10px] px-4 py-2 text-[14px] hover:bg-black/5"
                    >
                        Зарегистрироваться
                    </Link>
                    <Link href="/login" className="btn-primary text-[14px]">
                        Войти
                    </Link>
                </div>
            </div>
        </header>
    );
}
