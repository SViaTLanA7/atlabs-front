// src/app/layout.tsx
import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/Header';

export const metadata: Metadata = {
    title: 'AtLabs — ваш персональный AI-ассистент',
    description: 'Решения задач, конспекты и помощь с учёбой в одном месте.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body>
        <Header />
        <main>{children}</main>
        </body>
        </html>
    );
}
