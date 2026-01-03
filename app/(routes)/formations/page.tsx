import EngagementCard from "@/components/pages/formations/EngagementCard/EngagementCard"
import TrainingCard from "@/components/pages/formations/TrainingCard/TrainingCard"
import Banner from "@/components/shared/Banner/Banner"
import { trainingCards } from "@/data/formations/trainingCards"
import { trainingEngagements } from "@/data/formations/traningEngagements"

export default function Formations() {
    return (
        <main className="training-page">
            <section className="training-page__banner">
                <Banner
                    title="Formations"
                    description="Du débutant complet au perfectionnement avancé, nos formations BIM personnalisées vous accompagnent dans votre montée en compétences BIM. Revit Architecture, Structure, MEP ou Navisworks."
                />
            </section>

            <section className="training-page__engagements">
                {trainingEngagements.map((engagement) => (
                    <EngagementCard
                        key={engagement.id}
                        imageSrc={engagement.imageSrc}
                        description={engagement.description}
                        
                    />
                ))}
            </section>

            <section className="training-page__programs">
                {trainingCards.map((trainingCard) => (
                    <TrainingCard
                        key={trainingCard.id}
                        title={trainingCard.title}
                        duration={trainingCard.duration}
                        location={trainingCard.location}
                        description={trainingCard.description}
                    />
                ))}
            </section>
        </main>
    )
}