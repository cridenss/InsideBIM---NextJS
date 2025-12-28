import Link from "next/link";

export default function PostCard({
    id="",
    title= "",
    imageSrc= "",
    excerpt="",
    slug="#"
}) {
    return(
        <div className="post-card">
            <img src={imageSrc} alt="" />
            <div className="post-card__content">
                <h4>{title}</h4>
                <p>{excerpt}</p>
                <Link href={slug}>En savoir plus</Link>
            </div>
        </div>
    )
}