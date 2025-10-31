// src/components/LabCard.tsx

import Link from "next/link";
import clsx from "clsx";

export type LabCardProps = {
    title: string;
    desc: string;
    icon: string;        // путь к иконке из /public (например: "/atlabs/lab-1.svg")
    cta?: string;        // текст кнопки
    href?: string;       // ссылка кнопки
    className?: string;
};

export default function LabCard({
                                    title,
                                    desc,
                                    icon,
                                    cta = "Подробнее",
                                    href = "#",
                                    className,
                                }: LabCardProps) {
    return (
        <article
            className={clsx(
                "card p-4 flex flex-col gap-3 border border-white/10",
                className
            )}
        >
            <div className="flex items-center gap-3">
                {/* Используем <img>, чтобы не требовать width/height как у next/image */}
                <img
                    src={icon}
                    alt=""
                    className="h-10 w-10 rounded-lg bg-white/70 p-1.5"
                    loading="lazy"
                />
                <h3 className="text-[16px] font-semibold">{title}</h3>
            </div>

            <p className="text-[14px] text-[var(--muted)]">{desc}</p>

            <div className="mt-auto">
                <Link href={href} className="btn btn-secondary">
                    {cta}
                </Link>
            </div>
        </article>
    );
}
