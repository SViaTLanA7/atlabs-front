// src/app/pricing/page.tsx
import type { Metadata } from "next";
import Pricing from "../../components/ui/Pricing";

export const metadata: Metadata = {
    title: "Тарифы — StudyFlow",
    description:
        "Выбери удобный план: токены, безлимит или годовой доступ. Первые 100 токенов бесплатно.",
};

export default function PricingPage() {
    return (
        <section className="container-1160 px-4 py-10">
            <h1>Тарифы</h1>
            <div className="mt-6">
                <Pricing />
            </div>
        </section>
    );
}
