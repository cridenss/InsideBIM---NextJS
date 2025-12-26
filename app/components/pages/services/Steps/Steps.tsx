export default function Steps({
    id = "",
    title = "",
    description = "",
}){
    return(
        <div className="steps">
            <p>{id}</p>
            <h4>{title}</h4>
            <p>{description}</p>
        </div>
    )
}
