import 'react-datepicker/dist/react-datepicker.css';
import BookingWidget from './BookingWidget';




const BookingSection = () => {

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
