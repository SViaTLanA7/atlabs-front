// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="container-1160 px-4 pt-10 pb-8 text-center">
                <h1 className="h1 text-[36px] md:text-[44px] leading-[1.1]">
                    твой персональный<br/>AI-ассистент для учебы
                </h1>
                <p className="mt-3 max-w-[780px] mx-auto text-[15px] text-[var(--muted)]">
                    Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт по шагам.
                </p>
                <div className="mt-6 flex items-center justify-center gap-3">
                    <Link href="/register" className="btn-primary">Попробовать бесплатно</Link>
                    <Link href="#how" className="btn-outline">Как это работает</Link>
                </div>
            </section>

            {/* ЧЕТЫРЕ ЛАБОРАТОРИИ — оставляем твой компонент/разметку */}
            <section className="container-1160 px-4 py-6">
                <h2 className="text-[26px] md:text-[28px] font-extrabold tracking-[-0.02em]">
                    ЧЕТЫРЕ ЛАБОРАТОРИИ — ОДИН ЛИЧНЫЙ КАБИНЕТ
                </h2>

                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    {/* Лаборатории — короткие карточки */}
                    <article className="card p-5">
                        <div className="flex items-start gap-3">
                            <Image src="/atlabs/lab-1.svg" alt="" width={32} height={32}/>
                            <div>
                                <h3 className="font-semibold">Лаборатория обучения</h3>
                                <p className="text-[14px] opacity-70">Готовые мини-конспекты и разборы</p>
                            </div>
                        </div>
                        <div className="mt-3 text-[13px] opacity-70">Понять за урок</div>
                    </article>

                    <article className="card p-5">
                        <div className="flex items-start gap-3">
                            <Image src="/atlabs/lab-2.svg" alt="" width={32} height={32}/>
                            <div>
                                <h3 className="font-semibold">Лаборатория психологии</h3>
                                <p className="text-[14px] opacity-70">Фокус, помодоро, анти-прокрастинация</p>
                            </div>
                        </div>
                        <div className="mt-3 text-[13px] opacity-70">Включить режим</div>
                    </article>

                    <article className="card p-5">
                        <div className="flex items-start gap-3">
                            <Image src="/atlabs/lab-3.svg" alt="" width={32} height={32}/>
                            <div>
                                <h3 className="font-semibold">Лаборатория развития</h3>
                                <p className="text-[14px] opacity-70">План обучения и навыков</p>
                            </div>
                        </div>
                        <div className="mt-3 text-[13px] opacity-70">Ежедневка</div>
                    </article>

                    <article className="card p-5">
                        <div className="flex items-start gap-3">
                            <Image src="/atlabs/lab-4.svg" alt="" width={32} height={32}/>
                            <div>
                                <h3 className="font-semibold">Лаборатория финансов</h3>
                                <p className="text-[14px] opacity-70">Учимся вести финансы студента</p>
                            </div>
                        </div>
                        <div className="mt-3 text-[13px] opacity-70">Ежедневка</div>
                    </article>
                </div>
            </section>

            {/* КАК ЭТО РАБОТАЕТ */}
            <section id="how" className="container-1160 px-4 py-8">
                <h2 className="text-[26px] md:text-[28px] font-extrabold tracking-[-0.02em]">КАК ЭТО РАБОТАЕТ</h2>
                {/* …оставь твои step-карточки, только оберни в .card и выровняй отступы… */}
            </section>

            {/* дальше — твои блоки «попробуйте прямо сейчас», «отзывы», «тарифы», «FAQ» и т.п. */}
        </>
    );
}
