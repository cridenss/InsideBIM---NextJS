import "./Banner.css";

export default function Banner({ title = "", description = "" }) {
  return (
    <div className="banner">
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}
