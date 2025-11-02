"use client";

import Link from "next/link";
import Image from "next/image";

export default function Header() {
    return (
        <header className="site-header">
            <div className="container-1160 navbar">
                <div className="nav-left">
                    <Link href="/" className="flex items-center gap-2 font-extrabold">
                        <Image src="/brand/logo.svg" alt="" width={26} height={26} />
                        <span>StudyFlow</span>
                    </Link>

                    <nav className="nav-menu">
                        <Link href="/solutions">Решение задач</Link>
                        <Link href="/faq">FAQ</Link>
                        <Link href="/pricing">Тарифы</Link>
                        <Link href="/help">Помощь</Link>
                    </nav>
                </div>

                <div className="nav-actions">
                    <Link href="/register" className="btn-primary">Зарегистрироваться</Link>
                    <Link href="/login" className="btn-outline">Войти</Link>
                </div>
            </div>
        </header>
    );
}
