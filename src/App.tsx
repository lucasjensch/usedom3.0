import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useRef } from 'react';
import './App.css'
import Gallery from './gallery';
import {
  Ripple,
  initTE,
  Carousel,
} from "tw-elements";





function App() {

  useEffect(() => {
    // Create the first script element
    const script: HTMLScriptElement = document.createElement('script');
    script.src = 'https://www.ferienhausmiete.de/frontend/dist/src/js/modules/widget_price_view.min.js?id=47780';
    script.async = true;
    document.body.appendChild(script);

    // Cleanup: remove the scripts and container when the component is unmounted
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    const script: HTMLScriptElement = document.createElement('script');
    script.src = 'https://www.ferienhausmiete.de/verwalten/widgets/widgets.js?id=47780&lang=1&months=12&preview=36';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);
  useEffect(() => {
    // Create the first script element
    const script: HTMLScriptElement = document.createElement('script');
    script.src = 'https://www.ferienhausmiete.de/verwalten/widgets/widgets.js?id=47780&lang=1&months=12&preview=36';
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

  initTE({ Ripple });
  initTE({ Carousel });


  const mybutton: ButtonElement | null = document.getElementById("btn-back-to-top");


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
        className="z-40 !fixed bottom-5 right-5 hidden rounded-full bg-indigo-600 p-3 text-xs font-medium uppercase leading-tight text-white shadow-md transition duration-150 ease-in-out hover:bg-indigo-700 hover:shadow-lg focus:bg-indigo-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-indigo-800 active:shadow-lg"
        id="btn-back-to-top">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          className="h-4 w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512">
          <path
            fill="currentColor"
            d="M34.9 289.5l-22.2-22.2c-9.4-9.4-9.4-24.6 0-33.9L207 39c9.4-9.4 24.6-9.4 33.9 0l194.3 194.3c9.4 9.4 9.4 24.6 0 33.9L413 289.4c-9.5 9.5-25 9.3-34.3-.4L264 168.6V456c0 13.3-10.7 24-24 24h-32c-13.3 0-24-10.7-24-24V168.6L69.2 289.1c-9.3 9.8-24.8 10-34.3.4z"></path>
        </svg>
      </button>
      <section className='min-h-screen flex justify-center max-w-5xl mx-auto'>
        <div className='max-w-5xl border border-red-500  flex justify-center items-end '>
          <div className='px-4 pb-20 border-blue-500 border bg-black/40'>
            <h1 className='text-gray-100 text-6xl uppercase font-bold'>Die Usedomperle</h1>
            <p className='text-lg text-gray-100'>Ihr exklusives Ferienhaus in der Dünenresidenz auf der Insel Usedom.</p>
          </div>
        </div>
      </section>
      <section className='bg-white min-h-screen'>
        <div className="">
          <Gallery></Gallery>
        </div>
      </section>
      <section className='bg-gray-800 min-h-screen rounded-xl shadow-lg shadow-gray-500'>
        <div></div>
      </section>
      {/* Start of contact-section */}
      <section className="py-24" id='contact'>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-4xl ">
          <div className="min-w-4xl">
            <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Kontaktieren Sie uns</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl pt-4 pb-10">Haben Sie Probleme mit der Buchung? Oder wollen Sie uns einfach nur Feedback geben? Wir stehen für Sie bereit.</p>
          </div>

          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Ihre Email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-md rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="mustername@mail.com" required />
            </div>
            <div>
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-300">Betreff</label>
              <input type="text" id="subject" className="block p-3 w-full text-md text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-indigo-500" placeholder="Wie können wir helfen?" required />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-md font-medium text-gray-900 dark:text-gray-400">Ihre Nachricht</label>
              <textarea id="message" className="block p-2.5 w-full text-md text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Schreiben Sie eine Nachricht..."></textarea>
            </div>
            <button data-aos="fade-right" type="submit" className="shadow-md shadow-gray-500 py-3 px-5 text-md font-medium text-center text-white bg-indigo-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Nachricht senden
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-800 shadow text-center">
        <ul className='pt-4'>
          <li>
            <p className="text-gray-100 text-xs font-light">Ferienhaus "Die Usedomperle"</p>
          </li>
          <li>
            <p className="text-gray-100 text-xs font-light">Kiefernweg 9, 17449 Peenemünde {"(Dünenresidenz Karlshagen)"}</p>
          </li>
          <li>
            <p className="text-gray-100 text-xs font-light">01520-8870816</p>
          </li>
          <li>
            <a href="mailto:info@die-usedomperle" className="text-indigo-300 text-xs font-light">info@die-usedomperle.de</a>
          </li>
        </ul>

        <div className="h-24 w-full mx-auto max-w-screen-xl p-4 flex items-end justify-center">

          <span className="text-sm text-gray-100 sm:text-center dark:text-gray-400">© 2023 <a href="https://aecht.media" target="_blank" className="hover:none text-white font-extrabold">ächtmedia™</a>. Alle Rechte vorbehalten.
          </span>
        </div>
      </footer>
    </>
  )
}

export default App

