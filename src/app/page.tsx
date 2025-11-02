// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function HomePage() {
    return (
        <>
            {/* HERO */}
            <section className="container-1160 px-4 pt-10 md:pt-14 pb-8">
                <div className="grid-hero">
                    {/* Левый столбец */}
                    <div>
                        <h1 className="h1 text-[36px] md:text-[56px] leading-[1.05]">
                            ТВОЙ ПЕРСОНАЛЬНЫЙ<br/>AI-
                            <span className="inline md:block">АССИСТЕНТ</span><br/>НА КАЖДЫЙ ДЕНЬ
                        </h1>

                        <p className="mt-12 max-w-[720px] text-[15px] text-[var(--muted)]">
                            Решай задачи, принимай решения, развивайся — всё в одном месте.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-10">
                            <Link href="/register" className="btn-primary rounded-[12px]">Попробовать бесплатно</Link>
                            <Link href="/login" className="btn-outline rounded-[12px]">Уже есть аккаунт?</Link>
                            <div className="hidden md:flex items-center gap-8 text-[14px]">
                <span className="inline-flex items-center gap-8">
                  <span className="inline-block h-8 w-8 rounded-full bg-green-500" />
                  5.0 на основе 1000+ сессий
                </span>
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap gap-10">
                            <Link className="btn-outline rounded-[12px]" href="/finance">Финансы</Link>
                            <Link className="btn-outline rounded-[12px]" href="/study">Помощь с учёбой</Link>
                            <Link className="btn-outline rounded-[12px]" href="/career">Карьера и развитие</Link>
                        </div>
                    </div>

                    {/* Правый столбец — иллюстрация */}
                    <div className="hidden md:block">
                        <div className="card overflow-hidden p-0">
                            <Image
                                src="/atlabs/studyflow-banner.png"
                                alt=""
                                width={920}
                                height={920}
                                priority
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* ЧЕТЫРЕ ЛАБОРАТОРИИ */}
            <section className="container-1160 px-4 pb-12">
                <h2 className="text-[26px] md:text-[28px] font-extrabold tracking-[-0.02em]">
                    ЧЕТЫРЕ ЛАБОРАТОРИИ — ОДИН ЛИЧНЫЙ КАБИНЕТ
                </h2>

                <div className="labs-grid mt-6">
                    {/* 1 */}
                    <article className="card p-5 grid gap-10">
                        <div className="flex items-start gap-10">
                            <Image src="/atlabs/lab-1.svg" alt="" width={36} height={36}/>
                            <div>
                                <h3 className="font-semibold">ЛАБОРАТОРИЯ ОБУЧЕНИЯ</h3>
                                <p className="text-[14px] text-[var(--muted)]">Подборка инструментов, советы и быстрые ответы.</p>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <Link href="/learning" className="btn-outline rounded-[12px]">Подробнее</Link>
                            <Link href="/learning" className="btn-primary rounded-[12px]">В лабораторию</Link>
                        </div>
                    </article>

                    {/* 2 */}
                    <article className="card p-5 grid gap-10">
                        <div className="flex items-start gap-10">
                            <Image src="/atlabs/lab-2.svg" alt="" width={36} height={36}/>
                            <div>
                                <h3 className="font-semibold">ЛАБОРАТОРИЯ ПСИХОЛОГИИ</h3>
                                <p className="text-[14px] text-[var(--muted)]">Фокус, помодоро и анти-прокрастинация.</p>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <Link href="/psy" className="btn-outline rounded-[12px]">Подробнее</Link>
                            <Link href="/psy" className="btn-primary rounded-[12px]">В лабораторию</Link>
                        </div>
                    </article>

                    {/* 3 */}
                    <article className="card p-5 grid gap-10">
                        <div className="flex items-start gap-10">
                            <Image src="/atlabs/lab-3.svg" alt="" width={36} height={36}/>
                            <div>
                                <h3 className="font-semibold">ЛАБОРАТОРИЯ РАЗВИТИЯ</h3>
                                <p className="text-[14px] text-[var(--muted)]">План обучения и навыков. Ежедневка.</p>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <Link href="/growth" className="btn-outline rounded-[12px]">Подробнее</Link>
                            <Link href="/growth" className="btn-primary rounded-[12px]">В лабораторию</Link>
                        </div>
                    </article>

                    {/* 4 */}
                    <article className="card p-5 grid gap-10">
                        <div className="flex items-start gap-10">
                            <Image src="/atlabs/lab-4.svg" alt="" width={36} height={36}/>
                            <div>
                                <h3 className="font-semibold">ЛАБОРАТОРИЯ ФИНАНСОВ</h3>
                                <p className="text-[14px] text-[var(--muted)]">Учимся вести финансы студента.</p>
                            </div>
                        </div>
                        <div className="flex gap-10">
                            <Link href="/finance" className="btn-outline rounded-[12px]">Подробнее</Link>
                            <Link href="/finance" className="btn-primary rounded-[12px]">В лабораторию</Link>
                        </div>
                    </article>
                </div>
            </section>
        </>
    );
}
