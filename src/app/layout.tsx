// src/app/layout.tsx
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Inter } from 'next/font/google';

const inter = Inter({
    subsets: ['latin', 'cyrillic'],
    weight: ['400', '500', '700', '800'],
    display: 'swap',
});

export const metadata = {
    title: 'AtLabs — твой персональный AI-ассистент',
    description:
        'Учёба, финансы, карьера и развитие — готовые решения и консультации. Ответы за секунды.',
    metadataBase: new URL('https://example.com'),
    openGraph: {
        title: 'AtLabs — твой персональный AI-ассистент',
        description:
            'Учёба, финансы, карьера и развитие — готовые решения и консультации.',
        images: ['/og.png'],
    },
    icons: {
        icon: '/favicon.ico',
    },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="ru">
        <body className={inter.className}>
        <Header />
        <main>{children}</main>
        <Footer />
        </body>
        </html>
    );
}
