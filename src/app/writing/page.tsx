// src/app/writing/page.tsx
export const metadata = { title: 'Написание работ — планы, конспекты, черновики' };

export default function WritingPage(){
    return (
        <section className="container-1160 px-4 py-10">
            <h1>Написание работ</h1>
            <p className="mt-2 max-w-[780px]">
                Подготовим структуру, тезисы и список источников. Сгенерируем черновик и поможем доработать — честно и без плагиата.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mt-6">
                <div className="card p-5">
                    <h3>Реферат/эссе</h3>
                    <p className="mt-2">План + тезисы + список источников + черновик.</p>
                    <button className="btn-primary mt-4">Собрать план</button>
                </div>
                <div className="card p-5">
                    <h3>Конспект лекции</h3>
                    <p className="mt-2">Сжатие текста, ключевые идеи, вопросы к зачёту.</p>
                    <button className="btn-primary mt-4">Сжать материал</button>
                </div>
            </div>
        </section>
    );
}
