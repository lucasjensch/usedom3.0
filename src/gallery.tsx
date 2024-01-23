import { url } from "inspector";
import React, { useState } from "react";

interface GalleryProps {
  images: string[]
}



function Gallery({ images }: GalleryProps) {
  const [popupGallery, setPopupGallery] = useState(false);
  const handleGallery = () => {
    setPopupGallery(!popupGallery);
  };


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    <>
      <div id="fotos" className="max-w-[1140px] w-full m-auto p-4 py-6">
        <div className="flex flex-col items-center">
          <h2 className="pt-2 text-3xl md:text-5xl tracking-tight font-extrabold text-center text-black dark:text-black">
            Fotos
          </h2>
          <p className="py-6 lg:mb-16 font-light text-center px-4 text-gray-500 dark:text-gray-400 sm:text-xl">
            Wir überzeugen mit einer raffinierten und eleganten Einrichtung, die
            Gemütlichkeit verspricht. Die voll ausgestattete Küche und das
            stilvolle Wohnzimmer sind das Highlight des Hauses.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          <div className="md:col-span-3 col-span-2 row-span-2 ">
            <button className="h-full" onClick={handleGallery}>
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg shadow-gray-400"
                src="../src/assets/Hintergrund_Haus.jpg"
                alt=""
              />
            </button>
          </div>
          <div>
            <button className="h-full" onClick={handleGallery}>
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg shadow-gray-400"
                src="../src/assets/neue Bilder Usedomperle/Couch.png"
                alt=""
              />
            </button>
          </div>
          <div>
            <button className="h-full" onClick={handleGallery}>
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg shadow-gray-400"
                src="../src/assets/neue Bilder Usedomperle/Schlafzimmer1.png"
                alt=""
              />
            </button>
          </div>
          <div>
            <button className="h-full" onClick={handleGallery}>
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg shadow-gray-400"
                src="../src/assets/neue Bilder Usedomperle/lampe_dachgeschoss.png"
                alt=""
              />
            </button>
          </div>
          <div>
            <button className="h-full" onClick={handleGallery}>
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg shadow-gray-400"
                src="../src/assets/neue Bilder Usedomperle/Schlafzimmer2.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>

      {popupGallery ? (
        <div className="h-screen flex justify-center items-center bg-black/50 z-50 fixed top-0 left-0 w-screen">
          <div className="flex bg-gray-100 h-4/5 w-11/12 rounded-xl relative">
            <button
              onClick={handleGallery}
              className="absolute top-0 right-0 m-4 z-50"
            >
              <img className="w-12" src="../src/assets/icon-close.svg" alt="" />
            </button>
            <div className=" w-full h-full relative">
              <button
                type="button"
                className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-prev
                onClick={prevImage}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M5 1 1 5l4 4"
                    />
                  </svg>
                  <span className="sr-only">Previous</span>
                </span>
              </button>
              <button
                type="button"
                className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
                data-carousel-next
                onClick={nextImage}
              >
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                  <svg
                    className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 6 10"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="m1 9 4-4-4-4"
                    />
                  </svg>
                  <span className="sr-only">Next</span>
                </span>
              </button>
              <div className="h-full flex justify-center w-full">
                <img src={images[currentIndex]} alt="" />
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </>
  );
}

export default Gallery;
