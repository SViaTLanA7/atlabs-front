// src/app/pricing/page.tsx
import type { Metadata } from "next";
import Pricing from "@/components/ui/Pricing";

export const metadata: Metadata = {
    title: "Тарифы — StudyFlow",
    description:
        "Выбери удобный план: токены, безлимит или годовой доступ. Мгновенный доступ после оплаты.",
};

export default function PricingPage() {
    return (
        <main className="container-1160 px-4 py-8">
            <h1 className="h1 text-[32px]">ТАРИФЫ</h1>
            <p className="mt-2 text-[15px] text-[var(--muted)]">
                Начни с базового плана и переходи на подписку в любой момент.
            </p>
            <div className="mt-6">
                <Pricing />
            </div>
        </main>
    );
}
