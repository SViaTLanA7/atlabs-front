import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: {
        default: "StudyFlow",
        template: "%s — StudyFlow",
    },
    description:
        "Твой персональный AI-ассистент для учёбы: решения задач, конспекты, подготовка к сессии.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <Header />
        {children}
        </body>
        </html>
    );
}
