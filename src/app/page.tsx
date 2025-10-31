// src/app/page.tsx
import Header from "@/components/Header";
import Link from "next/link";

export default function HomePage() {
    return (
        <>
            <Header />
            <main>
                {/* HERO */}
                <section className="container-1160 pt-8">
                    <div className="grid md:grid-cols-[1.1fr_0.9fr] gap-8 items-center">
                        <div>
                            <p className="text-sm text-black/60 mb-2">Оценка пользователей · <span className="font-semibold">5.0</span></p>
                            <h1>ТВОЙ ПЕРСОНАЛЬНЫЙ AI-АССИСТЕНТ НА КАЖДЫЙ ДЕНЬ</h1>
                            <p className="mt-3 max-w-[560px]">
                                Решай задачи, принимай решения и развивайся быстрее — в одном месте.
                                StudyFlow объединяет учёбу, финансы, карьеру и психологическую поддержку.
                            </p>
                            <div className="mt-5 flex gap-3">
                                <Link href="/register" className="btn-primary">Попробовать бесплатно</Link>
                                <Link href="/#how" className="border rounded-[10px] px-5 py-3 hover:bg-black/5">
                                    Как это работает?
                                </Link>
                            </div>
                        </div>
                        <div className="card p-5">
                            <img src="/atlabs/hero-student.svg" alt="" className="w-full h-auto" />
                        </div>
                    </div>

                    {/* Плитки выбора направления */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-6">
                        {[
                            { t: "Помощь с учёбой" },
                            { t: "Карьера и собеседования" },
                            { t: "Финансы" },
                            { t: "Психология" },
                        ].map((x, i) => (
                            <button
                                key={i}
                                className="border rounded-[12px] px-4 py-3 text-sm hover:bg-black/5"
                            >
                                {x.t}
                            </button>
                        ))}
                    </div>
                </section>

                {/* 4 ЛАБОРАТОРИИ */}
                <section className="container-1160 mt-10">
                    <h2>ЧЕТЫРЕ ЛАБОРАТОРИИ — ОДИН ЛИЧНЫЙ КАБИНЕТ</h2>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-4">
                        {[
                            { title: "Лаборатория обучения", img: "/atlabs/book.svg", btn: "Получить решение" },
                            { title: "Лаборатория психологии", img: "/atlabs/user.svg", btn: "Ежедневные" },
                            { title: "Лаборатория развития", img: "/atlabs/cta-guy.svg", btn: "Ежедневные" },
                            { title: "Лаборатория финансов", img: "/atlabs/frame-57.svg", btn: "Ежедневные" },
                        ].map((c, i) => (
                            <div key={i} className="card p-4">
                                <img src={c.img} alt="" className="h-20 w-auto mb-3" />
                                <div className="text-[18px] font-semibold">{c.title}</div>
                                <div className="mt-3">
                                    <button className="btn-primary w-full">{c.btn}</button>
                                </div>
                            </div>
                        ))}
                    </div>
                </section>

                {/* CTA ПОЛОСА */}
                <section className="bg-[--brand-700] text-white mt-12">
                    <div className="container-1160 py-8">
                        <div className="grid md:grid-cols-[1.2fr_0.8fr] gap-8 items-center">
                            <div>
                                <h2 className="text-white">ПОПРОБУЙТЕ ПРЯМО СЕЙЧАС!</h2>
                                <p className="mt-2 opacity-90">
                                    Получите готовое решение уже через 30 секунд. Первые 100 токенов — бесплатно.
                                </p>
                                <div className="mt-5">
                                    <Link href="/register" className="inline-flex btn-primary bg-white text-black hover:brightness-95">
                                        Попробуй нашего ассистента
                                    </Link>
                                </div>
                            </div>
                            <img src="/atlabs/Frame 117.svg" className="w-full h-auto" alt="" />
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}
