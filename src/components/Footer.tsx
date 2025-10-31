// src/components/Footer.tsx
export default function Footer(){
    const cols = [
        { title:'AI-сервисы', items:['Помощь с учёбой','Финансовый консультант','Карьерный коучинг','Психологическая поддержка'] },
        { title:'Экосистема', items:['Помощь с учёбой','Финансовый консультант','Карьерный коучинг','Психологическая поддержка'] },
        { title:'О компании', items:['Главная','Как это работает','Тарифы','Отзывы','FAQ'] },
    ];

    return (
        <footer className="mt-14 bg-white border-t" style={{borderColor:'var(--stroke)'}}>
            <div className="container-1160 grid grid-cols-12 gap-8 px-4 py-10">
                <div className="col-span-12 md:col-span-3">
                    <h4 className="mb-2 font-semibold">Контакты</h4>
                    <div className="space-y-1 text-[14px]">
                        <a href="#">Telegram</a>
                        <a href="#">VK</a>
                        <a href="tel:+79991234567">+7 (999) 123-45-67</a>
                        <a href="mailto:support@atlabs.ai">support@atlabs.ai</a>
                    </div>
                </div>

                {cols.map(block=>(
                    <div key={block.title} className="col-span-12 md:col-span-3">
                        <h4 className="mb-2 font-semibold">{block.title}</h4>
                        <ul className="space-y-1 text-[14px]">
                            {block.items.map(x=><li key={x}><a href="#">{x}</a></li>)}
                        </ul>
                    </div>
                ))}

                <div className="col-span-12 text-[12px] opacity-70">© 2025 StudyFlow. Все права защищены.</div>
            </div>
        </footer>
    );
}
