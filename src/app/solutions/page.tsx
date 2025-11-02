import type { Metadata } from "next";
import SolutionsClient from "./SolutionsClient"; // ВАЖНО: относительный путь

export const metadata: Metadata = {
    title: "Решения задач — StudyFlow",
    description:
        "Введи условие или прикрепи фото — подготовим аккуратное решение за секунды.",
};

export default function SolutionsPage() {
    return <SolutionsClient />;
}
