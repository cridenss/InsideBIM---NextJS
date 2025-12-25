import "./Banner.css";

export default function Banner({
  title = "",
  description = "",
  imageSrc = "",
}) {
  return (
    <div className="banner">
      <img src={imageSrc} alt={title} className="banner__image" />
      <h1 className="banner__title">{title}</h1>
      <p className="banner__description">{description}</p>
    </div>
  );
}
