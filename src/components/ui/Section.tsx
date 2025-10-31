// src/components/ui/Section.tsx
import { PropsWithChildren } from "react";

type SectionProps = PropsWithChildren<{
    id?: string;
    title?: string;
    subtitle?: string;
    className?: string;
}>;

export default function Section({ id, title, subtitle, className, children }: SectionProps) {
    return (
        <section id={id} className={`py-12 md:py-16 ${className ?? ""}`}>
            <div className="container mx-auto px-4">
                {(title || subtitle) && (
                    <header className="mb-6 md:mb-8">
                        {title && (
                            <h2 className="text-2xl md:text-3xl font-semibold tracking-[-0.01em] text-white">
                                {title}
                            </h2>
                        )}
                        {subtitle && (
                            <p className="mt-2 text-white/80 text-sm md:text-base">{subtitle}</p>
                        )}
                    </header>
                )}
                {children}
            </div>
        </section>
    );
}
