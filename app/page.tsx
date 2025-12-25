import ServiceCard from "./components/home/ServiceCard/Service-card";
import Hero from "./components/home/Hero/Hero";
import Missions from "./components/home/Mission/Mission";
import Certification from "./components/home/Certification/Certification";
import ReviewCard from "./components/home/ReviewCard/Review-card";
import { services } from "../data/home/services";
import { reviews } from "../data/home/reviews";
import "./styles/page.css";

export default function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <Hero />
      </section>

      <section className="home__services">
        <div className="home__services-grid">
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

      <section className="home__mission">
        <Missions />
      </section>

      <section className="home__certification">
        <Certification />
      </section>

      <section className="home__reviews">
        <div className="home__reviews-header">
          <h2 className="home__reviews-title">Ce qu'ils disent de nous</h2>
        </div>
        <div className="home__reviews-grid">
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
