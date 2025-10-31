'use client';

import Link from 'next/link';
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
        <header className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b border-[--br] shadow-sm">
            <div className="container-1160 px-4 h-[72px] flex items-center justify-between">
                {/* ЛОГО */}
                <Link href="/" className="flex items-center gap-2 shrink-0">
                    <span className="inline-flex h-6 w-6 rounded-md bg-[--brand]" />
                    <span className="font-bold text-[18px] tracking-tight text-[--brand]">StudyFlow</span>
                </Link>

                {/* НАВИГАЦИЯ */}
                <nav className="hidden xl:flex items-center gap-6 text-[15px] text-[--text]">
                    {links.map(l => (
                        <Link
                            key={l.href}
                            href={l.href}
                            className={clsx(
                                'hover:text-[--brand] transition-colors',
                                pathname === l.href && 'text-[--brand] font-semibold'
                            )}
                        >
                            {l.label}
                        </Link>
                    ))}
                </nav>

                {/* CTA БЛОК */}
                <div className="hidden md:flex items-center gap-3 ml-auto">
                    <div className="hidden lg:flex items-center gap-1 text-[13px] px-3 py-1 rounded-full border border-[--br] bg-[--brand-100] text-[--brand]">
                        ★ <span className="font-medium">5.0</span>
                        <span className="opacity-70 ml-1">на основе 1000+ сессий</span>
                    </div>
                    <Link
                        href="/register"
                        className="btn-outline hover:border-[--brand] hover:text-[--brand]"
                    >
                        Зарегистрироваться
                    </Link>
                    <Link
                        href="/login"
                        className="btn-primary bg-[--brand] hover:opacity-90"
                    >
                        Войти
                    </Link>
                </div>

                {/* Мобильное меню (бургер) */}
                <button className="xl:hidden ml-auto flex items-center justify-center w-9 h-9 rounded-md border border-[--br]">
                    ☰
                </button>
            </div>
        </header>
    );
}
