// src/components/StepCard.tsx
import Image from "next/image";

type StepCardProps = {
    icon: string;
    title: string;
    text: string;
};

export default function StepCard({ icon, title, text }: StepCardProps) {
    return (
        <div className="rounded-2xl border border-white/15 bg-white/6 backdrop-blur p-4 md:p-5">
            <div className="flex items-center gap-3">
                <Image src={icon} alt="" width={40} height={40} />
                <div className="font-semibold text-white">{title}</div>
            </div>
            <p className="mt-3 text-sm text-white/80">{text}</p>
        </div>
    );
}
