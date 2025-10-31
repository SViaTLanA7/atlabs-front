// src/components/StepCard.tsx

import Image from "next/image";
import clsx from "clsx";

export type StepCardProps = {
    step: string;          // Номер шага (например, "1", "2", "3")
    title: string;         // Заголовок шага
    text: string;          // Описание
    icon: string;          // Путь к иконке (например, /atlabs/step-1.svg)
    className?: string;    // Дополнительные классы
};

export default function StepCard({
                                     step,
                                     title,
                                     text,
                                     icon,
                                     className,
                                 }: StepCardProps) {
    return (
        <article
            className={clsx(
                "card flex flex-col items-start gap-3 border border-white/10 p-5",
                className
            )}
        >
            <div className="flex items-center gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[--brand] text-white font-semibold text-sm">
                    {step}
                </div>
                <Image
                    src={icon}
                    alt=""
                    width={32}
                    height={32}
                    className="rounded-md bg-white/70 p-1"
                />
            </div>

            <h3 className="text-[16px] font-semibold mt-1">{title}</h3>
            <p className="text-[14px] text-[var(--muted)] leading-relaxed">{text}</p>
        </article>
    );
}
