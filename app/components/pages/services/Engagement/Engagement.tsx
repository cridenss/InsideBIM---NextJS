export default function Engagement({
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
