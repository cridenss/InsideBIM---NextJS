export default function TrainingCard({
  id = "",
  title = "",
  duration = "",
  location = "",
  description = "",
}) {
  return (
    <div className="training-card">
      <h4 className="training-card__title">{title}</h4>
      
      <div className="training-card__details">
        <div className="training-card__detail">
          <img src="/" alt="" className="training-card__icon" />
          <p className="training-card__text">{duration}</p>
        </div>
        <div className="training-card__detail">
          <img src="/" alt="" className="training-card__icon" />
          <p className="training-card__text">{location}</p>
        </div>
      </div>
      
      <p className="training-card__description">{description}</p>
    </div>
  )
}