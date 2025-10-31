// src/app/page.tsx
import Image from "next/image";

export default function HomePage() {
    return (
        <main className="bg-[oklch(0.68_0.2_300)] min-h-screen">
            <section className="container mx-auto px-4 py-16">
                {/* Hero */}
                <div className="max-w-3xl mx-auto text-center">
                    <Image
                        src="/brand/logo.svg"
                        alt="StudyFlow"
                        width={140}
                        height={40}
                        className="mx-auto mb-6"
                        priority
                    />

                    {/* Две строки строго, по центру */}
                    <h1 className="font-semibold leading-tight tracking-[-0.01em]">
            <span className="block text-white text-2xl md:text-3xl lg:text-4xl">
              твой персональный
            </span>
                        <span className="block text-white text-3xl md:text-5xl lg:text-6xl">
              AI-ассистент для учебы
            </span>
                    </h1>

                    <p className="mt-6 text-white/85 text-base md:text-lg">
                        Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и
                        проведёт по шагам.
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

                {/* Дальше идут карточки секций/блоки по макету — оставляем как было */}
                {/* TODO: здесь подключаем остальные секции главной по макету */}
            </section>
        </main>
    );
}
