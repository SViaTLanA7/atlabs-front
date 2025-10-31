// src/components/ui/Section.tsx
import clsx from "clsx";
import type { ReactNode } from "react";

type PadSize = "sm" | "md" | "lg";

export type SectionProps = {
    id?: string;
    title?: string;
    subtitle?: string;
    /** Управляет вертикальными отступами секции */
    pad?: PadSize;
    className?: string;
    children?: ReactNode;
};

const padToClasses: Record<PadSize, string> = {
    sm: "py-6 md:py-8",
    md: "py-8 md:py-12",
    lg: "py-12 md:py-16",
};

export default function Section({
                                    id,
                                    title,
                                    subtitle,
                                    pad = "md",
                                    className,
                                    children,
                                }: SectionProps) {
    return (
        <section id={id} className={clsx("container-1160 px-4", padToClasses[pad], className)}>
            {(title || subtitle) && (
                <header className="mb-4">
                    {title && <h2 className="h2">{title}</h2>}
                    {subtitle && (
                        <p className="mt-1 text-[15px] text-[var(--muted)]">{subtitle}</p>
                    )}
                </header>
            )}
            {children}
        </section>
    );
}
