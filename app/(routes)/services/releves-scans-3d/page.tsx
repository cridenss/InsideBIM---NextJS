import Banner from "../../../components/pages/services/Banner/Banner";
import { servicesBanner } from "../../../../data/services/servicesBanner";
import OptionCard from "../../../components/pages/services/OptionCard/OptionCard";
import { servicesOptions } from "../../../../data/services/servicesOptions";

export default function RelevesScan3d() {
  const banner = servicesBanner["releves-scan-3d"];
  const options = servicesOptions["releves-scan-3d"];

  return (
    <div className="service-page">
      <div className="service__banner">
        <Banner
          title={banner.title}
          description={banner.description}
          imageSrc={banner.imageSrc}
        />
      </div>
      <div className="service__options">
        {options.map((option) => (
          <OptionCard
            key={option.id}
            title={option.title}
            description={option.description}
          />
        ))}
      </div>
    </div>
  );
}
