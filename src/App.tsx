import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Gallery from "./gallery";
import Navigation from "./navigation";
import Pricing from "./pricing";
import "./App.css";
import { button } from "@material-tailwind/react";

function App() {
  useEffect(() => {
    // Create the first script element
    const script: HTMLScriptElement = document.createElement("script");
    script.src =
      "https://www.ferienhausmiete.de/frontend/dist/src/js/modules/widget_price_view.min.js?id=47780";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: remove the scripts and container when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const script: HTMLScriptElement = document.createElement("script");
    script.src =
      "https://www.ferienhausmiete.de/verwalten/widgets/widgets.js?id=47780&lang=1&months=12&preview=36";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    // Create the first script element
    const script: HTMLScriptElement = document.createElement("script");
    script.src =
      "https://www.ferienhausmiete.de/verwalten/widgets/widgets.js?id=47780&lang=1&months=12&preview=36";
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: remove the scripts and container when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 800,
      // Set the duration of animations
    });
  }, []);

  interface ButtonElement extends HTMLElement {
    classList: DOMTokenList;
  }

  const mybutton: ButtonElement | null =
    document.getElementById("btn-back-to-top");

  const scrollFunction = () => {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      mybutton?.classList.remove("hidden");
    } else {
      mybutton?.classList.add("hidden");
    }
  };
  const backToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  mybutton?.addEventListener("click", backToTop);

  window.addEventListener("scroll", scrollFunction);

  const [estate, setEstate] = useState(false);
  const handleEstate = () => {
    setEstate(!estate);
  };
  const [button, setButton] = useState(true);
  const handleButton = () => {
    setButton(!button);
  };
  const [FAQ1, setFAQ1] = useState(false);
  const handleFAQ1 = () => {
    setFAQ1(!FAQ1);
  };
  const [FAQ2, setFAQ2] = useState(false);
  const handleFAQ2 = () => {
    setFAQ2(!FAQ2);
  };
  const [FAQ3, setFAQ3] = useState(false);
  const handleFAQ3 = () => {
    setFAQ3(!FAQ3);
  };

  return (
    <>
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        className="z-40 !fixed bottom-5 right-5 hidden rounded-full bg-blue-700 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-blue-800 hover:shadow-lg focus:bg-blue-400 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg"
        id="btn-back-to-top"
      >
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="h-4 w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"
          ></path>
        </svg>
      </button>

      <Navigation></Navigation>

      <section id="home" className="">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
          <div className="w-full h-screen bg-wallpaper bg-no-repeat bg-cover">
            <div className="md:hidden w-full h-full bg-gradient-to-b from-black/0 to-black/70"></div>
          </div>
          <div className="relative hidden md:flex flex-col justify-center mx-auto p-4 h-full xl:col-span-2">
            <h1 className="font-extrabold text-5xl xs:text-6xl lg:text-7xl">
              Die Usedomperle
            </h1>
            <h2 className="italic py-4 xxs:py-6">
              Ihr exklusives Ferienhaus direkt am Strand
            </h2>
            <p className="max-w-[800px]">
              Die Usedomperle, ein bezauberndes Ferienhaus auf der Insel
              Usedom, beeindruckt durch ihre erstklassige Ausstattung und
              charmante Atmosphäre. Mit stilvoller Einrichtung, moderner
              Technologie und einem idyllischen Ambiente bietet sie
              unvergessliche Urlaubsmomente.
            </p>
            <div className="py-12">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-700 to-blue-500 w-max rounded-2xl px-6 py-4 text-white decoration-none hover:to-blue-300 hover:text-white hover:duration-500"
              >
                Buchen Sie jetzt &rarr;
              </a>
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 z-40">
              <a href="#about" className="animate-bounce grid-cols-1 grid">
                <div className="w-6 h-6 border-b-2 border-r-2 border-black transform rotate-45 inline-block"></div>
                <div className="w-6 h-6 border-b-2 border-r-2 border-black transform rotate-45 inline-block"></div>
              </a>
            </div>
          </div>
        </div>

        <div className="max-w-[1140px] m-auto">
          <div className="md:hidden absolute top-[30%] w-full md:-[50%] max-w-[600px] md:max-w-[800px] flex flex-col text-white p-4">
            <h1 className="font-extrabold text-5xl xs:text-7xl lg:text-8xl">
              Die Usedomperle
            </h1>
            <h2 className="italic py-4 xxs:py-6">
              Ihr exklusives Ferienhaus direkt am Strand
            </h2>
            <p>
              Die Usedomperle, ein bezauberndes Ferienhaus auf der Insel
              Usedom, beeindruckt durch ihre erstklassige Ausstattung und
              charmante Atmosphäre. Mit stilvoller Einrichtung, moderner
              Technologie und einem idyllischen Ambiente bietet sie
              unvergessliche Urlaubsmomente.
            </p>
            <a
              href="#contact"
              className="bg-white w-max rounded-xl px-4 py-2 text-black hover:bg-gray-100 duration-150 decoration-none mt-6"
            >
              Buchen Sie jetzt &rarr;
            </a>
          </div>
        </div>

        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 z-40 md:hidden">
          <a href="#about" className="animate-bounce grid-cols-1 grid">
            <div className="w-6 h-6 border-b-2 border-r-2 border-gray-100 transform rotate-45 inline-block"></div>
            <div className="w-6 h-6 border-b-2 border-r-2 border-gray-100 transform rotate-45 inline-block"></div>
          </a>
        </div>

      </section>

      <section id="about" className="">

        <h2 className="py-8 text-3xl md:text-4xl font-extrabold text-neutral-800 text-center">Unsere Ausstattung</h2>
        <div className="max-w-[1440px] min-h-screen grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className=" shadow-gray-400 max-w-xl flex flex-col items-center mx-auto">
            <ul className="text-left m-4 -space-y-6 bg-gray-100 rounded-xl shadow-lg">
              <h3 className="text-lg pl-4 py-4 font-bold underline">Wir bieten für Ihren Urlaub:</h3>
              <li>
                von Mai bis Sep. einen Strandkorb am Strand inkl.
              </li>
              <li>
                Das Ferienhaus ist für die Belegung von max. 6 Personen ausgelegt! (Kleinkinder zählen als Personen, weitere Aufbettungen gegen Aufpreis möglich)
              </li>
              <li>
                ca. 100 m² Wohn-/Nutzfläche
              </li>
              <li>
                Fußbodenheizung im gesamten Haus
              </li>
              <li>
                2 Schlafzimmer im 1. OG (Betten 1,80 m x 2 m)
              </li>
              <li>
                1 Schlafzimmer im 2.OG (Bett 1,60 m x 2 m)
              </li>
              <div className="flex justify-center py-2">
                <button className={button ? "block" : "hidden"} onClick={() => {
                  handleEstate();
                  handleButton();
                }}>
                  <p className="">Mehr...</p>
                </button>
              </div>

              <div className={
                estate ? "block"
                  : "hidden"
              }>
                <ul className="-space-y-6">
                  <li>
                    1 Bad im EG mit Dusche
                  </li>
                  <li>
                    1 Bad im 1. OG mit Dusche, Infrarot-Sauna, Haartrockner
                  </li>
                  <li>
                    Küche mit Kaffeemaschine, Wasserkocher, Toaster, Backofen und 4 Platten-Herd, Geschirrspüler, Kühlschrank mit Gefrierfach, Mikrowelle...
                  </li>
                  <li>
                    Waschmaschine
                  </li>
                  <li>
                    Kamin
                  </li>
                  <li>
                    Internet (Wlan)
                  </li>
                  <li>
                    LED-Smart-TV, Blu-Ray Player, Radio
                  </li>
                  <li>
                    Fahrradschuppen mit 4 Fahrrädern 28" und 1 Kinderfahrrädern 24" (Benutzung auf eigene Gefahr)
                  </li>
                  <li>
                    Grillplatz
                  </li>
                  <li>
                    Terrasse mit Gartenmöbeln und Strandkorb
                  </li>
                  <li>
                    1 Parkplatz direkt am Haus, weitere in unmittelbarer Nähe
                  </li>
                  <li>
                    uvm...
                  </li>
                  <li>
                    Bitte achten Sie darauf, dass Haustiere nicht gestattet sind
                  </li>
                  <div className="flex justify-center py-2 w-full">
                    <button className="" onClick={() => {
                      handleEstate();
                      handleButton();
                    }}>
                      Weniger anzeigen
                    </button>
                  </div>
                </ul>

              </div>

            </ul>
            <div className="flex py-4">
              <a href="#fotos" className="shadow-md shadow-gray-400 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                Zu den Fotos
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
              </a>
            </div>
          </div>
          <div className="">
            <p>hallo</p>
          </div>
        </div>
      </section>



      <Pricing></Pricing>
      <Gallery></Gallery>

      {/*Start of Review section*/}
      <section className="mt-16 pt-8" id="reviews">
        <div className="mx-auto text-center max-w-4xl">
          <h3 className="mb-6 text-3xl md:text-4xl font-extrabold text-neutral-800 dark:text-neutral-200">
            Rezensionen
          </h3>
          <p className="mb-8 lg:mb-16 font-light text-center px-4 text-gray-500 dark:text-gray-400 sm:text-xl pt-4 pb-10">
            Uns ist wichtig, was unsere Besucher von uns denken. Daher haben wir
            einige Rezensionen für Sie zusammengestellt, die die Erfahrung in
            der Usedomperle optimal widerspiegeln. Zögern Sie also nicht und
            teilen Sie gerne auch Ihre eigenen Eindrücke in einer Rezension mit.
          </p>
        </div>
        <div
          className="grid grid-cols-1 gap-6 text-center mx-auto max-w-3xl md:grid-cols-2 py-8"
          data-aos="fade-left"
        >
          <div className="bg-gray-100 p-6 rounded-xl shadow-lg shadow-black/30 mb-12 md:mb-0 w-72 justify-center items-center mx-auto">
            <div className="mb-6 flex justify-center">
              <img
                src="../src/assets/elderly-man-icon.png"
                className="w-32 rounded-full shadow-lg shadow-gray-500 dark:shadow-black/30"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Joachim Breuhahn</h5>
            <p className="mb-4 font-light text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2 text-black"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              War dort ein schöner Sommerurlaub, herrlicher Strand und für Groß
              und Klein viele schöne Veranstaltungen und prima Minigolf-Anlage.
              Alles sehr empfehlenswert.
            </p>
            <ul className="mb-0 flex items-center justify-center">
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-lg shadow-black/30 mb-12 md:mb-0 mx-auto w-72">
            <div className="mb-6 flex justify-center">
              <img
                src="https://www.shareicon.net/data/2017/01/06/868320_people_512x512.png"
                className="w-32 rounded-full shadow-lg shadow-gray-500 dark:shadow-black/30"
              />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Gunnar Lindemann</h5>
            <p className="mb-4 font-light text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2 text-black"
                viewBox="0 0 24 24"
              >
                <path d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Ein super schönes Ferienhaus, gut ausgestattet, gepflegt, eine
              tolle Lage und ein kurzer Weg zum Strand!
            </p>
            <ul className="mb-0 flex items-center justify-center">
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd"
                  />
                </svg>
              </li>
            </ul>
          </div>
        </div>
      </section>
      {/*End of Review section*/}

      {/* Start of contact-section */}
      <section className="py-20 min-h-screen" id="contact">
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-4xl ">
          <div className="min-w-4xl" >
            <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Kontaktieren Sie uns
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl pt-4 pb-10">
              Haben Sie Probleme mit der Buchung? Oder wollen Sie uns einfach
              nur Feedback geben? Wir stehen für Sie bereit.
            </p>
          </div>


          <div id="accordion-collapse" data-accordion="collapse" className="pb-8">
            <h2 id="accordion-collapse-heading-1">
              <button onClick={handleFAQ1} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 rounded-t-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-1" aria-expanded="true" aria-controls="accordion-collapse-body-1">
                <span>What is Flowbite?</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>
            {FAQ1 ?
              <div id="accordion-collapse-body-3" className="" aria-labelledby="accordion-collapse-heading-3">
                <div className="p-5 border border-t-0 border-gray-200  dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">1</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                  <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                    <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                  </ul>
                </div>
              </div>
              : null}
            <h2 id="accordion-collapse-heading-2">
              <button onClick={handleFAQ2} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                <span>Is there a Figma file available?</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>
            {FAQ2 ?
              <div id="accordion-collapse-body-3" className="" aria-labelledby="accordion-collapse-heading-3">
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">2</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                  <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                    <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                  </ul>
                </div>
              </div>
              : null}
            <h2 id="accordion-collapse-heading-3">
              <button onClick={handleFAQ3} type="button" className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-500 border border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                <span>What are the differences between Flowbite and Tailwind UI?</span>
                <svg data-accordion-icon className="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5" />
                </svg>
              </button>
            </h2>
            {FAQ3 ?
              <div id="accordion-collapse-body-3" className="" aria-labelledby="accordion-collapse-heading-3">
                <div className="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p className="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  <p className="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                  <ul className="ps-5 text-gray-500 list-disc dark:text-gray-400">
                    <li><a href="https://flowbite.com/pro/" className="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                    <li><a href="https://tailwindui.com/" rel="nofollow" className="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                  </ul>
                </div>
              </div>
              : null}

          </div>




          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
                Ihre Email
              </label>
              <input
                type="email"
                id="email"
                className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                placeholder="mustername@mail.com"
                required
              />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">
                Betreff
              </label>
              <input
                type="text"
                id="subject"
                className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-indigo-500"
                placeholder="Wie können wir helfen?"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">
                Ihre Nachricht
              </label>
              <textarea
                id="message"
                className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="Schreiben Sie eine Nachricht..."
              ></textarea>
            </div>
            <button
              data-aos="fade-right"
              type="submit"
              className="shadow-md shadow-gray-500 py-3 px-5 text-md font-medium text-center text-white bg-blue-700 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
            >
              Nachricht senden
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-800 shadow text-center">
        <ul className="pt-4">
          <li className="p-0">
            <p className="text-gray-100 text-xs font-light">
              Ferienhaus "Die Usedomperle"
            </p>
          </li>
          <li className="p-0">
            <p className="text-gray-100 text-xs font-light">
              Kiefernweg 9, 17449 Peenemünde {"(Dünenresidenz Karlshagen)"}
            </p>
          </li>
          <li className="p-0">
            <p className="text-gray-100 text-xs font-light">01520-8870816</p>
          </li>
          <li className="p-0">
            <a
              href="mailto:info@die-usedomperle"
              className="text-indigo-300 text-xs font-light"
            >
              info@die-usedomperle.de
            </a>
          </li>
        </ul>

        <div className="h-24 w-full mx-auto max-w-screen-xl p-4 flex items-end justify-center">
          <span className="text-sm text-gray-100 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a
              href="https://aecht.media"
              target="_blank"
              className="hover:none text-white font-extrabold"
            >
              ächtmedia™
            </a>
            . Alle Rechte vorbehalten.
          </span>
        </div>
      </footer>
    </>
  );
}

export default App;
