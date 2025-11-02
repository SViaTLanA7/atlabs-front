'use client';
import Link from 'next/link';
import { useEffect, useState } from 'react';

export default function Header(){
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(()=>{
        const onScroll = ()=> setScrolled(window.scrollY > 4);
        onScroll(); window.addEventListener('scroll', onScroll);
        return ()=> window.removeEventListener('scroll', onScroll);
    },[]);

    return (
        <header className={`site-header ${scrolled?'site-header--scrolled':''}`}>
            <div className="container-1160 px-4 py-3 flex items-center gap-4">
                <Link href="/" className="flex items-center gap-2 font-extrabold tracking-[-0.02em]">
                    <span className="inline-block w-6 h-6 rounded-md" style={{background:'var(--brand)'}}/>
                    <span>StudyFlow</span>
                </Link>

                <nav className="ml-auto hidden md:flex items-center gap-20">
                    <ul className="flex items-center gap-18" style={{gap:18}}>
                        <li><Link href="/solutions">Решение задач</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                        <li><Link href="/pricing">Тарифы</Link></li>
                        <li><Link href="/help">Помощь</Link></li>
                    </ul>
                    <div className="flex items-center gap-10" style={{gap:10}}>
                        <Link href="/register" className="btn-primary">Зарегистрироваться</Link>
                        <Link href="/login" className="btn-outline">Войти</Link>
                    </div>
                </nav>

                <button aria-label="menu" className="ml-auto md:hidden btn-outline" onClick={()=>setOpen(v=>!v)}>≡</button>
            </div>

            {/* mobile */}
            {open && (
                <div className="md:hidden border-t border-[var(--br)]">
                    <div className="container-1160 px-4 py-3 flex flex-col gap-10">
                        <Link href="/solutions" onClick={()=>setOpen(false)}>Решение задач</Link>
                        <Link href="/faq" onClick={()=>setOpen(false)}>FAQ</Link>
                        <Link href="/pricing" onClick={()=>setOpen(false)}>Тарифы</Link>
                        <Link href="/help" onClick={()=>setOpen(false)}>Помощь</Link>
                        <div className="flex gap-10">
                            <Link href="/register" className="btn-primary" onClick={()=>setOpen(false)}>Зарегистрироваться</Link>
                            <Link href="/login" className="btn-outline" onClick={()=>setOpen(false)}>Войти</Link>
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
}
