'use client'

import { useState } from "react";
import "./ProjectGallery.scss";

interface ProjectGalleryProps {
    images: string[]
}

export default function ProjectGallery({ images }: ProjectGalleryProps) {

    const [currentIndex, setCurrentIndex] = useState(0)

    const goToNext = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === images.length - 1) {
                return 0;
            }

            return prevIndex + 1
        })
    }

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => {
            if (prevIndex === 0) {
                return images.length - 1;
            }

            return prevIndex - 1
        })
    }

    return (

        <div className="caroussel">
            <button className="carousel-button prev" onClick={goToPrevious}>Précédent</button>
            <img
                src={images[currentIndex]}
                alt={`Image ${currentIndex + 1}`}
                className="carousel-image"
            />
            <button className="carousel-button next" onClick={goToNext}>Suivant</button>
        </div>

    );
}
