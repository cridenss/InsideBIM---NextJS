import Banner from '../../../components/pages/services/Banner/Banner'
import { servicesBanner } from "../../../../data/services/servicesBanner"

export default function SyntheseTce() {
    const banner = servicesBanner["synthese-tce"]

    return(
        <Banner
            title={banner.title}
            description={banner.description}
            imageSrc={banner.imageSrc}
        />
    )
}