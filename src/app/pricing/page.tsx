// src/app/pricing/page.tsx
export const metadata = { title: 'Тарифы — открой полный доступ' };

const plans = [
    { name: 'Базовый', price: '330 ₽', note: '100 токенов', badge: '-17%', features: ['Решения задач', 'Мини-конспекты', 'Чат-подсказки'] },
    { name: 'Стандарт', price: '820 ₽', badge: '-25%', features: ['Всё из Базового', 'Ежедневные задания', 'Приоритет поддержки'] },
    { name: 'Премиум', price: '2 890 ₽', badge: '-29%', features: ['Безлимит токенов', 'Готовые шаблоны', 'Доступ к мини-приложению Telegram'] },
];

export default function PricingPage(){
    return (
        <section className="container-1160 px-4 py-10">
            <h1>Тарифы</h1>
            <p className="mt-2 max-w-[700px]">Выбирайте удобный формат — можно начать бесплатно и перейти на подписку позже.</p>

            <div className="grid md:grid-cols-3 gap-4 mt-6">
                {plans.map(p=>(
                    <article key={p.name} className="card p-5">
                        <div className="flex items-center justify-between">
                            <h3>{p.name}</h3>
                            {p.badge && <span className="rounded-full bg-[--brand-100] text-[--color-primary] px-2 py-1 text-xs">{p.badge}</span>}
                        </div>
                        <div className="text-[28px] font-extrabold mt-2">{p.price}</div>
                        {p.note && <div className="text-sm opacity-70">{p.note}</div>}
                        <ul className="mt-4 space-y-1 text-[14px]">
                            {p.features.map(f=><li key={f}>• {f}</li>)}
                        </ul>
                        <button className="btn-primary mt-4 w-full">Оформить подписку</button>
                    </article>
                ))}
            </div>
        </section>
    );
}
