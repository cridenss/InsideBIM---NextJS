import { ServiceCard, Hero, Mission, Certification, ReviewCard } from "./components/home";
import { homeServices, homeReviews } from "../data/home";

import "./styles/page.css";

export default function Home() {
  return (
    <main className="home">
      <section className="home__hero">
        <Hero />
      </section>

      <section className="home__services">
        <div className="home__services-grid">
          {homeServices.map((homeService) => (
            <ServiceCard
              key={homeService.id}
              imageSrc={homeService.imageSrc}
              title={homeService.title}
              description={homeService.description}
            />
          ))}
        </div>
      </section>

      <section className="home__mission">
        <Mission />
      </section>

      <section className="home__certification">
        <Certification />
      </section>

      <section className="home__reviews">
        <div className="home__reviews-header">
          <h2 className="home__reviews-title">Ce qu'ils disent de nous</h2>
        </div>
        <div className="home__reviews-grid">
          {homeReviews.map((homeReview) => (
            <ReviewCard
              key={homeReview.id}
              description={homeReview.description}
              date={homeReview.date}
              name={homeReview.name}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
