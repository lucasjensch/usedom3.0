import React, { useState } from "react";

interface Slide {
  url: string;
}
const [galleryOpen, setGalleryOpen] = React.useState(false);

function Gallery() {
  const slides: Slide[] = [
    {
      url: '../src/assets/neue Bilder Usedomperle/Eingangstür.png'
    },
    {
      url: '../src/assets/neue Bilder Usedomperle/Kamin-indoor.png'
    },
    {
      url: '../src/assets/neue Bilder Usedomperle/Eingangstür.png'
    },
    {
      url: '../src/assets/neue Bilder Usedomperle/Eingangstür.png'
    },
    {
      url: '../src/assets/neue Bilder Usedomperle/Eingangstür.png'
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
      {galleryOpen ? (
        <div className="bg-black/60 h-screen flex fixed z-50 w-screen">
          <div className="flex pt-16 w-full h-full relative flex-col">
            <button onClick={() => setGalleryOpen(false)} className="absolute top-0 right-0 m-4">
              <img className="w-12" src="../src/assets/icon-close.svg" alt="" />
            </button>

            <a onClick={() => setGalleryOpen(false)} href="#">
              <img data-aos="fade-left" data-aos-delay="100" className="mx-auto w-80" src="../src/assets/logo.jpg" alt="" />
            </a>


            <button onClick={goToPrevSlide}>Previous</button>
            <img className="w-36" src={slides[currentSlide].url} alt={`Slide ${currentSlide + 1}`} />
            <button onClick={goToNextSlide}>Next</button>
          </div>
        </div>
      ) : null}
      <div className="border border-red-400">
        <button onClick={() => { setGalleryOpen(true) }}>Gallery Fullpage</button>
      </div>
    </>
  );
}

export default Gallery;

