import ServiceCard from "./components/home/Service-card"
import Hero from "./components/home/Hero"
import Missions from "./components/home/Missions"
import Certification from "./components/home/Certification"
import TestimonialCard from "./components/home/Testimonial-card"
import Footer from "./components/layout/Footer"

import "./styles/page.css"

export default function Home() {
  return (
    <>
      <div className="hero-section">
        <Hero/>
      </div>
      <div className="services-section">
        <ServiceCard
          imageSrc="/icons/services/releves-scans-3d.png"
          title="Relevés & Scans 3D"
          description="Relevés manuels ou par scan 3D de bâtiments existants. Nous créons des maquettes BIM fiables à partir de vos édifices pour vos projets."
        />
        <ServiceCard
          imageSrc="\icons\services\modelisation-bim.png"
          title="Modélisation BIM"
          description="Modélisation toute phase et toute discipline à partir de tout plan 2D et de principe, pour des livrables BIM précis et détaillés."
        />
        <ServiceCard
          imageSrc="\icons\services\carnets-de-details.png"
          title="Carnets de détails"
          description="Carnets de détails architecturaux, structurels ou industriels sur-mesure à partir de produits existants ou à concevoir."
        />
        <ServiceCard
          imageSrc="\icons\services\familles-parametriques.png"
          title="Familles paramétriques"
          description="Objets BIM intelligents et paramétriques pour vos maquettes Revit et bibliothèques d’objet. Paramétrage sur-mesure selon vos besoins spécifiques."
        />
        <ServiceCard
          imageSrc="\icons\services\synthese-tce.png"
          title="Synthèse TCE"
          description="Détection automatisée des conflits entre tous corps d’état. Reporting complet et recommandations techniques."
        />
        <ServiceCard
          imageSrc="\icons\services\formations.png"
          title="Formation BIM"
          description="Formations Revit et Navisworks adaptées à votre niveau. En groupe ou coaching individuel pour développer vos compétences BIM."
        />
      </div>
      <div className="mission-section">
        <Missions/>
      </div>
      <div className="certification-section">
        <Certification/>
      </div>
      <div className="testimonial-section">
        <div className="testimonial-title">
          <img src="/" alt="" />
          <h2>Ce qu'ils disent de nous</h2>
        </div>
        <div className="testimonial-content">
          <TestimonialCard
            description="« Dans un lieu adapté et agréable, les supports riches et nombreux ainsi que l’adaptabilité du formateur en fonction des besoin, ont fait de cette formation une réussite »"
            date="18/04/2025"
            name="Luc J."
          />
          <TestimonialCard
            description="« Un grand merci pour votre aide, votre rapidité et la qualité de vos livrables »"
            date="14/06/2025"
            name="Robin C."
          />
          <TestimonialCard
            description="« Nous avions un projet d’extension de notre maison mais les anciens plans n’étaient plus à jour. L’équipe d’InsideBIM a réalisé un relevé précis de l’existant et créé une maquette 3D complète pour nous permettre de visualiser parfaitement notre future extension. »"
            date="01/07/2025"
            name="Maxime G."
          />
        </div>
      </div>
      <div className="footer-section">
        <Footer/>
      </div>
    </>
  )
}