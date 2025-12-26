import { CallToAction } from "@/components/shared";

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
                <CallToAction text="Demander un devis" link="/contact"/>
            </div>
        </div>
    )
}
