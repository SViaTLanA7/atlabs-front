// src/components/Header.tsx
'use client';

import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';

const links = [
    { href: '/', label: 'О StudyFlow' },
    { href: '/solutions', label: 'Решение задач' },
    { href: '/writing', label: 'Написание работ' },
    { href: '/control', label: 'Помощь с контрольной' },
    { href: '/faq', label: 'FAQ' },
    { href: '/support', label: 'Поддержка' },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-[var(--br)]">
            <div className="container-1160 px-4 h-[64px] flex items-center justify-between gap-3">
                {/* Лого */}
                <Link href="/" className="flex items-center gap-2">
                    <span className="inline-flex h-6 w-10 rounded-md bg-[--brand]"></span>
                    <span className="font-semibold tracking-tight">StudyFlow</span>
                </Link>

                {/* Навигация */}
                <nav className="hidden lg:flex items-center gap-4 text-[14px]">
                    {links.map(l => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={clsx(
                                'px-2 py-1 rounded-md hover:bg-black/[0.04] transition-colors',
                                pathname === l.href && 'text-[--brand] font-medium'
                            )}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* Рейтинг + CTA */}
                <div className="ml-auto hidden md:flex items-center gap-3">
                    <div className="hidden xl:flex items-center gap-1 text-[12px] px-2 py-[6px] rounded-full border border-[var(--br)]">
                        <span className="font-medium">★ 5.0</span>
                        <span className="opacity-60">на основе 1000+ сессий</span>
                    </div>
                    <Link
                        href="/register"
                        className="btn-outline"
                    >
                        Зарегистрироваться
                    </Link>
                    <Link
                        href="/login"
                        className="btn-primary"
                    >
                        Войти
                    </Link>
                </div>
            </div>
        </header>
    );
}
