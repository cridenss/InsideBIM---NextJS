import Banner from '@/components/pages/services/Banner/Banner'
import Project from '@/components/pages/realisations/Project/Project'
import { projects } from '@/data/realisations/projects'


export default function RealisationsPage() {
  return (
    <main className="realisations-page">
      <section className="realisations-page__banner">
        <Banner
          title="Nos réalisations"
          description="Parce que chaque projet mérite une solution sur mesure, découvrez un aperçu de nos réalisations, conçues pour répondre aux besoins spécifiques de chaque client."
        />
      </section>

      <section className="realisations-page__projects">
        {projects.map((project) => (
          <Project
            key={project.id}
            title={project.title}
            context={project.context}
            mission={project.mission}
            buildingType={project.buildingType}
            results={project.results}
          />
        ))}
      </section>
    </main>
  )
}