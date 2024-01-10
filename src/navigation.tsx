import React, { useState } from "react";
import { FaBars } from 'react-icons/fa';
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
import { useEffect } from 'react';


function Navigation() {
    const [nav, setNav] = React.useState(false);
    const handleNav = () => {
        setNav(!nav)
    }


    return (
        <div className="w-full min-h-[50px] flex justify-between items-center absolute z-10">
            <ul className="hidden md:flex px-4 text-white">
                <li className="text-base">
                    <a href="#home">Startseite</a>
                </li>
                <li className="text-base">
                    <a href="#about">Ausstattung</a>
                </li>
                <li className="text-base">
                    <a href="#pricing">Preise und Buchung</a>
                </li>
                <li className="text-base">
                    <a href="#reviews">Rezensionen</a>
                </li>
                <li className="text-base">
                    <a href="#contact">Kontakt</a>
                </li>
            </ul>

            {/* Hamburger Icon */}
            <div onClick={handleNav} className="md:hidden z-10 fixed top-7 right-0">
                <FaBars size={25} className="mr-4 cursor-pointer text-black z-50"></FaBars>
            </div>
            {/* Mobile Menu */}
            <div onClick={handleNav} className={nav ? "fixed overlay-y-hidden md:hidden ease-in duration-300 text-gray-800 left-0 top-0 h-screen w-full bg-white py-7 flex flex-col"
                : "absolute top-0 h-screen left-[-100%] ease-out duration-500"}>
                <ul className="h-full w-full text-center items-center pt-12 flex flex-col">
                    <li className="py-6">
                        <img src="../src/assets/logo_transparent.png" alt="" className="h-24" />
                    </li>
                    <li className="text-2xl py-6 ">
                        <a href="#home">Startseite</a>
                    </li>
                    <li className="text-2xl py-6 ">
                        <a href="#about">Ausstattung</a>
                    </li>
                    <li className="text-2xl py-6 ">
                        <a href="#pricing">Preise und Buchung</a>
                    </li>
                    <li className="text-2xl py-6 ">
                        <a href="#reviews">Rezensionen</a>
                    </li>
                    <li className="text-2xl py-6 ">
                        <a href="#contact">Kontakt</a>
                    </li>
                    <li>
                        <div className="hidden md:flex items-center px-6">
                            <AiFillMail size={20} className="mr-2 text-[var(--primary-dark)]"></AiFillMail>
                            <a href="mailto:info@die-usedomperle.de">info@die-usedomperle.de</a>
                        </div>
                        <div className="hidden md:flex items-center px-6">
                            <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]"></AiFillPhone>
                            <p>+49 (0) 1520 88 70 816</p>
                        </div>
                    </li>

                </ul>
            </div>
        </div >
    );
}

export default Navigation;
