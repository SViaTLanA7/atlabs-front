// src/components/Footer.tsx
import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="mt-16 border-t border-[var(--br)] bg-[#fafafa]">
            <div className="container-1160 px-4 py-10 grid gap-10 md:grid-cols-4 text-[14px]">
                <div>
                    <div className="flex items-center gap-2 mb-3">
                        <span className="inline-flex h-6 w-10 rounded-md bg-[--brand]"></span>
                        <span className="font-semibold">StudyFlow</span>
                    </div>
                    <p className="opacity-70">© 2025 StudyFlow. Все права защищены.</p>
                </div>

                <div>
                    <h4 className="foot-h">AI-сервисы</h4>
                    <ul className="foot-ul">
                        <li><Link href="/study">Помощь с учёбой</Link></li>
                        <li><Link href="/finance">Финансовый консультант</Link></li>
                        <li><Link href="/career">Карьерный коучинг</Link></li>
                        <li><Link href="/psy">Психологическая поддержка</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="foot-h">Экосистема</h4>
                    <ul className="foot-ul">
                        <li><Link href="/solutions">Решение задач</Link></li>
                        <li><Link href="/templates">Шаблоны</Link></li>
                        <li><Link href="/miniapp">Telegram мини-приложение</Link></li>
                    </ul>
                </div>

                <div>
                    <h4 className="foot-h">О компании</h4>
                    <ul className="foot-ul">
                        <li><Link href="/">Главная</Link></li>
                        <li><Link href="/how">Как это работает</Link></li>
                        <li><Link href="/pricing">Тарифы</Link></li>
                        <li><Link href="/reviews">Отзывы</Link></li>
                        <li><Link href="/faq">FAQ</Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
