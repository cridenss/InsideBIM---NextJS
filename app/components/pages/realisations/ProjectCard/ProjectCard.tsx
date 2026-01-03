import ProjectGallery from "../ProjectGallery/ProjectGallery";
import { Project } from "@/data/realisations/projects";

import "./ProjectCard.scss";

interface ProjectCardProps {
    project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {

    return (
        <div className="project-card">
            <div className="project-caroussel">
                <ProjectGallery
                    images={project.images}
                />
            </div>
            <div className="project__content">
                <h3 className="project__title">{project.title}</h3>

                <div className="project__detail">
                    <h4 className="project__detail-title">Contexte</h4>
                    <p className="project__detail-text">{project.context}</p>
                </div>

                <div className="project__detail">
                    <h4 className="project__detail-title">Mission</h4>
                    <p className="project__detail-text">{project.mission}</p>
                </div>

                <div className="project__detail">
                    <h4 className="project__detail-title">Type de bâtiment</h4>
                    <p className="project__detail-text">{project.buildingType}</p>
                </div>

                <div className="project__detail">
                    <h4 className="project__detail-title">Résultat</h4>
                    <p className="project__detail-text">{project.results}</p>
                </div>
            </div>
        </div>
    );
}
