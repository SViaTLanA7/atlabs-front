// src/components/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

const NAV = [
    { href: '/', label: 'О AtLabs' },
    { href: '/solutions', label: 'Решение задач' },
    { href: '/writing', label: 'Написание работ' },
    { href: '/exam-help', label: 'Помощь с контрольной' },
    { href: '/faq', label: 'FAQ' },
];

export default function Header() {
    const pathname = usePathname();
    const [open, setOpen] = useState(false);

    return (
        <header className="w-full bg-white header-shadow">
            <div className="container-1160 flex items-center justify-between px-4 py-3">
                <Link href="/" className="flex items-center gap-2">
          <span className="inline-block rounded-md border px-2 py-1 text-[12px] font-extrabold leading-none"
                style={{borderColor:'var(--stroke)'}}>AtLabs</span>
                </Link>

                <nav className="hidden md:flex items-center gap-6 text-[14px]">
                    {NAV.map(i => (
                        <Link
                            key={i.href}
                            href={i.href}
                            className={`transition hover:opacity-80 ${pathname===i.href?'font-semibold':''}`}
                        >
                            {i.label}
                        </Link>
                    ))}
                </nav>

                <div className="hidden md:flex items-center gap-10">
                    <Link href="/register" className="btn btn-outline rounded-[20px]">Зарегистрироваться</Link>
                    <Link href="/login" className="btn btn-primary rounded-[20px]">Войти</Link>
                </div>

                <button onClick={()=>setOpen(v=>!v)} className="md:hidden rounded-md border p-2" style={{borderColor:'var(--stroke)'}}>
                    ☰
                </button>
            </div>

            {open && (
                <div className="md:hidden border-t bg-white" style={{borderColor:'var(--stroke)'}}>
                    <div className="flex flex-col p-3">
                        {NAV.map(i=>(
                            <Link key={i.href} href={i.href} className="px-2 py-2 rounded-md hover:bg-gray-50">{i.label}</Link>
                        ))}
                        <div className="mt-2 grid grid-cols-2 gap-2">
                            <Link href="/register" className="btn btn-outline rounded-[10px]">Регистрация</Link>
                            <Link href="/login" className="btn btn-primary rounded-[10px]">Войти</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
