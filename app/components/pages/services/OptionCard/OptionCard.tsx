

export default function OptionCard({
    title = "",
    description = ""
}){
    return(
        <div className="option-card">
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}
