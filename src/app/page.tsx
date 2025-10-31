import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import HeroTabs from '@/components/HeroTabs';

export default function HomePage() {
    return (
        <>
            <Header/>

            {/* HERO */}
            <section className="container-1160 px-4 pt-8 md:pt-12 pb-4 md:pb-6 text-center">
                <h1 className="h1 text-[36px] md:text-[44px] leading-[1.12]">
                    твой персональный<br/>
                    <span className="block">AI-ассистент для учёбы</span>
                </h1>

                <p className="mt-3 max-w-[860px] mx-auto text-[15px] text-[var(--muted)]">
                    Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт по шагам.
                </p>

                <div className="mt-6 flex items-center justify-center gap-3">
                    <Link href="/solutions" className="btn-primary rounded-[12px] py-2.5">Попробовать бесплатно</Link>
                    <a href="#how" className="btn-outline rounded-[12px] py-2.5">Как это работает</a>
                </div>

                <HeroTabs/>
            </section>

            {/* ЛАБОРАТОРИИ */}
            <section className="container-1160 px-4 py-6 md:py-8">
                <h2 className="section-title">ЧЕТЫРЕ ЛАБОРАТОРИИ — ОДИН ЛИЧНЫЙ КАБИНЕТ</h2>

                <div className="mt-5 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
                    <Lab icon="/atlabs/lab-1.svg" title="Лаборатория обучения"
                         desc="Готовые мини-конспекты и разборы" foot="Понять за урок" />
                    <Lab icon="/atlabs/lab-2.svg" title="Лаборатория психологии"
                         desc="Фокус, помодоро, анти-прокрастинация" foot="Включить режим" />
                    <Lab icon="/atlabs/lab-3.svg" title="Лаборатория развития"
                         desc="План обучения и навыков" foot="Ежедневка" />
                    <Lab icon="/atlabs/lab-4.svg" title="Лаборатория финансов"
                         desc="Учимся вести финансы студента" foot="Ежедневка" />
                </div>
            </section>

            {/* КАК ЭТО РАБОТАЕТ */}
            <section id="how" className="container-1160 px-4 py-8 md:py-10">
                <h2 className="section-title">КАК ЭТО РАБОТАЕТ</h2>
                <div className="mt-5 grid gap-4 md:grid-cols-3">
                    <Step n="1" title="Загрузи условие" text="Текст, фото, файл — как удобно." />
                    <Step n="2" title="Получай разбор" text="Решение по шагам и мини-конспект." />
                    <Step n="3" title="Сохрани результат" text="В историю и в избранное." />
                </div>
            </section>

            {/* Подвал уже есть в layout — оставляю без дубликатов */}
        </>
    );
}

function Lab({icon, title, desc, foot}:{icon:string; title:string; desc:string; foot:string}) {
    return (
        <article className="card p-5 hover:shadow-md transition">
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

function Step({n, title, text}:{n:string; title:string; text:string}) {
    return (
        <div className="card p-5">
            <div className="text-[12px] font-semibold opacity-60">Шаг {n}</div>
            <h3 className="mt-1 font-semibold">{title}</h3>
            <p className="mt-1 text-[14px] opacity-70">{text}</p>
        </div>
    );
}
