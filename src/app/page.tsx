// src/app/page.tsx
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
    return (
        <>
            {/* HERO */}
            <section className="bg-white border-b" style={{borderColor:'var(--stroke)'}}>
                <div className="container-1160 grid grid-cols-12 gap-6 px-4 py-6 md:py-8">
                    <div className="col-span-12 md:col-span-7">
                        <h1 className="h1 text-[40px] md:text-[56px]">
                            ТВОЙ ПЕРСОНАЛЬНЫЙ AI-<br/>АССИСТЕНТ НА КАЖДЫЙ ДЕНЬ
                        </h1>
                        <p className="mt-3 max-w-[520px] text-[14px] md:text-[15px] text-[var(--muted)]">
                            Решай задачи, принимай решения, развивайся — всё в одном месте.
                        </p>

                        <div className="mt-4 flex flex-col sm:flex-row gap-10 sm:items-center">
                            <div className="flex gap-3">
                                <Link href="/register" className="btn btn-primary rounded-[10px]">Попробовать бесплатно</Link>
                                <Link href="/login" className="btn btn-outline rounded-[10px]">Уже есть аккаунт?</Link>
                            </div>

                            <div className="hidden sm:flex items-center gap-2 text-sm">
                <span className="inline-flex items-center gap-1 rounded-full border px-2 py-1" style={{borderColor:'var(--stroke)'}}>
                  <span className="h-[10px] w-[10px] rounded-full bg-[var(--success)] inline-block"></span>
                  5.0
                </span>
                                <span className="opacity-70">на основе 1000+ сессий</span>
                            </div>
                        </div>
                    </div>

                    <div className="col-span-12 md:col-span-5">
                        <div className="relative mx-auto h-[240px] w-[240px] md:h-[320px] md:w-[320px]">
                            <Image src="/atlabs/hero-student.svg" alt="" fill className="object-contain" />
                        </div>
                    </div>

                    {/* табы под иллюстрацией */}
                    <div className="col-span-12">
                        <div className="mx-auto grid max-w-[760px] grid-cols-3 gap-3">
                            {['Финансы','Помощь с учёбой','Карьера и развитие'].map((t,i)=>(
                                <button key={t} className={`rounded-[20px] border px-5 py-3 text-sm ${i===1?'bg-white shadow':''}`}
                                        style={{borderColor:'var(--stroke)'}}>
                                    {t}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* ЧЕТЫРЕ ЛАБОРАТОРИИ */}
            <section className="container-1160 px-4 py-10">
                <h2 className="text-[24px] md:text-[28px] font-extrabold tracking-tight">
                    ЧЕТЫРЕ ЛАБОРАТОРИИ — ОДИН ЛИЧНЫЙ КАБИНЕТ
                </h2>

                <div className="mt-5 grid grid-cols-12 gap-4">
                    {[
                        {t:'ЛАБОРАТОРИЯ ОБУЧЕНИЯ'},
                        {t:'ЛАБОРАТОРИЯ ПСИХОЛОГИИ'},
                        {t:'ЛАБОРАТОРИЯ РАЗВИТИЯ'},
                        {t:'ЛАБОРАТОРИЯ ФИНАНСОВ'}
                    ].map((c,idx)=>(
                        <div key={idx} className="card col-span-12 sm:col-span-6 lg:col-span-3 p-4">
                            <div className="flex items-center justify-between">
                                <strong className="text-[13px]">{c.t}</strong>
                                <div className="h-[46px] w-[64px] relative">
                                    <Image src={`/atlabs/lab-${idx+1}.svg`} alt="" fill className="object-contain"/>
                                </div>
                            </div>
                            <p className="mt-2 text-[13px] text-[var(--muted)]">
                                Подборка инструментов, советы и быстрые ответы.
                            </p>
                            <div className="mt-3 flex gap-6">
                                <button className="btn btn-outline rounded-[10px] px-4 py-2 text-[13px]">Подробнее</button>
                                <button className="btn btn-primary rounded-[10px] px-4 py-2 text-[13px]">В лабораторию</button>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* КАК ЭТО РАБОТАЕТ */}
            <section className="container-1160 px-4 pb-6">
                <h3 className="text-[20px] md:text-[22px] font-extrabold">КАК ЭТО РАБОТАЕТ</h3>
                <p className="text-[13px] text-[var(--muted)]">От запроса до готового решения — всего 30 секунд</p>

                <div className="mt-4 grid grid-cols-12 gap-4">
                    {[1,2,3,4].map(n=>(
                        <div key={n} className="card col-span-12 sm:col-span-6 lg:col-span-3 p-4">
                            <div className="h-[80px] w-full relative">
                                <Image src={`/atlabs/step-${n}.svg`} alt="" fill className="object-contain"/>
                            </div>
                            <p className="mt-2 text-[13px]">
                                Короткое описание шага №{n}. Понятный путь от запроса к результату.
                            </p>
                            <button className="mt-3 btn btn-outline rounded-[10px] text-[13px]">Попробовать бесплатно</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA «Попробуйте прямо сейчас!» */}
            <section className="px-4">
                <div className="container-1160 rounded-[20px] bg-[var(--primary)] p-6 md:p-8 text-white relative overflow-hidden">
                    <div className="grid grid-cols-12 gap-6">
                        <div className="col-span-12 md:col-span-8">
                            <h3 className="text-[22px] md:text-[26px] font-extrabold">ПОПРОБУЙТЕ ПРЯМО СЕЙЧАС!</h3>
                            <p className="mt-2 max-w-[540px] opacity-90">
                                Получите готовое решение или совет уже через 30 секунд. Без подписки — первые 100 токенов бесплатно.
                            </p>
                            <div className="mt-4 h-3 w-full rounded-full bg-white/25">
                                <div className="h-3 w-1/3 rounded-full bg-white"></div>
                            </div>
                            <button id="try" className="mt-4 btn bg-white text-[var(--primary)] rounded-[10px]">Попробуй нашего ассистента</button>
                        </div>
                        <div className="col-span-12 md:col-span-4">
                            <div className="relative mx-auto h-[180px] w-[180px] md:h-[220px] md:w-[220px]">
                                <Image src="/atlabs/cta-guy.svg" alt="" fill className="object-contain"/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ОТЗЫВЫ (слайдер-заглушка) */}
            <section className="container-1160 px-4 py-10">
                <h3 className="text-[20px] md:text-[22px] font-extrabold">ОТЗЫВЫ</h3>
                <div className="mt-4 grid grid-cols-12 gap-4">
                    {[1,2,3].map(i=>(
                        <article key={i} className="card col-span-12 md:col-span-4 p-4">
                            <div className="flex items-center gap-3">
                                <Image src="/atlabs/user.svg" alt="" width={40} height={40}/>
                                <div>
                                    <div className="font-semibold">Анна</div>
                                    <div className="text-[12px] text-[var(--muted)]">Студент</div>
                                </div>
                                <div className="ml-auto text-sm">5.0 ⭐</div>
                            </div>
                            <p className="mt-3 text-[14px]">
                                «Я думала, не успею к экзамену. Но всё сдала и спокойно спала впервые за семестр».
                            </p>
                        </article>
                    ))}
                </div>
            </section>

            {/* Блок «УМНЫЙ ПОМОЩНИК…» + картинка */}
            <section className="container-1160 px-4 py-8">
                <div className="grid grid-cols-12 gap-6">
                    <div className="col-span-12 md:col-span-6">
                        <h3 className="h1 text-[28px] md:text-[36px]">УМНЫЙ ПОМОЩНИК НА КАЖДЫЙ ДЕНЬ</h3>
                        <p className="mt-2 text-[15px] text-[var(--muted)]">
                            Развитие, финансы, правила решений и новые горизонты — наш AI превращает сложное в простое, давая ответы за секунды.
                        </p>
                    </div>
                    <div className="col-span-12 md:col-span-6">
                        <div className="card p-6">
                            <div className="relative h-[180px] w-full">
                                <Image src="/atlabs/book.svg" alt="" fill className="object-contain"/>
                            </div>
                            <div className="mx-auto mt-3 h-2 w-40 rounded-full bg-gray-200"/>
                            <p className="mt-2 text-center text-[12px] text-[var(--muted)]">ПОНЯТЬ ТЕМУ ПО ВЫСШМАТУ ЗА 5 МИНУТ</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Тарифы (упрощённо под макет) */}
            <section className="container-1160 px-4 pb-10">
                <h3 className="text-[20px] md:text-[22px] font-extrabold">ОТКРОЙ ПОЛНЫЙ ДОСТУП К ATLABS</h3>
                <div className="mt-4 grid grid-cols-12 gap-4">
                    {[
                        {name:'Базовый', price:'330 ₽', note:'100 токенов', badge:'-17%'},
                        {name:'Стандарт', price:'820 ₽', badge:'-25%'},
                        {name:'Премиум', price:'2 890 ₽', badge:'-29%'},
                    ].map(p=>(
                        <div key={p.name} className="card col-span-12 md:col-span-4 p-5">
                            <div className="flex items-center justify-between">
                                <strong>{p.name}</strong>
                                {p.badge && <span className="rounded-full bg-[var(--primary)]/10 px-2 py-1 text-[12px] text-[var(--primary)]">{p.badge}</span>}
                            </div>
                            <div className="mt-3 text-[28px] font-extrabold">{p.price}</div>
                            {p.note && <div className="text-[12px] text-[var(--muted)]">{p.note}</div>}
                            <button className="mt-4 btn btn-primary rounded-[10px] w-full">Оформить подписку</button>
                        </div>
                    ))}
                </div>
            </section>

            {/* О продукте + таблица арсенала — укороченная версия */}
            <section className="container-1160 px-4 pb-14">
                <h3 className="text-[20px] md:text-[22px] font-extrabold">О ПРОДУКТЕ</h3>
                <p className="mt-2 text-[15px] text-[var(--muted)] max-w-[860px]">
                    Это не просто ИИ, а персональная онлайн-среда. Поможем решать задачи, понимать темы, расти в карьере.
                    Финансы под контролем, психологическая поддержка — в одном кабинете.
                </p>

                <h4 className="mt-6 font-extrabold">АРСЕНАЛ ATLABS:</h4>
                <div className="mt-3 overflow-x-auto">
                    <table className="min-w-[680px] w-full bg-white border" style={{borderColor:'var(--stroke)'}}>
                        <thead className="bg-gray-50">
                        <tr>
                            <th className="border px-3 py-2 text-left" style={{borderColor:'var(--stroke)'}}>ЛАБОРАТОРИЯ</th>
                            <th className="border px-3 py-2 text-left" style={{borderColor:'var(--stroke)'}}>ЧТО УМЕЕТ</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[
                            ['Лаборатория обучения','Готовые подсказки по решениям, мини-конспекты, экзам-планы.'],
                            ['Лаборатория развития','Карьерные траектории, навыки, контроль прогресса.'],
                            ['Лаборатория психологии','Поддержка 24/7: понять себя, снять тревогу, наметить шаги.'],
                            ['Лаборатория финансов','Бюджет, цели, инвест-база — просто и без «воды».'],
                        ].map(([a,b])=>(
                            <tr key={a}>
                                <td className="border px-3 py-2" style={{borderColor:'var(--stroke)'}}>{a}</td>
                                <td className="border px-3 py-2" style={{borderColor:'var(--stroke)'}}>{b}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </>
    );
}
