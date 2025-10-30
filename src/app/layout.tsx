import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";

export const metadata: Metadata = {
    title: "AtLabs — AI ассистент",
    description: "Решай задачи, пиши работы и готовься к экзаменам — всё в одном месте.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <Header />
        <main className="mx-auto max-w-6xl px-4 py-8">{children}</main>
        </body>
        </html>
    );
}
