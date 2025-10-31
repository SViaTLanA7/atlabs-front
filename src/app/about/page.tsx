// src/app/about/page.tsx
export const metadata = { title: 'О StudyFlow — как это работает' };

export default function AboutPage() {
    return (
        <section className="container-1160 px-4 py-10">
            <h1>О StudyFlow</h1>
            <p className="mt-3 max-w-[860px]">
                StudyFlow — единый AI-ассистент для учёбы, карьеры, финансов и психологической поддержки.
                Мы превращаем сложное в простое: от решения задач до планирования развития.
            </p>

            <div className="grid md:grid-cols-3 gap-4 mt-8">
                {[
                    ['Скорость', 'Ответы и черновики решений за секунды.'],
                    ['Точность', 'Подсказки, методички и контрольные списки.'],
                    ['Простота', 'Один кабинет, все инструменты по ролям.'],
                ].map(([t, d]) => (
                    <article key={t} className="card p-5">
                        <h3>{t}</h3>
                        <p className="mt-2">{d}</p>
                    </article>
                ))}
            </div>

            <h2 className="mt-10">Лаборатории StudyFlow</h2>
            <div className="grid md:grid-cols-2 gap-4 mt-4">
                {[
                    ['Лаборатория обучения', 'Решения задач, мини-конспекты, планы подготовки.'],
                    ['Лаборатория развития', 'Навыки, карьерные траектории, трекинг прогресса.'],
                    ['Лаборатория финансов', 'Бюджет, цели, база инвест-знаний без «воды».'],
                    ['Лаборатория психологии', 'Поддержка, упражнения, план действий без перегруза.'],
                ].map(([t, d]) => (
                    <article key={t} className="card p-5">
                        <h3>{t}</h3>
                        <p className="mt-2">{d}</p>
                    </article>
                ))}
            </div>
        </section>
    );
}
