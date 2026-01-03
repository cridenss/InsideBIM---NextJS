import './Banner.scss'

export default function Banner({
    title = "",
    description = "",
}){
    return(
        <div className="banner">
            <h2 className='banner__title'>{title}</h2>
            <p className='banner__description'>{description}</p>
        </div>
    )
}