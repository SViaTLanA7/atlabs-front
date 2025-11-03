// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

import Header from "../components/ui/Header";
import Footer from "../components/ui/Footer";
import ScrollFX from "../components/ScrollFX";

export const metadata: Metadata = {
    title: {
        default: "StudyFlow — твой персональный AI-ассистент для учёбы",
        template: "%s — StudyFlow",
    },
    description:
        "Решай задачи, пиши конспекты и готовься к сессии быстрее — StudyFlow подскажет и проведёт по шагам.",
    icons: {
        icon: "/favicon.ico",
        apple: "/apple-touch-icon.png",
    },
    manifest: "/site.webmanifest",
};

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="ru">
        <body>
        <Header />
        {/* Плавный скролл + лёгкий параллакс для элементов с data-parallax */}
        <ScrollFX />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
