import { ReactNode } from 'react';

export default function Section({id, title, pad='md', children}:{id?:string; title?:string; pad?:'sm'|'md'|'lg'; children:ReactNode}){
    const padCls = pad==='lg' ? 'py-10' : pad==='sm' ? 'py-4' : 'py-6';
    return (
        <section id={id} className={`container-1160 px-4 ${padCls}`}>
            {title && <h2 className="h2 text-[26px] md:text-[28px]">{title}</h2>}
            {children}
        </section>
    );
}
