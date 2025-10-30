export default function Solutions(){
    return (
        <section className="container-1160 px-4 py-8">
            <h1 className="h1 text-[36px]">РЕШЕНИЯ ЗАДАЧ</h1>
            <p className="mt-2 max-w-[720px] text-[15px] text-[var(--muted)]">
                Введи условие или прикрепи фото — подготовим решение за секунды.
            </p>
            <div className="mt-6 grid grid-cols-12 gap-6">
                <div className="col-span-12 lg:col-span-8">
                    <div className="card p-4 h-[220px]"></div>
                    <button className="mt-4 btn btn-primary rounded-[10px]">Получить решение</button>
                    <div className="mt-2 text-sm opacity-70">5 токенов ≈ 1 задача</div>
                </div>
                <aside className="col-span-12 lg:col-span-4">
                    <div className="card p-4">
                        <h4 className="font-semibold">Подписка с безлимитом токенов</h4>
                        <ul className="mt-2 list-disc pl-5 text-[14px] space-y-1">
                            <li>Решай без ограничений</li>
                            <li>Поддержка по 160+ предметам</li>
                            <li>Доступ к базе готовых решений</li>
                        </ul>
                    </div>
                </aside>
            </div>
        </section>
    );
}
