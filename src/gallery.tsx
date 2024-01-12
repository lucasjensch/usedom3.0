import React, { useState } from "react";

function Gallery() {
  return (
    <>
      <div id="gallery" className="max-w-[1140px] w-full m-auto p-4 py-16">
        <div className="flex flex-col items-center">
          <h2 className="py-2 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-black dark:text-white">
            Fotos
          </h2>
          <p className="py-6 lg:mb-16 font-light text-center px-4 text-gray-500 dark:text-gray-400 sm:text-xl">
            Wir überzeugen mit einer raffinierten und eleganten Einrichtung, die
            Gemütlichkeit verspricht. Die voll ausgestattete Küche und das
            stilvolle Wohnzimmer sind das Highlight des Hauses. Außerdem steht für Sie ein Strandkorb direkt am Wasser, von Mai bis Sep., bereit.
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4">
          <div className="md:col-span-3 col-span-2 row-span-2 ">
            <img
              className="w-full h-full object-cover rounded-xl shadow-lg shadow-gray-400"
              src="../src/assets/Haus_seite_2.jpg"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg shadow-gray-400"
              src="../src/assets/neue Bilder Usedomperle/schlafzimmer1.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg shadow-gray-400"
              src="../src/assets/neue Bilder Usedomperle/lampe_dachgeschoss.png"
              alt=""
            />
          </div>
          <div>
            <img
              className="w-full h-full object-cover rounded-lg shadow-lg shadow-gray-400"
              src="../src/assets/neue Bilder Usedomperle/couch.png"
              alt=""
            />
          </div>
          <div>
            <button className="h-full">
              <img
                className="w-full h-full object-cover rounded-lg shadow-lg shadow-gray-400"
                src="../src/assets/neue Bilder Usedomperle/Schlafzimmer2.png"
                alt=""
              />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Gallery;
