// src/components/LabCard.tsx
import Image from "next/image";

type LabCardProps = {
    icon: string;
    title: string;
    caption: string;
    cta?: string;
};

export default function LabCard({ icon, title, caption, cta }: LabCardProps) {
    return (
        <div className="rounded-2xl border border-white/15 bg-white/6 backdrop-blur p-4 md:p-5">
            <div className="flex items-center gap-3">
                <Image src={icon} alt="" width={44} height={44} />
                <div>
                    <div className="font-semibold text-white">{title}</div>
                    <div className="text-xs text-white/70">{caption}</div>
                </div>
            </div>
            {cta && (
                <button className="mt-4 inline-flex rounded-xl bg-white/10 px-4 py-2 text-sm text-white hover:bg-white/15 transition">
                    {cta}
                </button>
            )}
        </div>
    );
}
