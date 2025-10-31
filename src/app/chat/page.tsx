export default function Chat(){
    return (
        <section className="container-1160 px-4 py-8">
            <div className="card p-4">
                <div className="text-sm opacity-70">Пример задания пользователя</div>
                <div className="mt-3 rounded-md bg-gray-50 p-3 text-[14px]">
                    На рёбрах AB и BC треугольной пирамиды… (текст задачи)
                </div>

                <div className="mt-4 rounded-md bg-white p-3 border" style={{borderColor:'var(--stroke)'}}>
                    <div className="font-semibold">StudyFlow</div>
                    <ol className="mt-2 list-decimal pl-6 text-[14px] space-y-1">
                        <li>Доказательство, что точки P, Q, M, N лежат в одной плоскости…</li>
                        <li>Рассмотрим гомотетию…</li>
                    </ol>
                </div>

                <div className="mt-6">
          <textarea className="w-full rounded-[10px] border p-3" rows={4} placeholder="Напиши StudyFlow"
                    style={{borderColor:'var(--stroke)'}}/>
                    <div className="mt-2 flex justify-end">
                        <button className="btn btn-primary rounded-[10px]">Отправить</button>
                    </div>
                </div>
            </div>
        </section>
    );
}
