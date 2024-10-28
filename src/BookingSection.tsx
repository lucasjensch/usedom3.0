import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { addDays, differenceInDays, isWithinInterval } from 'date-fns';
import BookingWidget from './BookingWidget';


const BookingSection = () => {


    return (
        <section id='widget'>
            <div className="flex flex-col sticky top-[100px] justify-center items-center w-full">
                <div className="flex flex-col items-center bg-white p-6 rounded-xl shadow-lg">
                    <BookingWidget></BookingWidget>
                    <a href="#anfrage.html" target='_blank' className="bg-blue-500 w-full p-4 flex justify-center text-white rounded-xl text-xl mt-5 mb-10">Reservierung anfragen</a>
                    <div className="flex absolute justify-between gap-6 bottom-[15px]">
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
