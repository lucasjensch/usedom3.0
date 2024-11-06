import React, { useState } from 'react';
import BookingWidget from './BookingWidget';

// Popup-Komponente zur Anzeige der Preislisten
const PricePopup: React.FC<{ onClose: () => void }> = ({ onClose }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 2); // Zwischen 0 und 1 wechseln
    };

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + 2) % 2); // Zwischen 0 und 1 wechseln
    };

    const prices2024 = (
        <table className="border border-gray-300 text-center w-full shadow-md rounded-lg overflow-hidden">
            <caption className="text-3xl font-semibold text-blue-800 py-4">
                2024
                <br />
                <span className="text-base font-normal text-gray-600">
                    von Mai bis Sep. inkl. Strandkorb am Strand
                </span>
            </caption>
            <thead>
                <tr className="bg-blue-800 text-white text-lg">
                    <th className="px-2 py-2 sm:px-3 sm:py-3 border-r border-gray-300">Von</th>
                    <th className="px-2 py-2 sm:px-3 sm:py-3 border-r border-gray-300">Bis</th>
                    <th className="px-2 py-2 sm:px-3 sm:py-3">Pro Nacht</th>
                </tr>
            </thead>
            <tbody className="text-gray-800 text-base">
                {[
                    ["03.01.", "28.01.", "90,- €"],
                    ["28.01.", "24.03.", "95,- €"],
                    ["24.03.", "28.04.", "100,- €"],
                    ["28.04.", "16.06.", "140,- €"],
                    ["16.06.", "01.09.", "195,- €"],
                    ["01.09.", "06.10.", "140,- €"],
                    ["06.10.", "03.11.", "100,- €"],
                    ["03.11.", "22.12.", "90,- €"],
                    ["22.12.", "05.01.2025", "190,- €"]
                ].map((row, idx) => (
                    <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                            } hover:bg-blue-50 transition-colors`}
                    >
                        <td className="px-2 py-2 sm:px-3 sm:py-3 border-r border-gray-200">{row[0]}</td>
                        <td className="px-2 py-2 sm:px-3 sm:py-3 border-r border-gray-200">{row[1]}</td>
                        <td className="px-2 py-2 sm:px-3 sm:py-3 font-semibold text-blue-700">{row[2]}</td>
                    </tr>
                ))}
            </tbody>
        </table>

    );

    const prices2025 = (
        <table className="border border-gray-300 text-center w-full shadow-md rounded-lg overflow-hidden">
            <caption className="text-3xl font-semibold text-blue-800 py-4">
                2025
                <br />
                <span className="text-base font-normal text-gray-600">
                    von Mai bis Sep. inkl. Strandkorb am Strand
                </span>
            </caption>
            <thead>
                <tr className="bg-blue-800 text-white text-lg">
                    <th className="px-2 py-2 sm:px-3 sm:py-3 border-r border-gray-300">Von</th>
                    <th className="px-2 py-2 sm:px-3 sm:py-3 border-r border-gray-300">Bis</th>
                    <th className="px-2 py-2 sm:px-3 sm:py-3">Pro Nacht</th>
                </tr>
            </thead>
            <tbody className="text-gray-800 text-base">
                {[
                    ["05.01.", "30.03.", "100,- €"],
                    ["30.03.", "27.04.", "115,- €"],
                    ["27.04.", "22.06.", "150,- €"],
                    ["22.06.", "14.09.", "210,- €"],
                    ["14.09.", "05.10.", "150,- €"],
                    ["05.10.", "02.11.", "115,- €"],
                    ["02.11.", "21.12.", "100,- €"],
                    ["21.12.", "04.01.2026", "205,- €"]
                ].map((row, idx) => (
                    <tr
                        key={idx}
                        className={`${idx % 2 === 0 ? "bg-gray-100" : "bg-white"
                            } hover:bg-blue-50 transition-colors`}
                    >
                        <td className="px-2 py-2 sm:px-3 sm:py-3 border-r border-gray-200">{row[0]}</td>
                        <td className="px-2 py-2 sm:px-3 sm:py-3 border-r border-gray-200">{row[1]}</td>
                        <td className="px-2 py-2 sm:px-3 sm:py-3 font-semibold text-blue-700">{row[2]}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );

    const tables = [prices2024, prices2025];

    return (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
            <div className="relative w-11/12 md:w-3/4 lg:w-2/3 xl:w-1/2 max-h-[90vh] overflow-y-auto bg-white rounded-lg shadow-lg p-6">
                <button onClick={onClose} className="absolute top-2 right-2 text-gray-600 text-xl">✖️</button>
                <div className="text-center">
                    {tables[currentIndex]}
                </div>

                {/* Navigationspfeile */}
                <div className="flex justify-between mt-4">
                    <button onClick={handlePrev} className="text-gray-600 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                        </svg>
                    </button>
                    <button onClick={handleNext} className="text-gray-600 p-2">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};

// Hauptkomponente
const BookingSection = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    }

    return (
        <section id='widget'>
            <div className="flex flex-col sticky top-[100px] justify-center items-center w-full">
                <div className="flex flex-col items-center bg-white lg:p-6 rounded-xl shadow-lg">
                    <BookingWidget></BookingWidget>
                    <a href="../pages/anfrage.html" target='_blank' className="bg-blue-700 w-full p-4 flex justify-center text-white rounded-xl text-xl mt-5 mb-10">Reservierung anfragen</a>
                    <div className="flex absolute justify-between gap-6 bottom-[15px]">
                        <button onClick={togglePopup} className="text-sm text-gray-500 hover:text-black">Preistabelle</button>
                        <a href='../pages/datenschutz.html' target='_blank' className="text-sm text-gray-500 hover:text-black">Datenschutz</a>
                    </div>
                </div>
            </div>

            {/* Popup für Preistabelle */}
            {isPopupOpen && <PricePopup onClose={togglePopup} />}
        </section>
    );
};

export default BookingSection;
