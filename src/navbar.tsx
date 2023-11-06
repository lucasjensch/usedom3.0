import React, { useState } from 'react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="">
            <button
                className="hamburger-icon md:hidden"
                onClick={toggleMenu}
                aria-label="Toggle Menu"
            >
                <svg
                    className={`fixed w-10 h-10 text-gray-900 ${isOpen ? 'hidden' : 'block'}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <svg
                    className={`fixed w-10 h-10 text-gray-900 ${isOpen ? 'block' : 'hidden'}`}
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            <ul
                className={` menu absolute h-12 items-center right-0 top-16 md:static md:w-auto md:flex flex-col md:flex-row space-y-3 md:space-y-0 md:space-x-6 ${isOpen ? 'md:flex' : 'hidden'
                    }`}
            >
                <li>
                    <a
                        className="text-gray-900 text-lg font-semibold hover:text-indigo-600"
                        href="#home"
                        onClick={toggleMenu}
                    >
                        Home
                    </a>
                </li>
                <li>
                    <a
                        className="text-gray-600 hover:text-indigo-600"
                        href="#ausstattung"
                        onClick={toggleMenu}
                    >
                        About
                    </a>
                </li>
                <li>
                    <a
                        className="text-gray-600 hover:text-indigo-600"
                        href="#preise"
                        onClick={toggleMenu}
                    >
                        Services
                    </a>
                </li>
                <li>
                    <a
                        className="text-gray-600 hover:text-indigo-600"
                        href="#contact"
                        onClick={toggleMenu}
                    >
                        Contact
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default Navbar;
