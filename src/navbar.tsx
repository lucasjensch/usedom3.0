import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Navbar() {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    return (
        <>
            <header>
                <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5 shadow-md shadow-gray-500 dark:bg-gray-800 fixed z-50 w-screen">
                    <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                        <a href="#" className="flex items-center">
                            <img src="../src/assets/logo.jpg" className="mr-3 h-12 sm:h-14" alt="Usedom Logo" />
                            <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white"></span>
                        </a>
                        <div className="flex items-center lg:order-2">
                            <a href="#booking" className="bg-indigo-500 text-gray-100 shadow-sm shadow-black dark:text-white hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 focus:outline-none dark:focus:ring-gray-800 hidden xxs:block">Buchen Sie jetzt</a>
                            <button onClick={() => setNavbarOpen(true)} data-collapse-toggle="mobile-menu-2" type="button" className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
                                <span className="sr-only">Open main menu</span>
                                <svg className=" z-40 w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd"></path></svg>
                                <svg className="hidden w-8 h-8" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                            </button>
                        </div>
                        <div className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1" id="mobile-menu-2">
                            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                                <li>
                                    <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Startseite</a>
                                </li>
                                <li>
                                    <a href="#about" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Unsere Ausstattung</a>
                                </li>
                                <li>
                                    <a href="#pricing" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Preise und Buchung</a>
                                </li>
                                <li>
                                    <a href="#reviews" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Rezensionen</a>
                                </li>
                                <li>
                                    <a href="#contact" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Kontakt</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </header>
            {navbarOpen ? (
                <div className="bg-white h-screen flex fixed z-50 w-screen">
                    <div className="flex pt-16 w-full h-full relative flex-col">
                        <button onClick={() => setNavbarOpen(false)} className="absolute top-0 right-0 m-4">
                            <img className="w-12" src="../src/assets/icon-close.svg" alt="" />
                        </button>

                        <a onClick={() => setNavbarOpen(false)} href="#">
                            <img data-aos="fade-left" data-aos-delay="100" className="mx-auto w-80" src="../src/assets/logo.jpg" alt="" />
                        </a>

                        <ul className="flex flex-col mt-24 items-left">
                            <li>
                                <a
                                    onClick={() => setNavbarOpen(false)}
                                    href="#"
                                    className=" block py-2 pr-4 pl-3 text-5xl font-extrabold text-gray-700"
                                    aria-current="page"
                                    data-aos="fade-left" data-aos-delay="150"
                                >
                                    Startseite
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => setNavbarOpen(false)}
                                    href="#about"
                                    className=" block py-2 pr-4 pl-3 text-5xl font-extrabold text-gray-700"
                                    data-aos="fade-left" data-aos-delay="200"
                                >
                                    Ausstattung
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => setNavbarOpen(false)}
                                    href="#pricing"
                                    className=" block py-2 pr-4 pl-3 text-5xl font-extrabold text-gray-700"
                                    data-aos="fade-left" data-aos-delay="250"
                                >
                                    Preise und Belegung
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => setNavbarOpen(false)}
                                    href="#reviews"
                                    className=" block py-2 pr-4 pl-3 text-5xl font-extrabold text-gray-700"
                                    data-aos="fade-left" data-aos-delay="300"
                                >
                                    Rezensionen
                                </a>
                            </li>
                            <li>
                                <a
                                    onClick={() => setNavbarOpen(false)}
                                    href="#contact"
                                    className=" block py-2 pr-4 pl-3 text-5xl font-extrabold text-gray-700"
                                    data-aos="fade-left" data-aos-delay="350"
                                >
                                    Kontakt
                                </a>
                            </li>
                            <div className="absolute bottom-0 p-4">
                                <li>
                                    <p className="text-black text-md font-light">Ferienhaus "Die Usedomperle"</p>
                                </li>
                                <li>
                                    <p className="text-black text-md font-light">Kiefernweg 9, 17449 Peenemünde {"(Dünenresidenz Karlshagen)"}</p>
                                </li>
                                <li>
                                    <p className="text-black text-md font-light">01520-8870816</p>
                                </li>
                                <li>
                                    <a href="mailto:info@die-usedomperle" className="text-indigo-600 text-md font-light">info@die-usedomperle.de</a>
                                </li>
                            </div>

                        </ul>
                    </div>
                </div>
            ) : null}

        </>
    );
}
