// src/app/faq/page.tsx
import type { Metadata } from "next";
import FAQ from "../../components/ui/FAQ";

export const metadata: Metadata = {
    title: "FAQ — ответы на вопросы",
};

export default function FAQPage() {
    return (
        <section className="container-1160 px-4 py-10">
            <h1>FAQ</h1>
            <div className="mt-6">
                <FAQ />
            </div>
        </section>
    );
}
