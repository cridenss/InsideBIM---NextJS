import '../homepage/Testimonial-card.css'

export default function TestimonialCard({ 
    description = "Description du témoignage",
    date = "DD/MM/YYYY",
    name = "Name"
}) {
    return(
        <div className="testimonial-card">
            <p>{description}</p>
            <p>{date}</p>
            <p>{name}</p>
        </div>
    )
}