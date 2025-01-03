import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { AiFillMail } from "react-icons/ai";

function Navigation() {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="bg-white w-full min-h-[50px] flex justify-between items-center  top-0 z-10 lg:shadow-lg lg:shadow-gray-400 fixed">
      <div className="flex items-center">
        <img
          src="../src/assets/logo_transparent.png"
          alt="Die Usedomperle"
          className="h-16 md:h-20 mr-2"
        />
      </div>

      <ul className="hidden lg:flex px-4 lg:text-black">
        <li className="text-base">
          <a href="#home">Startseite</a>
        </li>
        <li className="text-base">
          <a href="#about">Ausstattung</a>
        </li>
        <li className="text-base">
          <a href="#about">Preise und Belegung</a>
        </li>
        <li className="text-base">
          <a href="#gallery">Fotos</a>
        </li>
        <li className="text-base">
          <a href="#contact">Kontakt</a>
        </li>
      </ul>
      <div className="hidden xl:flex">
        <div className="flex items-center px-6">
          <AiFillMail
            size={20}
            className="mr-2 text-blue-700"
          ></AiFillMail>
          <a
            href="mailto:info@die-usedomperle.de"
            className="text-blue-700 hidden lg:block"
          >
            info@die-usedomperle.de
          </a>
        </div>

      </div>
      {/* Hamburger Icon */}
      <div onClick={handleNav} className="lg:hidden z-10 fixed md:top-7 right-0">
        <FaBars
          size={25}
          className="mr-4 cursor-pointer text-black z-50"
        ></FaBars>
      </div>
      {/* Mobile Menu */}
      <div
        onClick={handleNav}
        className={
          nav
            ? "fixed z-50 overlay-y-hidden lg:hidden duration-300 text-gray-800 left-0 top-0 h-screen w-full bg-white py-7 flex flex-col"
            : "absolute top-0 h-screen left-[-120%] ease-out duration-500"
        }
      >
        <ul className="h-full w-full text-center items-center pt-12 flex flex-col">
          <li className="py-6">
            <a href="#">
              <img
                src="../src/assets/logo_transparent.png"
                alt=""
                className="h-24"
              />
            </a>
          </li>
          <li className="text-2xl py-4 ">
            <a href="#home">Startseite</a>
          </li>
          <li className="text-2xl py-4 ">
            <a href="#about">Ausstattung</a>
          </li>
          <li className="text-2xl py-4 ">
            <a href="#about">Preise und Belegung</a>
          </li>
          <li className="text-2xl py-4 ">
            <a href="#gallery">Fotos</a>
          </li>
          <li className="text-2xl py-4 ">
            <a href="#contact">Kontakt</a>
          </li>
          <li>
            <div className="flex items-center px-6">
              <AiFillMail
                size={20}
                className="mr-2 text-blue-700"
              ></AiFillMail>
              <a className="" href="mailto:info@die-usedomperle.de">
                info@die-usedomperle.de
              </a>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Navigation;
