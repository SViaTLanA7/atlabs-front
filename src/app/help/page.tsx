// src/app/help/page.tsx
export const metadata = { title: 'Помощь с контрольной — подготовка и разбор' };

export default function HelpPage(){
    return (
        <section className="container-1160 px-4 py-10">
            <h1>Помощь с контрольной</h1>
            <p className="mt-2 max-w-[760px]">
                Разберём формат, соберём шпаргалку (без нарушений), подготовим план решения и типовые ловушки.
            </p>
            <div className="card p-5 mt-6">
                <label className="text-sm">Вставь условие или прикрепи фото задачи</label>
                <textarea className="mt-2 w-full border rounded-[10px] p-3" rows={5} placeholder="Условие задачи..." />
                <div className="mt-3 flex gap-3">
                    <button className="btn-primary">Подготовить разбор</button>
                    <button className="border rounded-[10px] px-5">Прикрепить фото</button>
                </div>
            </div>
        </section>
    );
}
