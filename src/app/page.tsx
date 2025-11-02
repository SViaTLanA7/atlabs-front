import Image from 'next/image';
import Link from 'next/link';
import Section from '@/components/ui/Section';
import HeroTabs from '@/components/HeroTabs';
import LabCard from '@/components/LabCard';

export default function HomePage(){
    return (
        <>
            {/* HERO */}
            <Section pad="lg">
                <div className="grid md:grid-cols-2 gap-8 items-center">
                    <div>
                        <h1 className="h1 text-[36px] md:text-[48px] leading-[1.05]">
                            твой персональный<br/>
                            <span className="block">AI-ассистент для учёбы</span>
                        </h1>
                        <p className="mt-3 max-w-[720px] text-[15px] muted">
                            Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт по шагам.
                        </p>
                        <div className="mt-6 flex items-center gap-3">
                            <Link href="/register" className="btn-primary">Попробовать бесплатно</Link>
                            <a href="#how" className="btn-outline">Как это работает</a>
                        </div>
                        <HeroTabs/>
                    </div>

                    <div className="relative">
                        <Image src="/atlabs/hero-student.svg" alt="" width={520} height={420} className="mx-auto"/>
                    </div>
                </div>
            </Section>

            {/* ЧЕТЫРЕ ЛАБОРАТОРИИ */}
            <Section title="ЧЕТЫРЕ ЛАБОРАТОРИИ — ОДИН ЛИЧНЫЙ КАБИНЕТ">
                <div className="mt-4 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
                    <LabCard icon="/atlabs/lab-1.svg" title="Лаборатория обучения" desc="Готовые мини-конспекты и разборы" foot="Понять за урок"/>
                    <LabCard icon="/atlabs/lab-2.svg" title="Лаборатория психологии" desc="Фокус, помодоро, анти-прокрастинация" foot="Включить режим"/>
                    <LabCard icon="/atlabs/lab-3.svg" title="Лаборатория развития" desc="План обучения и навыков" foot="Ежедневка"/>
                    <LabCard icon="/atlabs/lab-4.svg" title="Лаборатория финансов" desc="Учимся вести финансы студента" foot="Ежедневка"/>
                </div>
            </Section>

            {/* КАК ЭТО РАБОТАЕТ */}
            <Section id="how" title="КАК ЭТО РАБОТАЕТ">
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                    <div className="card p-5 flex items-start gap-3">
                        <Image src="/atlabs/step-1.svg" alt="" width={32} height={32}/>
                        <div><div className="font-semibold">Вводишь условие</div><div className="muted text-sm">Текстом или фото</div></div>
                    </div>
                    <div className="card p-5 flex items-start gap-3">
                        <Image src="/atlabs/step-2.svg" alt="" width={32} height={32}/>
                        <div><div className="font-semibold">Мы решаем по шагам</div><div className="muted text-sm">Промежуточные расчёты</div></div>
                    </div>
                    <div className="card p-5 flex items-start gap-3">
                        <Image src="/atlabs/step-3.svg" alt="" width={32} height={32}/>
                        <div><div className="font-semibold">Даём итог + пояснение</div><div className="muted text-sm">Краткое объяснение</div></div>
                    </div>
                </div>
            </Section>
        </>
    );
}
