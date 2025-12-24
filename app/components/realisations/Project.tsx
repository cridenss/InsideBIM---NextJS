import './Project.css'

export default function Project({
    title = "Titre du projet",
    context = "Contexte du projet",
    mission = "Mission du projet",
    buildingType = "Type du batiment",
    results = "Résultats"
}) {
    return(
        <div className="project">
            <div className="project_gallery">
                
            </div>
            <div className="project_content">
                <h3>{title}</h3>
                <div className='project_content-detail'>
                    <h4>Contexte</h4>
                    <p>{context}</p>
                </div>
                <div className='project_content-detail'>
                    <h4>Mission</h4>
                    <p>{mission}</p>
                </div>
                <div className='project_content-detail'>
                    <h4>Type de bâtiment</h4>
                    <p>{buildingType}</p>
                </div>
                <div className='project_content-detail'>
                    <h4>Résultat</h4>
                    <p>{results}</p>
                </div>
            </div>
        </div>
    )
}