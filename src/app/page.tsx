// src/app/page.tsx
import Image from "next/image";
import Section from "@/components/ui/Section";
import LabCard from "@/components/LabCard";
import StepCard from "@/components/StepCard";
import ReviewCarousel from "@/components/ReviewCarousel";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";

export default function HomePage() {
    return (
        <main className="bg-[oklch(0.68_0.2_300)] min-h-screen">
            {/* HERO */}
            <Section className="pb-6 md:pb-10">
                <div className="max-w-3xl mx-auto text-center">
                    <Image
                        src="/brand/logo.svg"
                        alt="StudyFlow"
                        width={140}
                        height={40}
                        className="mx-auto mb-6"
                        priority
                    />
                    <h1 className="font-semibold leading-tight tracking-[-0.01em]">
                        <span className="block text-white text-2xl md:text-3xl lg:text-4xl">твой персональный</span>
                        <span className="block text-white text-3xl md:text-5xl lg:text-6xl">AI-ассистент для учебы</span>
                    </h1>
                    <p className="mt-6 text-white/85 text-base md:text-lg">
                        Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт по шагам.
                    </p>
                    <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                        <a
                            href="/register"
                            className="inline-flex items-center justify-center rounded-xl px-6 py-3 text-white bg-[oklch(0.5_0.21_300)] hover:opacity-90 active:opacity-80 transition"
                        >
                            Попробовать бесплатно
                        </a>
                        <a
                            href="/faq"
                            className="inline-flex items-center justify-center rounded-xl px-6 py-3 bg-white/10 text-white hover:bg-white/15 transition"
                        >
                            Как это работает
                        </a>
                    </div>
                </div>
            </Section>

            {/* ЧЕТЫРЕ ЛАБОРАТОРИИ */}
            <Section
                id="labs"
                title="ЧЕТЫРЕ ЛАБОРАТОРИИ — ОДИН ЛИЧНЫЙ КАБИНЕТ"
                className="pt-0"
            >
                <div className="grid md:grid-cols-4 gap-4 md:gap-6">
                    <LabCard icon="/atlabs/lab-1.svg" title="Лаборатория обучения" caption="Разбор тем, конспекты, шпаргалки" cta="Попробовать" />
                    <LabCard icon="/atlabs/lab-2.svg" title="Лаборатория психологии" caption="Поддержка и фокус — учиться спокойнее" cta="Подробнее" />
                    <LabCard icon="/atlabs/lab-3.svg" title="Лаборатория развития" caption="Планирование, навыки, мотивация" cta="Подробнее" />
                    <LabCard icon="/atlabs/lab-4.svg" title="Лаборатория финансов" caption="Бюджет, стипендия, фин. грамотность" cta="Подробнее" />
                </div>
            </Section>

            {/* КАК ЭТО РАБОТАЕТ */}
            <Section id="how" title="КАК ЭТО РАБОТАЕТ" subtitle="От запроса до готового решения — всего 30 секунд">
                <div className="grid md:grid-cols-4 gap-4 md:gap-6">
                    <StepCard icon="/atlabs/step-1.svg" title="Выберите запрос" text="Напишите условие, прикрепите фото или файл." />
                    <StepCard icon="/atlabs/step-2.svg" title="Загрузка и анализ" text="Искусственный интеллект распознает и уточняет детали." />
                    <StepCard icon="/atlabs/step-3.svg" title="Получите результат" text="Пошаговое решение, конспект или пояснение темы." />
                    <StepCard icon="/atlabs/step-4.svg" title="Продолжай общение" text="Задавайте вопросы и дополняйте ответ, пока всё ясно." />
                </div>
            </Section>

            {/* CTA с полем ввода (упрощённый) */}
            <Section className="pt-0">
                <div className="rounded-3xl border border-white/15 bg-white/8 p-5 md:p-8 max-w-5xl mx-auto">
                    <div className="text-xl md:text-2xl font-semibold text-white">ПОПРОБУЙТЕ ПРЯМО СЕЙЧАС!</div>
                    <p className="mt-2 text-white/80 text-sm md:text-base">
                        Получите готовое решение или совет уже через 30 секунд. Первые 100 токенов бесплатно.
                    </p>
                    <div className="mt-5 flex gap-3">
                        <input
                            placeholder="Опишите задачу…"
                            className="flex-1 rounded-xl bg-white/10 px-4 py-3 text-white placeholder-white/60 outline-none focus:bg-white/12"
                        />
                        <button className="rounded-xl bg-white px-5 py-3 text-[oklch(0.5_0.21_300)] hover:opacity-90">Отправить</button>
                    </div>
                </div>
            </Section>

            {/* ОТЗЫВЫ */}
            <Section id="reviews" title="ОТЗЫВЫ">
                <div className="grid md:grid-cols-3 gap-4 md:gap-6">
                    <ReviewCarousel />
                    <ReviewCarousel />
                    <ReviewCarousel />
                </div>
            </Section>

            {/* ТАРИФЫ */}
            <Section id="pricing" title="ОТКРОЙ ПОЛНЫЙ ДОСТУП К STUDYFLOW">
                <Pricing />
            </Section>

            {/* FAQ */}
            <Section id="faq" title="ЧАСТЫЕ ВОПРОСЫ">
                <FAQ />
            </Section>
        </main>
    );
}
