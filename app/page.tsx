import ServiceCard from "./components/home/Service-card";
import Hero from "./components/home/Hero";
import Missions from "./components/home/Missions";
import Certification from "./components/home/Certification";
import ReviewCard from "./components/home/Review-card";
import { services } from "../data/services";
import { reviews } from "../data/reviews";
import "./styles/page.css";

export default function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <Hero />
      </section>

      <section className="services-section">
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              imageSrc={service.imageSrc}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      <section className="mission-section">
        <Missions />
      </section>

      <section className="certification-section">
        <Certification />
      </section>

      <section className="reviews-section">
        <div className="reviews-header">
          <h2>Ce qu'ils disent de nous</h2>
        </div>
        <div className="reviews-grid">
          {reviews.map((review) => (
            <ReviewCard
              key={review.id}
              description={review.description}
              date={review.date}
              name={review.name}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
