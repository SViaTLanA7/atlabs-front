import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const metadata = {
    title: 'StudyFlow',
    description: 'Твой персональный AI-ассистент для учёбы',
};

export default function RootLayout({children}:{children:React.ReactNode}){
    return (
        <html lang="ru">
        <body>
        <Header/>
        <main>{children}</main>
        <Footer/>
        </body>
        </html>
    );
}
