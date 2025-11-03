export default function WhyList() {
    const items = [
        "Не просто AI, а персональные сервисы с живым подходом.",
        "Комплексное решение задач: учёба, финансы, развитие и жизненные вопросы.",
        "Готовые планы, материалы и консультации — всё в одном месте.",
        "Подходит студентам, профессионалам и всем, кто хочет двигаться вперёд.",
        "Экономия времени: доступ 24/7 в одном личном кабинете."
    ];

    return (
        <section className="container-1160" style={{marginTop:48}}>
            <h2>ПОЧЕМУ ВЫБИРАЮТ StudyFlow:</h2>
            <ul className="card" style={{padding:0, marginTop:12}}>
                {items.map((t, idx) => (
                    <li key={idx}
                        style={{
                            display:"flex",
                            alignItems:"center",
                            gap:12,
                            padding:"12px 16px",
                            borderTop: idx===0 ? "none" : "1px solid var(--br)"
                        }}>
                        <span aria-hidden>✅</span>
                        <span>{t}</span>
                    </li>
                ))}
            </ul>
        </section>
    );
}
