export default function Who({
    description = "",
    imageSrc = "/",
}){
    return(
        <div className="who">
            <div className="who__media">
                <img src={imageSrc} alt="" />
            </div>
            <div className="who__content">
                <h3>Pour Qui ?</h3>
                <p>{description}</p>
                <button>Demander un devis</button>
            </div>
        </div>
    )
}
