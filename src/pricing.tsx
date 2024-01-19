import React, { useState } from "react";

function Pricing() {
    const [priceTable2024, setPriceTable2024] = React.useState(false);
    const [priceTable2025, setPriceTable2025] = React.useState(false);
    return (
        <>

            <section id="pricing" className=" rounded-xl bg-gray-900 shadow-lg w-full shadow-gray-400 text-center">
                <div className="max-w-7xl mx-auto">
                    <div className="px-4">
                        <h2 className="py-6 text-3xl md:text-5xl tracking-tight font-extrabold text-center text-gray-100 dark:text-white">
                            Mietpreise und Buchungskalender
                        </h2>
                        <p className=" font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl pt-4 pb-10">
                            Entdecken Sie die Übernachtungspreise pro Nacht und freuen Sie sich auf Ihren Urlaub.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 py-6 md:grid-cols-2 gap-6">
                        <div className="max-w-7xl bg-waves bg-no-repeat bg-opacity-10 bg-cover flex mx-auto py-8 px-2 md:py-24 md:mb-8">
                            <div className="max-w-sm bg-white border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 ">
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Mietpreise für das Jahr 2024
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Buchen Sie Ihren Urlaub schon ab 85€
                                    </p>
                                    <button
                                        onClick={() => setPriceTable2024(true)}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Unsere Preise
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {priceTable2024 ?
                            <div className="h-screen flex justify-center items-center bg-black/30 z-50 fixed top-0 left-0 w-screen">
                                <div className="flex p-12 bg-gray-100 h-4/5 w-11/12 rounded-xl relative">
                                    <button onClick={() => setPriceTable2024(false)} className="absolute top-0 right-0 m-4">
                                        <img className="w-12" src="../src/assets/icon-close.svg" alt="" />
                                    </button>
                                    <h2 className='font-extrabold text-xl md:text-2xl'>2024</h2>
                                    <p></p>
                                </div>
                            </div>
                            : null}

                        <div className="max-w-7xl bg-waves bg-no-repeat bg-cover  mx-auto py-8 px-2 md:py-24 md:mb-8">
                            <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                                <div className="p-5">
                                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                                        Mietpreise für das Jahr 2025
                                    </h5>
                                    <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                                        Buchen Sie Ihren Urlaub schon ab 85€
                                    </p>
                                    <button
                                        onClick={() => { setPriceTable2025(true) }}
                                        className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    >
                                        Unsere Preise
                                        <svg
                                            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                                            aria-hidden="true"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewBox="0 0 14 10"
                                        >
                                            <path
                                                stroke="currentColor"
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                stroke-width="2"
                                                d="M1 5h12m0 0L9 1m4 4L9 9"
                                            />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                        {priceTable2025 ?
                            <div className="h-screen flex justify-center items-center bg-black/30 z-50 fixed top-0 left-0 w-screen">
                                <div className="flex p-12 bg-gray-100 h-4/5 w-11/12 rounded-xl relative">
                                    <button onClick={() => setPriceTable2025(false)} className="absolute top-0 right-0 m-4">
                                        <img className="w-12" src="../src/assets/icon-close.svg" alt="" />
                                    </button>
                                    <h2 className='font-extrabold text-xl md:text-2xl'>2025</h2>
                                    <p></p>
                                </div>
                            </div>
                            : null}


                    </div>
                </div>
            </section>
        </>

    );
}

export default Pricing;

