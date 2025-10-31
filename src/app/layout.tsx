// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

// src/app/layout.tsx (фрагмент)
export const metadata = {
    title: "StudyFlow — твой персональный AI-ассистент для учебы",
    description:
        "Решай задачи, готовь конспекты и учись быстрее. StudyFlow — AI-ассистент, который помогает каждый день.",
    openGraph: {
        title: "StudyFlow — твой персональный AI-ассистент для учебы",
        description:
            "Решай задачи, готовь конспекты и учись быстрее. StudyFlow — AI-ассистент, который помогает каждый день.",
        url: "https://<твой-домен>",
        siteName: "StudyFlow",
        images: [
            {
                url: "/atlabs/studyflow-banner.png",
                width: 1280,
                height: 640,
                alt: "StudyFlow",
            },
        ],
        type: "website",
    },
    twitter: {
        card: "summary_large_image",
        title: "StudyFlow — твой персональный AI-ассистент для учебы",
        description:
            "Решай задачи, готовь конспекты и учись быстрее. StudyFlow — AI-ассистент, который помогает каждый день.",
        images: ["/atlabs/studyflow-banner.png"],
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
