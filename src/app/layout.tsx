import type { Metadata } from "next";
import "./globals.css";

// ВНИМАНИЕ: только относительные импорты
import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";

export const metadata: Metadata = {
    title: {
        default: "StudyFlow — твой персональный AI-ассистент для учёбы",
        template: "%s — StudyFlow",
    },
    description:
        "Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт по шагам.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <Header />
        {children}
        <Footer />
        </body>
        </html>
    );
}
