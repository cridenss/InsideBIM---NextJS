import "./Project.css";

export default function Project({
  title = "Titre du projet",
  context = "Contexte du projet",
  mission = "Mission du projet",
  buildingType = "Type du batiment",
  results = "Résultats",
}) {
  return (
    <div className="project">
      <div className="project__gallery"></div>

      <div className="project__content">
        <h3 className="project__title">{title}</h3>

        <div className="project__detail">
          <h4 className="project__detail-title">Contexte</h4>
          <p className="project__detail-text">{context}</p>
        </div>

        <div className="project__detail">
          <h4 className="project__detail-title">Mission</h4>
          <p className="project__detail-text">{mission}</p>
        </div>

        <div className="project__detail">
          <h4 className="project__detail-title">Type de bâtiment</h4>
          <p className="project__detail-text">{buildingType}</p>
        </div>

        <div className="project__detail">
          <h4 className="project__detail-title">Résultat</h4>
          <p className="project__detail-text">{results}</p>
        </div>
      </div>
    </div>
  );
}
