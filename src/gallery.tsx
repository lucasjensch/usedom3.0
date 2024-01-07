import React, { useState } from "react";

interface Slide {
    url: string;
}

function Gallery() {
    const slides: Slide[] = [
        {
            url: '../src/assets/neue Bilder Usedomperle/Haus-Frontal2.png'
        },
        {
            url: '../src/assets/neue Bilder Usedomperle/Küche.png'
        },
        {
            url: '../src/assets/neue Bilder Usedomperle/Couch.png'
        },
        {
            url: '../src/assets/neue Bilder Usedomperle/Haus-Frontal.png'
        },
        {
            url: '../src/assets/neue Bilder Usedomperle/Schuppen-Von-oben.png'
        },
        {
            url: '../src/assets/neue Bilder Usedomperle/Eingangstür.png'
        },
        {
            url: '../src/assets/neue Bilder Usedomperle/Eingangstür.png'
        },
    ];

    const [currentSlide, setCurrentSlide] = useState(0);

    const goToNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    };

    const goToPrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
    };

    return (
        <>
            <div className="flex px-6 mx-auto justify-center">
                <button className="" onClick={goToPrevSlide}><p className="text-gray-500 ">&larr;</p></button>
                <img className="rounded-lg shadow-lg h-80 md:h-96" src={slides[currentSlide].url} alt={`Slide ${currentSlide + 1}`} />
                <button onClick={goToNextSlide}><p>&rarr;</p></button>
            </div>
        </>
    );
}

export default Gallery;
