import SolutionsClient from '@/components/solutions/SolutionsClient';

export const metadata = { title: 'Решения задач — StudyFlow' };

export default function SolutionsPage(){
    return (
        <section className="container-1160 py-8">
            <h1 className="h1">РЕШЕНИЯ ЗАДАЧ</h1>
            <p className="mt-2 max-w-[720px] text-[15px] text-[var(--muted)]">
                Введи условие или прикрепи фото — подготовим аккуратное решение за секунды.
            </p>

            <div className="mt-6 grid gap-16 lg:grid-cols-[1fr_360px]">
                <SolutionsClient />

                <aside className="card p-5 h-fit">
                    <h4 className="font-semibold">Подписка с безлимитом токенов</h4>
                    <ul className="list mt-3 text-[14px]">
                        <li>Решай без ограничений</li>
                        <li>Поддержка по 160+ предметам</li>
                        <li>Доступ к базе готовых решений</li>
                    </ul>
                    <a href="/pricing" className="btn btn-primary mt-4 w-full">Перейти к тарифам</a>
                </aside>
            </div>
        </section>
    );
}
