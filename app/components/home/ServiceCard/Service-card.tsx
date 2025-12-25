import './Service-card.css'

export default function ServiceCard({ 
    imageSrc = "/", 
    imageAlt = "icon",
    title = "Titre par défaut",
    description = "Description du service",
    link = "#",
    linkText = "En savoir plus"
}) {
    return(
        <div className="service-card">
            <img src={imageSrc} alt={imageAlt} />
            <h4>{title}</h4>
            <p>{description}</p>
            <a href={link}>{linkText}</a>
        </div>
    )
}