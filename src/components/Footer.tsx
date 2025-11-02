export default function Footer(){
    return (
        <footer className="mt-16 border-t border-[var(--br)]">
            <div className="container-1160 px-4 py-10 grid md:grid-cols-4 gap-10">
                <div>
                    <div className="font-extrabold">StudyFlow</div>
                    <div className="muted mt-2">© {new Date().getFullYear()} StudyFlow. Все права защищены.</div>
                </div>
                <div>
                    <div className="font-semibold">AI-сервисы</div>
                    <ul className="mt-3 grid gap-2 muted">
                        <li>Помощь с учёбой</li>
                        <li>Финансовый консультант</li>
                        <li>Карьерный коучинг</li>
                        <li>Психологическая поддержка</li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold">Экосистема</div>
                    <ul className="mt-3 grid gap-2 muted">
                        <li>Решение задач</li>
                        <li>Шаблоны</li>
                        <li>Telegram мини-приложение</li>
                    </ul>
                </div>
                <div>
                    <div className="font-semibold">О компании</div>
                    <ul className="mt-3 grid gap-2 muted">
                        <li><a href="/faq">FAQ</a></li>
                        <li><a href="/pricing">Тарифы</a></li>
                        <li><a href="/help">Поддержка</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
}
