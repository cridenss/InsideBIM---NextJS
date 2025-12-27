import { Banner, OptionCard, Steps, Who, Engagement } from "@/components/pages/services"
import { servicesBanner, servicesOptions, servicesSteps, servicesWho, servicesEngagements, type ServiceKey } from "@/data/services";
import "./ServicePageLayout.scss";

interface ServicePageLayoutProps {
    serviceKey: ServiceKey
}

export default function ServicePageLayout({serviceKey}: ServicePageLayoutProps){
  const banner = servicesBanner[serviceKey];
  const options = servicesOptions[serviceKey];
  const steps = servicesSteps[serviceKey];
  const who = servicesWho[serviceKey];
  const engagements = servicesEngagements[serviceKey];

  return (
    <main className="service-page">
      <section className="service-page__banner">
        <Banner
          title={banner.title}
          description={banner.description}
          imageSrc={banner.imageSrc}
        />
      </section>
      <section className="service-page__engagements">
        {engagements.map((engagement) => (
          <Engagement
            key={engagement.id}
            description={engagement.description}
            imageSrc={engagement.imageSrc}
          />
        ))}
      </section>
      <section className="service-page__options">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
          />
        ))}
      </section>
      <section className="service-page__steps">
        {steps.map((step) => (
          <Steps
            key={step.id}
            id={step.id}
            title={step.title}
            description={step.description}
          />
        ))}
      </section>
      <section className="service-page__who">
        <Who description={who.description} imageSrc={who.imageSrc} />
      </section>
    </main>
  );
}