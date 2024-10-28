import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, differenceInDays, isWithinInterval } from 'date-fns';
import BookingWidget from './BookingWidget';

const priceTable = [
    // 2024
    { start: new Date(2024, 0, 3), end: new Date(2024, 0, 28), price: 90 },   // 03.01. - 28.01.
    { start: new Date(2024, 0, 28), end: new Date(2024, 2, 24), price: 95 },  // 28.01. - 24.03.
    { start: new Date(2024, 2, 24), end: new Date(2024, 3, 28), price: 100 }, // 24.03. - 28.04.
    { start: new Date(2024, 3, 28), end: new Date(2024, 5, 16), price: 140 }, // 28.04. - 16.06.
    { start: new Date(2024, 5, 16), end: new Date(2024, 8, 1), price: 195 },  // 16.06. - 01.09.
    { start: new Date(2024, 8, 1), end: new Date(2024, 9, 6), price: 140 },   // 01.09. - 06.10.
    { start: new Date(2024, 9, 6), end: new Date(2024, 10, 3), price: 100 },  // 06.10. - 03.11.
    { start: new Date(2024, 10, 3), end: new Date(2024, 11, 22), price: 90 }, // 03.11. - 22.12.
    { start: new Date(2024, 11, 22), end: new Date(2025, 0, 5), price: 190 }, // 22.12. - 05.01.2025

    // 2025
    { start: new Date(2025, 0, 5), end: new Date(2025, 2, 30), price: 100 },  // 05.01. - 30.03.
    { start: new Date(2025, 2, 30), end: new Date(2025, 3, 27), price: 115 }, // 30.03. - 27.04.
    { start: new Date(2025, 3, 27), end: new Date(2025, 5, 22), price: 150 }, // 27.04. - 22.06.
    { start: new Date(2025, 5, 22), end: new Date(2025, 8, 14), price: 210 }, // 22.06. - 14.09.
    { start: new Date(2025, 8, 14), end: new Date(2025, 9, 5), price: 150 },  // 14.09. - 05.10.
    { start: new Date(2025, 9, 5), end: new Date(2025, 10, 2), price: 115 },  // 05.10. - 02.11.
    { start: new Date(2025, 10, 2), end: new Date(2025, 11, 21), price: 100 }, // 02.11. - 21.12.
    { start: new Date(2025, 11, 21), end: new Date(2026, 0, 4), price: 205 }, // 21.12. - 04.01.2026
];
// Berechne den Preis für eine Nacht basierend auf dem aktuellen Datum
const getPriceForDate = (date: Date): number => {
    for (let period of priceTable) {
        if (isWithinInterval(date, { start: period.start, end: period.end })) {
            return period.price;
        }
    }
    return 0; // Fallback, wenn das Datum außerhalb der definierten Bereiche liegt
};

// Berechnung des Gesamtpreises
const calculatePrice = (startDate: Date | undefined, endDate: Date | undefined): number => {
    if (!startDate || !endDate) return 0;

    const nights = differenceInDays(endDate, startDate);
    let totalPrice = 0;

    for (let i = 0; i < nights; i++) {
        const currentDate = addDays(startDate, i);
        totalPrice += getPriceForDate(currentDate);
    }

    return totalPrice;
};


const BookingSection = () => {
    // Wir verwenden jetzt Date | undefined
    const [startDate, setStartDate] = useState<Date | undefined>(undefined);
    const [endDate, setEndDate] = useState<Date | undefined>(undefined);
    const [totalPrice, setTotalPrice] = useState(0);

    const handleDateChange = (start: Date | undefined, end: Date | undefined) => {
        setStartDate(start);
        setEndDate(end);
        const calculatedPrice = calculatePrice(start, end);
        setTotalPrice(calculatedPrice);
    };

    return (
        <section>
            <div className="flex flex-col sticky top-[100px] justify-center items-center mx-auto">
                <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
                    <BookingWidget></BookingWidget>
                    {/* Date Picker für An- und Abreise
                    <div className="flex gap-4 mb-5">
                        <div>
                            <p className="font-bold text-lg">Anreise:</p>
                            <DatePicker
                                selected={startDate}
                                onChange={(date) => handleDateChange(date ?? undefined, endDate)}  // Typ Date | undefined
                                selectsStart
                                startDate={startDate}
                                endDate={endDate}
                                minDate={new Date()}
                                className="p-2 border rounded-lg"
                            />
                        </div>

                        <div>
                            <p className="font-bold text-lg">Abreise:</p>
                            <DatePicker
                                selected={endDate}
                                onChange={(date) => handleDateChange(startDate, date ?? undefined)}  // Typ Date | undefined
                                selectsEnd
                                startDate={startDate}
                                endDate={endDate}
                                minDate={startDate}
                                className="p-2 border rounded-lg"
                            />
                        </div>
                    </div>

                    Zeige den berechneten Preis
                    <div className="mt-4">
                        <p className="text-xl font-bold">
                            Gesamtpreis: {totalPrice > 0 ? `${totalPrice},00€` : 'Bitte wählen Sie An- und Abreisedaten'}
                        </p>
                    </div> */}

                    <a href="#anfrage.html" target='_blank' className="bg-blue-500 w-full p-4 flex justify-center text-white rounded-xl text-xl mt-5 mb-10">Reservierung anfragen</a>
                    <div className="flex absolute justify-between gap-6 bottom-[15px] ">
                        <button className="text-sm text-gray-500 hover:text-black">Preistabelle</button>
                        <a href='' className="text-sm text-gray-500 hover:text-black">Belegungskalender</a>
                        <button className="text-sm text-gray-500 hover:text-black">Datenschutz</button>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BookingSection;
