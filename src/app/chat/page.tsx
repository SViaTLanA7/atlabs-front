// БЕЗ 'use client' здесь!

import ChatClient from './ChatClient';

export const metadata = {
    title: 'Чат-ассистент — StudyFlow',
    description: 'Задай вопрос, пришли условие — ассистент поможет и подскажет по шагам.',
};

export default function Page() {
    return <ChatClient />;
}
