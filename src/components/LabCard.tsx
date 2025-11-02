import Image from 'next/image';

type Props = {
    icon: string;
    title: string;
    desc: string;
    foot: string;
}

export default function LabCard({icon,title,desc,foot}:Props){
    return (
        <article className="card p-5">
            <div className="flex items-start gap-3">
                <Image src={icon} alt="" width={32} height={32}/>
                <div>
                    <h3 className="font-semibold">{title}</h3>
                    <p className="text-[14px] muted">{desc}</p>
                </div>
            </div>
            <div className="mt-3 text-[13px] muted">{foot}</div>
        </article>
    );
}
