// серверный компонент только рендерит каркас и метаданные
export const metadata = { title: 'Решения задач — StudyFlow' };

import SolutionsClient from './SolutionsClient';

export default function SolutionsPage() {
    return (
        <section className="container-1160 px-4 py-8">
            <h1 className="h1 text-[28px] md:text-[36px]">РЕШЕНИЯ ЗАДАЧ</h1>
            <p className="mt-2 max-w-[820px] text-[15px] text-[var(--muted)]">
                Введи условие или прикрепи фото — подготовим аккуратное решение за секунды.
            </p>
            <SolutionsClient />
        </section>
    );
}
