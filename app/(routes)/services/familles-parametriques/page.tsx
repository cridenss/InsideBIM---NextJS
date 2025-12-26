import { Banner, OptionCard, Steps, Who } from "@/components/pages/services"
import { servicesBanner, servicesOptions, servicesSteps, servicesWho } from "@/data/services";

export default function CarnetsDeDetails() {
  const page = "familles-parametriques";

  const banner = servicesBanner[page];
  const options = servicesOptions[page];
  const steps = servicesSteps[page];
  const who = servicesWho[page];

  return (
    <main className="service-page">
      <section className="service__banner">
        <Banner
          title={banner.title}
          description={banner.description}
          imageSrc={banner.imageSrc}
        />
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
