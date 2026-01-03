import './Mission.scss'

export default function Mission() {
    return(
        <div className="mission">
            <div className="mission__media">
                <img src="/assets/illustrations/mission.png" alt="" />
            </div>
            <div className="mission__text">
                <h2>Notre Mission</h2>
                <p>Précision - Accompagnement - Transmission</p>
                <p>Nous croyons que le BIM ne doit pas être réservé aux grandes entreprises. Notre mission est de démocratiser l’accès aux technologies BIM en proposant des solutions adaptées aux petites et moyennes entreprises. <br />Avec une expertise technique reconnue et une approche pédagogique, nous vous accompagnons dans votre transformation digitale à votre rythme et selon vos moyens.</p>
            </div>
        </div>
    )
}