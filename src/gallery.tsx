import React, { useState } from "react";

function Gallery() {

  const [popupGallery, setPopupGallery] = useState(false);
  const handleGallery = () => {
    setPopupGallery(!popupGallery);
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
                src="../src/assets/neue Bilder Usedomperle/Sekt.png"
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

      {
        popupGallery ? <div id="fotos" className="relative w-full py-8" data-carousel="slide">
          <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="../src/assets/Treppenhaus.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="duration-700 ease-in-out" data-carousel-item>
              <img src="../src/assets/Treppenhaus.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="../src/assets/Treppenhaus.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="../src/assets/Treppenhaus.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
            <div className="hidden duration-700 ease-in-out" data-carousel-item>
              <img src="src\assets\Treppenhaus.jpg" className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
            </div>
          </div>
          <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
            <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
            <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
          </div>
          <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4" />
              </svg>
              <span className="sr-only">Previous</span>
            </span>
          </button>
          <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
            <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
              <svg className="w-4 h-4 text-black dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4" />
              </svg>
              <span className="sr-only">Next</span>
            </span>
          </button>
        </div> : null
      }

    </>
  );
}

export default Gallery;
