export default function ArsenalTable() {
    return (
        <section className="container-1160" style={{marginTop: 48}}>
            <h2>АРСЕНАЛ StudyFlow:</h2>

            <div className="card p-0" style={{marginTop:12}}>
                <div className="grid" style={{display:"grid", gridTemplateColumns:"280px 1fr"}}>
                    <div className="p-12 muted font-semibold">Лаборатория</div>
                    <div className="p-12 muted font-semibold" style={{borderLeft:"1px solid var(--br)"}}>Что умеет</div>

                    <div className="p-12" style={{borderTop:"1px solid var(--br)"}}>Лаборатория обучения</div>
                    <div className="p-12" style={{borderTop:"1px solid var(--br)", borderLeft:"1px solid var(--br)"}}>
                        Персональная помощь с решениями задач, контрольных и тестов, мини-конспекты и разборы.
                    </div>

                    <div className="p-12" style={{borderTop:"1px solid var(--br)"}}>Лаборатория финансов</div>
                    <div className="p-12" style={{borderTop:"1px solid var(--br)", borderLeft:"1px solid var(--br)"}}>
                        Финансовый советник: бюджет, планирование расходов, советы по накоплениям и инвестициям.
                    </div>

                    <div className="p-12" style={{borderTop:"1px solid var(--br)"}}>Лаборатория развития</div>
                    <div className="p-12" style={{borderTop:"1px solid var(--br)", borderLeft:"1px solid var(--br)"}}>
                        Стратегии роста, карьерные консультации, чек-листы и планы развития.
                    </div>

                    <div className="p-12" style={{borderTop:"1px solid var(--br)"}}>Лаборатория психологии</div>
                    <div className="p-12" style={{borderTop:"1px solid var(--br)", borderLeft:"1px solid var(--br)"}}>
                        Поддержка 24/7: работа с тревогой, стрессом и прокрастинацией. Всё анонимно и безопасно.
                    </div>

                    <div className="p-12" style={{borderTop:"1px solid var(--br)"}}>Комбо</div>
                    <div className="p-12" style={{borderTop:"1px solid var(--br)", borderLeft:"1px solid var(--br)"}}>
                        Все сервисы сразу: учёба, финансы, развитие и психологическая поддержка — личный помощник на каждый день.
                    </div>
                </div>
            </div>
        </section>
    );
}
