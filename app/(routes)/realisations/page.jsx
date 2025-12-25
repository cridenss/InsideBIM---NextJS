import Banner from '../../components/shared/banner'
import Project from '../../components/realisations/Project'
import { projects } from '../../../data/projects'

export default function Realisations() {
  return (
    <main className='realisations-page'>
      <section className="banner-section">
        <Banner
          title = "Nos réalisations"
          description = "Parce que chaque projet mérite une solution sur mesure, découvrez un aperçu de nos réalisations, conçues pour répondre aux besoins spécifiques de chaque client."
        />
      </section>
      <section className="projects-section">
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
  );
}