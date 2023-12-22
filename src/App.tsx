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
      <section id='home'>
        <div className='absolute flex flex-col items-center justify-center h-screen w-full mx-auto overflow-hidden z-40'>
          <h1 className='px-2 font-extrabold text-white text-4xl md:text-8xl text-center uppercase'>Willkommen in der Usedomperle</h1>
          <p className='px-2 font-light text-white text-xl pt-8 md:text-3xl text-center'>Dem exklusiven Ferienhaus direkt am Strand
            in der Dünenresidenz Karlshagen auf Usedom
          </p>
        </div>
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 mb-8 z-40">
          <a href='#more' className="animate-bounce grid-cols-1 grid">
            <div className="w-6 h-6 border-b-2 border-r-2 border-gray-100 transform rotate-45 inline-block"></div>
            <div className="w-6 h-6 border-b-2 border-r-2 border-gray-100 transform rotate-45 inline-block"></div>
          </a>
        </div>
        <div className="relative flex items-center justify-center z-10 h-screen overflow-hidden shadow-xl shadow-gray-400">
          <video
            autoPlay
            loop
            muted
            className="absolute z-2 w-auto min-w-full min-h-full max-w-none"
          >
            <source
              src="../src/assets/intro_video.mp4"
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>


        </div>

        <div id='more' className="grid grid-cols-1 py-24 mx-auto" data-aos="fade-right">
          <div className="px-8 pb-12 lg:w-8/12 mx-auto">
            <h2 className='font-extrabold text-3xl md:text-4xl'>Die Usedomperle - Ihr Traumferienhaus für jede Jahreszeit</h2>
            <p className='font-light text-gray-500 text-lg py-12'>
              Die Usedomperle ist ein traumhaftes Ferienhaus direkt am Strand.
              Genießen Sie Ihren Urlaub in dieser gemütlichen Oase, die alles bietet, was Sie für einen erholsamen Aufenthalt benötigen.
              Von atemberaubenden Meerblick bis hin zu modernen Annehmlichkeiten - die Usedomperle lässt keine Wünsche offen.
            </p>
            <a href="#about" className='shadow-md shadow-gray-500 py-3 px-5 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-indigo-700 hover:text-white'>
              Mehr Über Uns
            </a>
          </div>
          <div data-aos="fade-left" data-aos-delay="200" className='mx-auto my-auto overflow-x-scroll pl-6'>

            <div className="flex flex-row gap-4 h-52">
              <div className='absolute z-20 w-screen'>
                <button className='bg-gray-300 w-6 rounded-full relative left-0'>{"<"}</button>
                <button className='bg-gray-300 w-6 rounded-full relative right-0'>{">"}</button>
              </div>
              <div className="h-44 w-44 border-red-500 border rounded-2xl shadow-lg shadow-black">
                <img src="../src/assets/neue Bilder Usedomperle/Eingangstür.png" alt="" className='rounded-2xl w-44 h-44 object-cover' />
              </div>
              <div className="h-44 w-44 border-red-500 border rounded-2xl shadow-lg shadow-black">
                <img src="../src/assets/neue Bilder Usedomperle/Kamin-indoor.png" alt="" className='rounded-2xl w-44 h-44 object-cover' />
              </div>
              <div className="h-44 w-44 border-red-500 border rounded-2xl shadow-lg shadow-black">
                <img src="../src/assets/neue Bilder Usedomperle/couch.png" alt="" className='rounded-2xl w-44 h-44 object-cover' />
              </div>
              <div className="h-44 w-44 border-red-500 border rounded-2xl shadow-lg shadow-black">
                <img src="../src/assets/neue Bilder Usedomperle/Schuppen-von-oben.png" alt="" className='rounded-2xl w-44 h-44 object-cover' />
              </div>

            </div>
          </div>
        </div>



      </section>
      <section className='bg-white min-h-screen'>
        <div className="">
        </div>
      </section>
      <section className='bg-gray-800 min-h-screen rounded-2xl shadow-lg shadow-gray-500'>
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

