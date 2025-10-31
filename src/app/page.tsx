// src/app/page.tsx
export const metadata = {
    title: 'StudyFlow — твой персональный AI-ассистент для учёбы',
    description:
        'Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт по шагам.',
};

import Section from '../components/ui/Section';
import LabCard from '../components/LabCard';
import StepCard from '../components/StepCard';
import ReviewCarousel from '../components/ReviewCarousel';

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="container-1160 px-4 pt-16 pb-14 text-center">
                <div className="mx-auto max-w-3xl">
                    <p className="text-sm/5 font-medium text-white/80 tracking-wide">
                        StudyFlow
                    </p>
                    <h1 className="mt-3 text-[36px] md:text-[48px] font-extrabold leading-tight">
                        <span className="block">твой персональный</span>
                        <span className="block">AI-ассистент для учебы</span>
                    </h1>
                    <p className="mt-4 text-[15px] text-white/80">
                        Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт
                        по шагам.
                    </p>

                    <div className="mt-6 flex items-center justify-center gap-3">
                        <a className="btn btn-primary" href="/register">
                            Попробовать бесплатно
                        </a>
                        <a className="btn btn-secondary" href="#how">
                            Как это работает
                        </a>
                    </div>
                </div>
            </section>

            {/* ЛАБОРАТОРИИ */}
            <Section id="labs" title="ЧЕТЫРЕ ЛАБОРАТОРИИ — ОДИН ЛИЧНЫЙ КАБИНЕТ">
                <div className="grid gap-4 md:grid-cols-4">
                    <LabCard
                        title="Лаборатория обучения"
                        desc="Готовые мини-конспекты и разборы"
                        icon="/atlabs/lab-1.svg"
                        cta="Понять за урок"
                    />
                    <LabCard
                        title="Лаборатория психологии"
                        desc="Фокус, помодоро, анти-прокрастинация"
                        icon="/atlabs/lab-2.svg"
                        cta="Включить режим"
                    />
                    <LabCard
                        title="Лаборатория развития"
                        desc="План обучения и навыков"
                        icon="/atlabs/lab-3.svg"
                        cta="Ежедневка"
                    />
                    <LabCard
                        title="Лаборатория финансов"
                        desc="Учимся вести финансы студента"
                        icon="/atlabs/lab-4.svg"
                        cta="Ежедневка"
                    />
                </div>
            </Section>

            {/* КАК ЭТО РАБОТАЕТ */}
            <Section id="how" title="КАК ЭТО РАБОТАЕТ" subtitle="От запроса до готового решения — всего 30 секунд">
                <div className="grid gap-4 md:grid-cols-4">
                    <StepCard
                        step="1"
                        title="Выбираем тип"
                        text="Задача, конспект или подготовка"
                        icon="/atlabs/step-1.svg"
                    />
                    <StepCard
                        step="2"
                        title="Загружаем условие"
                        text="Текст, фото или файл — как удобно"
                        icon="/atlabs/step-2.svg"
                    />
                    <StepCard
                        step="3"
                        title="Получаем результат"
                        text="Пошаговое решение и пояснения"
                        icon="/atlabs/step-3.svg"
                    />
                    <StepCard
                        step="4"
                        title="Продолжаем общение"
                        text="Задаём уточняющие вопросы"
                        icon="/atlabs/step-4.svg"
                    />
                </div>
            </Section>

            {/* CTA блок */}
            <Section pad="lg">
                <div className="card flex flex-col items-center gap-4 bg-[--brand] text-white p-6 md:p-10 md:flex-row md:justify-between">
                    <div>
                        <h3 className="text-[20px] md:text-[24px] font-bold">ПОПРОБУЙТЕ ПРЯМО СЕЙЧАС!</h3>
                        <p className="mt-1 opacity-90">
                            Получите готовое решение или совет уже через 30 секунд. Без подписки — первые 100 токенов бесплатно.
                        </p>
                    </div>
                    <a className="btn btn-white" href="/register">Попробовать бесплатно</a>
                </div>
            </Section>

            {/* ОТЗЫВЫ */}
            <Section title="ОТЗЫВЫ">
                <ReviewCarousel />
            </Section>
        </>
    );
}
