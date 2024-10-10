import React, { useState } from "react";

type Image = {
  src: string;
  alt: string;
};

const images: Image[] = [
  { src: "../src/assets/neue Bilder Usedomperle/1OG_Bett2.png", alt: "Bild 1" },
  { src: "../src/assets/neue Bilder Usedomperle/1OG_Sauna.png", alt: "Bild 2" },
  { src: "../src/assets/neue Bilder Usedomperle/EG_Fernseher.png", alt: "Bild 3" },
  { src: "../src/assets/neue Bilder Usedomperle/EG_Bad_2.png", alt: "Bild 4" },
];

const Gallery: React.FC = () => {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
  };

  const closeModal = () => {
    setSelectedIndex(null);
  };

  const showPreviousImage = () => {
    if (selectedIndex !== null && selectedIndex > 0) {
      setSelectedIndex(selectedIndex - 1);
    }
  };

  const showNextImage = () => {
    if (selectedIndex !== null && selectedIndex < images.length - 1) {
      setSelectedIndex(selectedIndex + 1);
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4 text-center">Galerie</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <div key={index} className="relative">
            <img
              src={image.src}
              alt={image.alt}
              className="max-h-[400px] cursor-pointer"
              onClick={() => openModal(index)}
            />
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedIndex !== null && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
          <div className="relative bg-white p-4 rounded-lg shadow-lg max-w-3xl mx-auto">
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 mt-2 mr-2 text-gray-500 hover:text-gray-800 text-3xl"
            >
              &times;
            </button>

            {/* Image Display */}
            <img
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              className="w-full max-h-[600px]"
            />

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-4">
              <button
                onClick={showPreviousImage}
                className={`px-4 py-2 bg-gray-100 text-white rounded-lg ${
                  selectedIndex === 0 ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={selectedIndex === 0}
              >
                <img className="w-6 h-6" src="../src/assets/arrow-left.svg" alt="" />
              </button>
              <button
                onClick={showNextImage}
                className={`px-4 py-2 bg-gray-100 text-white rounded-lg ${
                  selectedIndex === images.length - 1
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }`}
                disabled={selectedIndex === images.length - 1}
              >
               <img className="w-6 h-6" src="../src/assets/arrow-right.svg" alt="" />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Gallery;
