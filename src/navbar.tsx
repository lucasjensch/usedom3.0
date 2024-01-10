import React from "react";
import { AiFillPhone, AiFillMail } from 'react-icons/ai'
import { BsChatSquareDots } from 'react-icons/bs'

function Topbar() {
    return (
        <div className="flex  justify-between items-center px-4 py-2 bg-white z-30 shadow-gray-500">
            <div className="flex items-center">
                <img src="../src/assets/logo_transparent.png" alt="Die Usedomperle" className="h-16 md:h-20 mr-2" />
            </div>
            <div className="flex">
                <div className="hidden md:flex items-center px-6">
                    <AiFillMail size={20} className="mr-2 text-[var(--primary-dark)]"></AiFillMail>
                    <a href="mailto:info@die-usedomperle.de">info@die-usedomperle.de</a>
                </div>
                <div className="hidden md:flex items-center px-6">
                    <AiFillPhone size={20} className="mr-2 text-[var(--primary-dark)]"></AiFillPhone>
                    <p>0 1520/88 70 816</p>
                </div>
            </div>
        </div>

    );
}

export default Topbar;