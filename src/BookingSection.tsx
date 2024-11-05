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
        <table className="border border-gray-200 text-center my-4 w-full shadow-sm rounded-lg overflow-hidden">
            <caption className="text-2xl font-bold text-blue-700 mb-2 py-2">
                2024
                <br />
                <span className="text-sm font-normal text-gray-600">von Mai bis Sep. inkl. Strandkorb am Strand</span>
            </caption>
            <thead>
                <tr className="bg-blue-700 text-white">
                    <th className="px-4 py-2 border-r border-gray-300">von</th>
                    <th className="px-4 py-2 border-r border-gray-300">bis</th>
                    <th className="px-4 py-2">pro Nacht</th>
                </tr>
            </thead>
            <tbody>
                <tr><td>03.01.</td><td>28.01.</td><td>90,- €</td></tr>
                <tr><td>28.01.</td><td>24.03.</td><td>95,- €</td></tr>
                <tr><td>24.03.</td><td>28.04.</td><td>100,- €</td></tr>
                <tr><td>28.04.</td><td>16.06.</td><td>140,- €</td></tr>
                <tr><td>16.06.</td><td>01.09.</td><td>195,- €</td></tr>
                <tr><td>01.09.</td><td>06.10.</td><td>140,- €</td></tr>
                <tr><td>06.10.</td><td>03.11.</td><td>100,- €</td></tr>
                <tr><td>03.11.</td><td>22.12.</td><td>90,- €</td></tr>
                <tr><td>22.12.</td><td>05.01.2025</td><td>190,- €</td></tr>
            </tbody>
        </table>
    );

    const prices2025 = (
        <table className="border border-gray-200 text-center my-4 w-full shadow-sm rounded-lg overflow-hidden">
            <caption className="text-2xl font-bold text-blue-700 mb-2 py-2">
                2025
                <br />
                <span className="text-sm font-normal text-gray-600">von Mai bis Sep. inkl. Strandkorb am Strand</span>
            </caption>
            <thead>
                <tr className="bg-blue-700 text-white">
                    <th className="px-4 py-2 border-r border-gray-300">von</th>
                    <th className="px-4 py-2 border-r border-gray-300">bis</th>
                    <th className="px-4 py-2">pro Nacht</th>
                </tr>
            </thead>
            <tbody className='border border-gray-300'>
                <tr><td>05.01.</td><td>30.03.</td><td>100,- €</td></tr>
                <tr><td>30.03.</td><td>27.04.</td><td>115,- €</td></tr>
                <tr><td>27.04.</td><td>22.06.</td><td>150,- €</td></tr>
                <tr><td>22.06.</td><td>14.09.</td><td>210,- €</td></tr>
                <tr><td>14.09.</td><td>05.10.</td><td>150,- €</td></tr>
                <tr><td>05.10.</td><td>02.11.</td><td>115,- €</td></tr>
                <tr><td>02.11.</td><td>21.12.</td><td>100,- €</td></tr>
                <tr><td>21.12.</td><td>04.01.2026</td><td>205,- €</td></tr>
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
                    <a href="anfrage.html" target='_blank' className="bg-blue-700 w-full p-4 flex justify-center text-white rounded-xl text-xl mt-5 mb-10">Reservierung anfragen</a>
                    <div className="flex absolute justify-between gap-6 bottom-[15px]">
                        <button onClick={togglePopup} className="text-sm text-gray-500 hover:text-black">Preistabelle</button>
                        <a href='datenschutz.html' className="text-sm text-gray-500 hover:text-black">Datenschutz</a>
                    </div>
                </div>
            </div>

            {/* Popup für Preistabelle */}
            {isPopupOpen && <PricePopup onClose={togglePopup} />}
        </section>
    );
};

export default BookingSection;
