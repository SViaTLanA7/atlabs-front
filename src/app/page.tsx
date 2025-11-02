import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="container-1160 px-4 pt-10 md:pt-14 pb-8 text-center">
                <h1 className="h1 text-[36px] md:text-[44px] leading-[1.1]">
                    твой персональный
                    <br />
                    <span className="block">AI-ассистент для учёбы</span>
                </h1>

                <p className="mt-3 max-w-[860px] mx-auto text-[15px] text-[var(--muted)]">
                    Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт по шагам.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <Link href="/solutions" className="btn-primary rounded-[12px]">
                        Попробовать бесплатно
                    </Link>
                    <a href="#how" className="btn-outline rounded-[12px]">
                        Как это работает
                    </a>
                </div>

                {/* чипсы */}
                <div className="mt-4 flex flex-wrap items-center justify-center gap-6 text-[13px]">
                    <span className="chip">Помощь с учёбой</span>
                    <span className="chip">Карьера и навыки</span>
                    <span className="chip">Финансы</span>
                </div>
            </section>

            {/* ЧЕТЫРЕ ЛАБОРАТОРИИ */}
            <section className="container-1160 px-4 py-6 md:py-8">
                <h2 className="section-title">ЧЕТЫРЕ ЛАБОРАТОРИИ — ОДИН ЛИЧНЫЙ КАБИНЕТ</h2>

                <div className="mt-4 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <LabCard
                        icon="/atlabs/lab-1.svg"
                        title="Лаборатория обучения"
                        desc="Готовые мини-конспекты и разборы"
                        foot="Понять за урок"
                    />
                    <LabCard
                        icon="/atlabs/lab-2.svg"
                        title="Лаборатория психологии"
                        desc="Фокус, помодоро, анти-прокрастинация"
                        foot="Включить режим"
                    />
                    <LabCard
                        icon="/atlabs/lab-3.svg"
                        title="Лаборатория развития"
                        desc="План обучения и навыков"
                        foot="Ежедневка"
                    />
                    <LabCard
                        icon="/atlabs/lab-4.svg"
                        title="Лаборатория финансов"
                        desc="Учимся вести финансы студента"
                        foot="Ежедневка"
                    />
                </div>
            </section>

            {/* КАК ЭТО РАБОТАЕТ (якорь под кнопку) */}
            <section id="how" className="container-1160 px-4 py-8">
                <h2 className="section-title">КАК ЭТО РАБОТАЕТ</h2>
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <StepCard step="1" title="Загружаешь условие">
                        Фото/текст задачи или тема — что удобно.
                    </StepCard>
                    <StepCard step="2" title="Получаешь разбор">
                        Чёткие шаги решения и пояснения.
                    </StepCard>
                    <StepCard step="3" title="Сохраняешь конспект">
                        Сформируем мини-конспект и добавим в историю.
                    </StepCard>
                </div>
            </section>
        </>
    );
}

function LabCard({
                     icon,
                     title,
                     desc,
                     foot,
                 }: {
    icon: string;
    title: string;
    desc: string;
    foot: string;
}) {
    return (
        <article className="card p-5 hover:shadow-md transition-shadow">
            <div className="flex items-start gap-3">
                <Image src={icon} alt="" width={32} height={32} />
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-[14px] opacity-70">{desc}</p>
                </div>
            </div>
            <div className="mt-3 text-[13px] opacity-70">{foot}</div>
        </article>
    );
}

function StepCard({ step, title, children }: { step: string; title: string; children: React.ReactNode }) {
    return (
        <article className="card p-5">
            <div className="flex items-start gap-3">
                <div className="step-dot">{step}</div>
                <div>
                    <h4 className="font-semibold">{title}</h4>
                    <p className="text-[14px] opacity-70">{children}</p>
                </div>
            </div>
        </article>
    );
}
