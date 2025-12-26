import './ReviewCard.css'

export default function ReviewCard({ 
    description = "Description du témoignage",
    date = "DD/MM/YYYY",
    name = "Name"
}) {
    return(
        <div className="review-card">
            <p>{description}</p>
            <p>{date}</p>
            <p>{name}</p>
        </div>
    )
}