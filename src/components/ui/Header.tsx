"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Header() {
    const [open, setOpen] = useState(false);
    const headerRef = useRef<HTMLElement | null>(null);

    // тень/полупрозрачность при скролле
    useEffect(() => {
        const el = headerRef.current;
        if (!el) return;

        const onScroll = () => {
            if (window.scrollY > 6) el.classList.add("scrolled");
            else el.classList.remove("scrolled");
        };
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    // закрывать панель при переходе
    useEffect(() => {
        const close = () => setOpen(false);
        window.addEventListener("hashchange", close);
        return () => window.removeEventListener("hashchange", close);
    }, []);

    return (
        <>
            <header ref={headerRef} className="site-header">
                <div className="nav-wrap">
                    <Link href="/" className="brand" aria-label="StudyFlow — на главную">
                        <span className="brand-dot" />
                        <span className="brand-name">StudyFlow</span>
                    </Link>

                    {/* desktop */}
                    <nav className="nav-links" aria-label="Основное меню">
                        <Link href="/#solutions">Решение задач</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/pricing">Тарифы</Link>
                        <Link href="/help">Помощь</Link>
                    </nav>

                    <div className="nav-cta">
                        <Link href="/register" className="btn-primary">Зарегистрироваться</Link>
                        <Link href="/login" className="btn-outline">Войти</Link>
                    </div>

                    {/* burger (mobile) */}
                    <button
                        type="button"
                        className={`burger ${open ? "active" : ""}`}
                        aria-label="Открыть меню"
                        aria-expanded={open}
                        onClick={() => setOpen(v => !v)}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>

            </header>

            {/* mobile dropdown */}
            <div className={`mobile-panel ${open ? "open" : ""}`} aria-hidden={!open}>
                <nav className="mobile-links" aria-label="Мобильное меню">
                    <Link href="/#solutions" onClick={() => setOpen(false)}>Решение задач</Link>
                    <Link href="/faq" onClick={() => setOpen(false)}>FAQ</Link>
                    <Link href="/pricing" onClick={() => setOpen(false)}>Тарифы</Link>
                    <Link href="/help" onClick={() => setOpen(false)}>Помощь</Link>
                </nav>
                <div className="mobile-cta">
                    <Link href="/register" className="btn-primary" onClick={() => setOpen(false)}>Зарегистрироваться</Link>
                    <Link href="/login" className="btn-outline" onClick={() => setOpen(false)}>Войти</Link>
                </div>
            </div>
        </>
    );
}
