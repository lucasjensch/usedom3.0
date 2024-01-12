import React, { useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect, useRef } from "react";
import Gallery from "./gallery";
import Navigation from './navigation'
import Pricing from './pricing'
import "./App.css";



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
        <div className="w-full h-screen bg-wallpaper bg-no-repeat bg-cover">
          <div className="w-full h-full bg-gradient-to-b from-black/0 to-black/70"></div>
          <div className="max-w-[1140px] m-auto">
            <div className="absolute top-[30%] w-full md:-[50%] max-w-[600px] md:max-w-[800px] h-full flex flex-col text-white p-4">
              <h1 className="font-extrabold text-5xl xs:text-6xl lg:text-8xl">Die Usedomperle</h1>
              <h2 className="italic py-4 xxs:py-6">Ihr exklusives Ferienhaus direkt am Strand</h2>
              <p>
                Die Usedomperle, ein bezauberndes Ferienhaus auf der Insel Usedom, beeindruckt durch ihre erstklassige Ausstattung und charmante Atmosphäre. Mit stilvoller Einrichtung, moderner Technologie und einem idyllischen Ambiente bietet sie unvergessliche Urlaubsmomente.
              </p>
              <a href="#contact" className="bg-white w-max rounded-xl px-4 py-2 text-black hover:bg-gray-100 duration-150 decoration-none mt-6">Buchen Sie jetzt &rarr;</a>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="">
        <div className="max-w-[1140px] m-auto w-full flex text-center h-screen py-6 flex-col">
          <div className="px-4">
            <h2 className="mb-6 text-3xl md:text-4xl font-extrabold text-neutral-800  dark:text-neutral-200">Unsere Ausstattung</h2>
            <p className="">
</p>
          </div>
        </div>
      </section>

      <Pricing></Pricing>
      <Gallery></Gallery>

      {/*Start of Review section*/}
      <section className='mt-16 pt-8' id='reviews'>
        <div className="mx-auto text-center max-w-4xl">
          <h3
            className="mb-6 text-3xl md:text-4xl font-extrabold text-neutral-800 dark:text-neutral-200">
            Rezensionen
          </h3>
          <p className="mb-8 lg:mb-16 font-light text-center px-4 text-gray-500 dark:text-gray-400 sm:text-xl pt-4 pb-10">
            Uns ist wichtig, was unsere Besucher von uns denken. Daher haben wir einige Rezensionen für Sie zusammengestellt, die die Erfahrung in der Usedomperle optimal widerspiegeln.
            Zögern Sie also nicht und teilen Sie gerne auch Ihre eigenen Eindrücke in einer Rezension mit.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 text-center mx-auto max-w-3xl md:grid-cols-2 py-8" data-aos="fade-left">

          <div className="bg-gray-100 p-6 rounded-xl shadow-lg shadow-black/30 mb-12 md:mb-0 w-60 justify-center items-center mx-auto">
            <div className="mb-6 flex justify-center">
              <img
                src="../src/assets/elderly-man-icon.png"
                className="w-32 rounded-full shadow-lg shadow-gray-500 dark:shadow-black/30" />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Joachim Breuhahn</h5>
            <p className="mb-4 font-light text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2 text-black"
                viewBox="0 0 24 24">
                <path
                  d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              War dort ein schöner Sommerurlaub, herrlicher Strand und für Groß und Klein viele schöne Veranstaltungen
              und prima Minigolf-Anlage. Alles sehr empfehlenswert.
            </p>
            <ul className="mb-0 flex items-center justify-center">
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </li>

            </ul>
          </div>

          <div className="bg-gray-100 p-6 rounded-xl shadow-lg shadow-black/30 mb-12 md:mb-0 mx-auto w-60">
            <div className="mb-6 flex justify-center">
              <img
                src="https://www.shareicon.net/data/2017/01/06/868320_people_512x512.png"
                className="w-32 rounded-full shadow-lg shadow-gray-500 dark:shadow-black/30" />
            </div>
            <h5 className="mb-4 text-xl font-semibold">Gunnar Lindemann</h5>
            <p className="mb-4 font-light text-gray-500">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                className="inline-block h-7 w-7 pr-2 text-black"
                viewBox="0 0 24 24">
                <path
                  d="M13 14.725c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275zm-13 0c0-5.141 3.892-10.519 10-11.725l.984 2.126c-2.215.835-4.163 3.742-4.38 5.746 2.491.392 4.396 2.547 4.396 5.149 0 3.182-2.584 4.979-5.199 4.979-3.015 0-5.801-2.305-5.801-6.275z" />
              </svg>
              Ein super schönes Ferienhaus, gut ausgestattet, gepflegt, eine tolle Lage und ein kurzer Weg zum Strand!
            </p>
            <ul className="mb-0 flex items-center justify-center">
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </li>
              <li className="p-0">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-yellow-500">
                  <path
                    fill-rule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clip-rule="evenodd" />
                </svg>
              </li>
            </ul>
          </div>
        </div>

      </section>
      {/*End of Review section*/}

      {/* Start of contact-section */}
      <section className="py-20 min-h-screen" >
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-4xl ">
          <div className="min-w-4xl" id="contact">
            <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
              Kontaktieren Sie uns
            </h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl pt-4 pb-10">
              Haben Sie Probleme mit der Buchung? Oder wollen Sie uns einfach
              nur Feedback geben? Wir stehen für Sie bereit.
            </p>
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
