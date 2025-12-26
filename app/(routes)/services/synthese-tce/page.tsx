import Banner from "@/components/pages/services/Banner/Banner";
import { servicesBanner } from "@/data/services/servicesBanner";
import OptionCard from "@/components/pages/services/OptionCard/OptionCard";
import { servicesOptions } from "@/data/services/servicesOptions";
import Steps from "@/components/pages/services/Steps/Steps";
import { servicesSteps } from "@/data/services/servicesSteps";
import Who from "@/components/pages/services/Who/Who";
import { servicesWho } from "@/data/services/servicesWho";

export default function CarnetsDeDetails() {
  const page = "synthese-tce";

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
