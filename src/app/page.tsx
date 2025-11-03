import Image from "next/image";
import Link from "next/link";

// относительные пути — из app → components/ui
import StepCard from "../components/ui/StepCard";
import ReviewCarousel from "../components/ui/ReviewCarousel";
import Pricing from "../components/ui/Pricing";
import FAQ from "../components/ui/FAQ";
import AboutBlock from "../components/ui/AboutBlock";
import ArsenalTable from "../components/ui/ArsenalTable";
import WhyList from "../components/ui/WhyList";

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="container-1160 hero">
                <div>
                    <h1 className="h1 title">
                        твой персональный<br/>AI-ассистент для учёбы
                    </h1>
                    <p className="hero-p">
                        Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт по шагам.
                    </p>
                    <div className="hero-cta">
                        <Link href="/register" className="btn-primary">Попробовать бесплатно</Link>
                        <Link href="#how" className="btn-outline">Как это работает</Link>
                    </div>
                    <div className="chips" style={{ marginTop: 12 }}>
                        <span className="chip">Помощь с учёбой</span>
                        <span className="chip">Карьера и навыки</span>
                        <span className="chip">Финансы</span>
                    </div>
                </div>

                <div className="hero-ill">
                    <div className="hero-card" data-parallax="0.14">
                        <Image
                            src="/atlabs/hero-student.svg"
                            alt="Student"
                            width={520}
                            height={460}
                            sizes="(max-width: 1024px) 88vw, 520px"
                            style={{ display: "block", margin: "18px auto" }}
                            priority
                        />
                    </div>
                </div>
            </section>

            {/* ЛАБОРАТОРИИ */}
            <section className="container-1160 labs">
                <h2>ЧЕТЫРЕ ЛАБОРАТОРИИ — ОДИН ЛИЧНЫЙ КАБИНЕТ</h2>
                <div className="labs-grid">
                    <article className="card lab-card">
                        <div className="lab-top">
                            <Image src="/atlabs/lab-1.svg" alt="" width={32} height={32}/>
                            <div>
                                <div className="lab-title">Лаборатория обучения</div>
                                <div className="lab-sub">Готовые мини-конспекты и разборы</div>
                            </div>
                        </div>
                        <div className="lab-foot">Понять за урок</div>
                    </article>

                    <article className="card lab-card">
                        <div className="lab-top">
                            <Image src="/atlabs/lab-2.svg" alt="" width={32} height={32}/>
                            <div>
                                <div className="lab-title">Лаборатория психологии</div>
                                <div className="lab-sub">Фокус, помодоро, анти-прокрастинация</div>
                            </div>
                        </div>
                        <div className="lab-foot">Включить режим</div>
                    </article>

                    <article className="card lab-card">
                        <div className="lab-top">
                            <Image src="/atlabs/lab-3.svg" alt="" width={32} height={32}/>
                            <div>
                                <div className="lab-title">Лаборатория развития</div>
                                <div className="lab-sub">План обучения и навыков</div>
                            </div>
                        </div>
                        <div className="lab-foot">Ежедневка</div>
                    </article>

                    <article className="card lab-card">
                        <div className="lab-top">
                            <Image src="/atlabs/lab-4.svg" alt="" width={32} height={32}/>
                            <div>
                                <div className="lab-title">Лаборатория финансов</div>
                                <div className="lab-sub">Учимся вести финансы студента</div>
                            </div>
                        </div>
                        <div className="lab-foot">Ежедневка</div>
                    </article>
                </div>
            </section>

            {/* КАК ЭТО РАБОТАЕТ */}
            <section id="how" className="section-gray">
                <div className="container-1160">
                    <h2>КАК ЭТО РАБОТАЕТ</h2>
                    <p className="muted">От запроса до готового решения — всего 30 секунд</p>

                    <div className="steps-grid">
                        <StepCard
                            icon="/atlabs/step-1.svg"
                            title="Выбери мини-агента"
                            text="Хочешь написать текст, решить задачу или получить совет? Выбери подходящего помощника."
                            cta={{ href: "/register", label: "Попробовать бесплатно" }}
                        />
                        <StepCard
                            icon="/atlabs/step-2.svg"
                            title="Загрузи задание или вопрос"
                            text="Напиши вопрос, вставь задание или фото. Чем точнее запрос, тем лучше результат."
                            cta={{ href: "/solutions", label: "Попробовать бесплатно" }}
                        />
                        <StepCard
                            icon="/atlabs/step-3.svg"
                            title="Получи готовый результат"
                            text="AI анализирует запрос и даёт понятное решение без воды — с объяснениями."
                            cta={{ href: "/solutions", label: "Попробовать бесплатно" }}
                        />
                        <StepCard
                            icon="/atlabs/step-4.svg"
                            title="Продолжай общение"
                            text="Уточняй, проси примеры, формируй конспект — диалогом быстрее и проще."
                            cta={{ href: "/chat", label: "Попробовать бесплатно" }}
                        />
                    </div>
                </div>
            </section>

            {/* ПРОМО-БАННЕР */}
            <section className="container-1160 promo">
                <div className="promo-box">
                    <div className="promo-text">
                        <h3>ПОПРОБУЙТЕ ПРЯМО СЕЙЧАС!</h3>
                        <p>Получите готовое решение или совет через 30 секунд. Без подписки — первые 100 токенов бесплатно.</p>
                    </div>
                    <form className="promo-form" action="/solutions">
                        <input
                            name="q"
                            placeholder="Опишите задачу или тему — например: «Решите квадратное уравнение x²-5x+6=0»"
                        />
                        <button className="btn-primary" type="submit">Попробуй нашего ассистента</button>
                    </form>
                    <div className="promo-ill" data-parallax="0.1">
                        <Image
                            src="/atlabs/cta-guy.svg"
                            alt=""
                            width={200}
                            height={200}
                            sizes="(max-width: 1024px) 40vw, 200px"
                        />
                    </div>
                </div>
            </section>

            {/* ОТЗЫВЫ */}
            <section className="container-1160 reviews">
                <h2>ОТЗЫВЫ</h2>
                <ReviewCarousel
                    items={[
                        {
                            name: "Анна",
                            role: "Студент",
                            avatar: "/atlabs/user.svg",
                            badge: "Лаборатория обучения",
                            rating: 5,
                            text: "Думала, не успею к экзамену. Но всё сдала и спокойно спала впервые за семестр.",
                        },
                        {
                            name: "Никита",
                            role: "Студент",
                            avatar: "/atlabs/user.svg",
                            badge: "Лаборатория психологии",
                            rating: 5,
                            text: "Помодоро + план на неделю — и я впервые не сорвался с дедлайнами.",
                        },
                        {
                            name: "Алёна",
                            role: "Студент",
                            avatar: "/atlabs/user.svg",
                            badge: "Лаборатория развития",
                            rating: 5,
                            text: "Конспекты по темам экономят часы. Учиться стало реально проще.",
                        },
                    ]}
                />
            </section>

            {/* О ПРОДУКТЕ / АРСЕНАЛ / ПОЧЕМУ ВЫБИРАЮТ */}
            <AboutBlock />
            <ArsenalTable />
            <WhyList />

            {/* ТАРИФЫ + FAQ */}
            <Pricing />
            <FAQ />
        </>
    );
}
