import Image from "next/image";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="container-1160 hero">
                <div>
                    <h1 className="h1 title">
                        твой персональный<br />AI-ассистент для учёбы
                    </h1>

                    <p className="hero-p">
                        Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт по шагам.
                    </p>

                    <div className="hero-cta">
                        <Link href="/register" className="btn-primary">Попробовать бесплатно</Link>
                        <Link href="#how" className="btn-outline">Как это работает</Link>
                    </div>

                    <div className="chips" style={{marginTop:12}}>
                        <span className="chip">Помощь с учёбой</span>
                        <span className="chip">Карьера и навыки</span>
                        <span className="chip">Финансы</span>
                    </div>
                </div>

                <div className="hero-ill">
                    <div style={{
                        width: '100%', maxWidth: 520, borderRadius: 24, overflow: 'hidden',
                        background: 'var(--brand)'
                    }}>
                        <div style={{padding: 16}}>
                            <Image
                                src="/atlabs/hero-student.svg"
                                alt="Student"
                                width={480}
                                height={420}
                                style={{display:'block', margin:'18px auto'}}
                                priority
                            />
                        </div>
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
        </>
    );
}
