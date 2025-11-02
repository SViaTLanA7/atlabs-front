// src/app/solutions/page.tsx
export const metadata = { title: 'Решения задач — AtLabs' };

import SolutionsClient from './SolutionsClient'; // <- правильный относительный импорт

export default function SolutionsPage() {
    return <SolutionsClient />;
}
