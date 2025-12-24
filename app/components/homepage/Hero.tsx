import '../homepage/Hero.css'

export default function Hero() {
    return(
        <div className="hero">
            <div className='hero-text'>
                <h1>Expertise et accompagnement BIM</h1>
                <p>Notre expertise BIM accompagne architectes, bureaux d’études et entreprises du bâtiment dans leur transition et optimisation BIM avec des solutions sur-mesure et une expertise technique reconnue.</p>
                <button>Découvrir nos services</button>
            </div>
            <div className='hero-media'>
                <img src="/images/hero.png" alt="/" />
            </div>
        </div>
    )
}