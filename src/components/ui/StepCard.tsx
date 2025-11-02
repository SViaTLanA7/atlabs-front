import Image from "next/image";
import Link from "next/link";

type Props = {
    icon: string;
    title: string;
    text: string;
    cta?: { href: string; label: string };
};

export default function StepCard({ icon, title, text, cta }: Props) {
    return (
        <article className="card step-card">
            <div className="step-head">
                <Image src={icon} alt="" width={60} height={42} />
            </div>
            <div className="step-title">{title}</div>
            <p className="step-text">{text}</p>
            {cta && (
                <Link href={cta.href} className="step-cta">
                    {cta.label}
                </Link>
            )}
        </article>
    );
}
