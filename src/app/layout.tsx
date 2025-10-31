// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "StudyFlow — твой персональный AI-ассистент каждый день",
    description:
        "Решай задачи, принимай решения и развивайся быстрее. StudyFlow — единый кабинет: учёба, финансы, карьера, психология.",
    icons: [
        { rel: "icon", url: "/brand/favicon.svg" },
    ],
    openGraph: {
        title: "StudyFlow",
        description: "Единый AI-ассистент для учёбы и жизни",
        images: [{ url: "/brand/favicon.svg" }],
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    // Чтобы быстро сменить гамму: добавь на html класс "theme-violet" или "theme-teal"
    return (
        <html lang="ru" className="theme-indigo">
        <body>{children}</body>
        </html>
    );
}
