"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const nav = [
    { href: "/", label: "Главная" },
    { href: "/login", label: "Войти" },
    { href: "/register", label: "Регистрация" },
];

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="sticky top-0 z-30 w-full border-b bg-white/80 backdrop-blur">
            <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4">
                <Link href="/" className="font-semibold tracking-wide">
                    AtLabs
                </Link>

                <nav className="hidden gap-6 md:flex">
                    {nav.map((item) => (
                        <Link
                            key={item.href}
                            href={item.href}
                            className={`text-sm transition ${
                                pathname === item.href ? "font-semibold" : "text-gray-600 hover:text-gray-900"
                            }`}
                        >
                            {item.label}
                        </Link>
                    ))}
                </nav>

                {/* Мобильное меню */}
                <button
                    className="md:hidden rounded-md border px-3 py-1 text-sm"
                    onClick={() => setOpen((v) => !v)}
                >
                    Меню
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t">
                    <div className="mx-auto flex max-w-6xl flex-col px-4 py-2">
                        {nav.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                onClick={() => setOpen(false)}
                                className={`py-2 text-sm ${
                                    pathname === item.href ? "font-semibold" : "text-gray-700"
                                }`}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </div>
                </div>
            )}
        </header>
    );
}
