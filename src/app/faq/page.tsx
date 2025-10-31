
export const metadata = { title: 'FAQ — ответы на вопросы' };

import FAQ from '@/components/FAQ';

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
