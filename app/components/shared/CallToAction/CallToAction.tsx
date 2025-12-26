import Link from "next/link";

export default function CallToAction({
    text = "",
    link = "#",
}){
    return(
        <div className="cta">
            <Link href={link}>{text}</Link>
        </div>
    )
}