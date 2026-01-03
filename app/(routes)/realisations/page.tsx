import { projects } from '@/data/realisations/projects'
import './page.scss'

import ProjectCard from "../../components/pages/realisations/ProjectCard/ProjectCard"
import Banner from '@/components/shared/Banner/Banner'

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
          <ProjectCard
            key={project.id}
            project={project}
          />
        ))}
      </section>
    </main>
  )
}