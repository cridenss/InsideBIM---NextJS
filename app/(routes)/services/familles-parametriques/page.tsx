import Banner from '../../../components/pages/services/Banner/Banner'
import { servicesBanner } from "../../../../data/services/servicesBanner"

export default function FamillesParametriques() {
    const banner = servicesBanner["familles-parametriques"]

    return(
        <Banner
            title={banner.title}
            description={banner.description}
            imageSrc={banner.imageSrc}
        />
    )
}