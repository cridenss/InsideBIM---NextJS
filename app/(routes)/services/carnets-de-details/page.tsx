import Banner from '../../../components/pages/services/Banner/Banner'
import { servicesBanner } from "../../../../data/services/servicesBanner"

export default function CarnetsDeDetails() {
    const banner = servicesBanner["carnets-de-details"]

    return(
        <Banner
            title={banner.title}
            description={banner.description}
            imageSrc={banner.imageSrc}
        />
    )
}