'use client';

import clsx from 'clsx';
import { useState } from 'react';

const tabs = [
    { id:'study',  label:'Помощь с учёбой' },
    { id:'skills', label:'Карьера и навыки' },
    { id:'money',  label:'Финансы' },
];

export default function HeroTabs() {
    const [active, setActive] = useState('study');

    return (
        <div className="mt-4 flex flex-wrap items-center justify-center gap-2">
            {tabs.map(t => (
                <button key={t.id}
                        onClick={()=>setActive(t.id)}
                        className={clsx(
                            'px-3 py-1.5 rounded-full text-[13px] border',
                            active===t.id ? 'bg-[--brand] text-white border-[--brand]' : 'bg-white border-[var(--br)]'
                        )}>
                    {t.label}
                </button>
            ))}
        </div>
    );
}
