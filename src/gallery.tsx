import { useState } from "react";

// Galerie-URLs als konstante Liste
const imageUrls: string[] = [
  "../src/assets/neue Bilder Usedomperle/Eingangstür.png",
  "../src/assets/neue Bilder Usedomperle/Schuppen.png",
  "../src/assets/neue Bilder Usedomperle/Haus-Seitenprofil.png",
  "../src/assets/neue Bilder Usedomperle/Usedomperle-outdoor.png",
  "../src/assets/neue Bilder Usedomperle/EG_Bad.png",
  "../src/assets/neue Bilder Usedomperle/EG_Bad_2.png",
  "../src/assets/neue Bilder Usedomperle/EG_Tisch.png",
  "../src/assets/neue Bilder Usedomperle/EG_Tisch_Bild.png",
  "../src/assets/neue Bilder Usedomperle/EG_Couch.png",
  "../src/assets/neue Bilder Usedomperle/EG_Fernseher.png",
  "../src/assets/neue Bilder Usedomperle/1OG_Bett1.png",
  "../src/assets/neue Bilder Usedomperle/1OG_Bett2.png",
  "../src/assets/neue Bilder Usedomperle/1OG_Bad.png",
  "../src/assets/neue Bilder Usedomperle/1OG_Bad2.png",
  "../src/assets/neue Bilder Usedomperle/1OG_Sauna.png",
  "../src/assets/neue Bilder Usedomperle/1OG_Flur.png",
  "../src/assets/neue Bilder Usedomperle/1OG_Schlaf.png",
  "../src/assets/neue Bilder Usedomperle/1OG_Schlaf2.png",
  "../src/assets/neue Bilder Usedomperle/Schlafzimmer3.png",
  "../src/assets/neue Bilder Usedomperle/lampe_dachgeschoss.png",
  "../src/assets/neue Bilder Usedomperle/2OG_Schuppen.png",
];

// Typen für Props der GalleryPopup-Komponente definieren
interface GalleryPopupProps {
  images: string[]; // Array von Bild-URLs
  isOpen: boolean;  // Ob die Galerie geöffnet ist
  onClose: () => void; // Funktion zum Schließen der Galerie
}

// Galerie-Popup-Komponente
const GalleryPopup: React.FC<GalleryPopupProps> = ({ images, isOpen, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
      <div className="relative" >
        <button className="absolute top-2 right-2 text-white z-10" onClick={onClose}>
          ✖️
        </button>
        <img
          src={images[currentIndex]}
          alt={`Bild ${currentIndex + 1}`}
          className="max-w-full max-h-[90vh]"
        />
        <div className="flex justify-between mt-4">
          <button onClick={handlePrev} className="text-white px-4 py-2 bg-gray-700">
            Vorheriges Bild
          </button>
          <button onClick={handleNext} className="text-white px-4 py-2 bg-gray-700">
            Nächstes Bild
          </button>
        </div>
      </div >
    </div>
  );
};

// Hauptkomponente
const GalleryContainer: React.FC = () => {
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);

  const toggleGallery = () => {
    setIsGalleryOpen(!isGalleryOpen);
  }

  return (
    <>
      <div className="">

        <div className="relative grid grid-cols-1 sm:grid-cols-2 sm:grid-rows-2 md:grid-cols-4 gap-4">
          <img onClick={toggleGallery} className="row-span-2 col-span-2" src="../src/assets/couch_fernseher.jpg" alt="Couch mit Fernseher" />
          <img onClick={toggleGallery} src="../src/assets/neue Bilder Usedomperle/1OG_Bett1.png" alt="Bett" />
          <img onClick={toggleGallery} src="../src/assets/neue Bilder Usedomperle/lampe_dachgeschoss.png" alt="Lampe Dachgeschoss" />
          <img onClick={toggleGallery} className="-mt-[5px]" src="../src/assets/Hintergrund_Haus.jpg" alt="Hintergrund Haus" />
          <img onClick={toggleGallery} className="-mt-[5px]" src="../src/assets/Haus_Terrasse_3.jpg" alt="Haus Terrasse" />

          {/* Button zum Öffnen der Galerie */}
          <div className="absolute bottom-0 right-0 flex bg-gray-200/80 items-center">
            <button onClick={toggleGallery} className="p-2">
              Alle Bilder öffnen
            </button>
          </div>

          {/* Popup-Galerie */}
          <GalleryPopup images={imageUrls} isOpen={isGalleryOpen} onClose={toggleGallery} />
        </div>


      </div>

    </>

  );
};

export default GalleryContainer;
