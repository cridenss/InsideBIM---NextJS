import "./EngagementCard.scss"

export default function EngagementCard({
    id = "",
    imageSrc = "",
    description = ""
}){
    return(
        <div className="engagement-card">
            <img src={imageSrc} alt="" />
            <p>{description}</p>
        </div>
    )
}