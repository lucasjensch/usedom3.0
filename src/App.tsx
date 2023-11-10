import React, { useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import './App.css'
import {
  Ripple,
  initTE,
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
    AOS.init({
      duration: 800,
      // Set the duration of animations
    });
  }, []);

  interface ButtonElement extends HTMLElement {
    classList: DOMTokenList;
  }

  initTE({ Ripple });

  const [popup, openPopup] = React.useState(false);

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
          <h1 className='px-2 font-extrabold text-white text-5xl md:text-8xl text-center'>Willkommen in der Usedomperle</h1>
          <p className='px-2 font-semibold text-white text-xl pt-8 md:text-3xl text-center'>Dem exklusiven Ferienhaus direkt am Strand
            in der Dünenresidenz Karlshagen auf Usedom
          </p>
        </div>
        <div className="relative flex items-center justify-center h-screen overflow-hidden shadow-xl shadow-gray-400">
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

        <div className="grid grid-cols-1 py-24 lg:grid-cols-2 " data-aos="fade-right">
          <div className="px-8 pb-12 lg:w-8/12 mx-auto">
            <h2 className='font-extrabold text-3xl mb-16 md:text-4xl'>Die Usedomperle - Ihr Traumferienhaus für jede Jahreszeit</h2>
            <p className='font-light text-gray-500 text-lg'>
              Die Usedomperle ist ein traumhaftes Ferienhaus direkt am Strand.
              Genießen Sie Ihren Urlaub in dieser gemütlichen Oase, die alles bietet, was Sie für einen erholsamen Aufenthalt benötigen.
              Von atemberaubenden Meerblick bis hin zu modernen Annehmlichkeiten - die Usedomperle lässt keine Wünsche offen.
            </p>
            <div className='h-20'></div>
            <a href="#about" className='shadow-md shadow-gray-500 py-3 px-5 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-indigo-700 hover:text-white'>
              Mehr Über Uns
            </a>
          </div>
          <div data-aos="fade-left">
            <img className='scale-125 ' src="../src/assets/map.svg" alt="" />
          </div>
        </div>



      </section>
      <section id='about' className='min-h-screen py-24'>
        <div className='pb-16'>
          <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Unsere Ausstattung</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Haben Sie Probleme mit der Buchung? Oder wollen Sie uns einfach nur Feedback geben? Wir stehen für Sie bereit</p>

        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6" data-aos="fade-left">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src="./src/assets/Hintergrund_Haus.jpg" alt="Modern building architecture" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Rund ums Haus</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">Incredible accommodation for your team</p>
              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
              <button onClick={() => openPopup(true)} className='pt-4 text-indigo-500 font-bold'>Mehr Informationen &rarr; </button>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6" data-aos="fade-left">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src="./src/assets/Esstisch_Couch.jpg" alt="Modern building architecture" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">Incredible accommodation for your team</p>
              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
              <button onClick={() => openPopup(true)} className='pt-4 text-indigo-500 font-bold'>Mehr Informationen &rarr;</button>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6" data-aos="fade-left">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src="./src/assets/Schlafzimmer2.jpg" alt="Modern building architecture" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">Incredible accommodation for your team</p>
              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
              <button onClick={() => openPopup(true)} className='pt-4 text-indigo-500 font-bold'>Mehr Informationen &rarr;</button>
            </div>
          </div>
        </div>

      </section>

      <section className=''>
        <div className='flex items-center justify-center h-96 bg-parallax bg-fixed bg-cover p-5'>
          <h2 className='text-white text-3xl font-extrabold break-all md:text-4xl'>Freuen Sie sich auf Strandspaziergänge</h2>
        </div>
      </section>

      <section id='pricing' className='min-h-screen py-24 text-center'>
        <div className='max-w-4xl grid grid-cols-1 mx-auto'>

          <div>
            <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Preise & Belegung</h2>
            <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Haben Sie Probleme mit der Buchung? Oder wollen Sie uns einfach nur Feedback geben? Wir stehen für Sie bereit</p>
          </div>


          <div className=" overflow-x-auto pb-10">
            <h2 className='text-2xl font-bold p-4'>Preistabelle 2023</h2>
            <div className='mx-auto md:w-1/2'>
              <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">

                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                    <th scope="col" className="px-6 py-3">
                      von - bis
                    </th>
                    <th scope="col" className="px-6 py-3">
                      pro Nacht
                    </th>

                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      03.01 - 30.01.
                    </th>
                    <td className="px-6 py-4">
                      85€
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      03.01 - 30.01.
                    </th>
                    <td className="px-6 py-4">
                      85€
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      03.01 - 30.01.
                    </th>
                    <td className="px-6 py-4">
                      85€
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      03.01 - 30.01.
                    </th>
                    <td className="px-6 py-4">
                      85€
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      03.01 - 30.01.
                    </th>
                    <td className="px-6 py-4">
                      85€
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      03.01 - 30.01.
                    </th>
                    <td className="px-6 py-4">
                      85€
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      03.01 - 30.01.
                    </th>
                    <td className="px-6 py-4">
                      85€
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      03.01 - 30.01.
                    </th>
                    <td className="px-6 py-4">
                      85€
                    </td>
                  </tr>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      03.01 - 30.01.
                    </th>
                    <td className="px-6 py-4">
                      85€
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div id="ferienhausmiete-de-widget4-47780">
            <a href="https://www.ferienhausmiete.de/47780.htm" target="_blank" rel="noopener noreferrer">
              Die Usedomperle - Direkt am Strand
            </a>
          </div>

          <div id="fhm-price-calculator-47780">
            <a href="https://www.ferienhausmiete.de/47780.htm" target="_blank">Die Usedomperle - Direkt am Strand</a>
          </div>
        </div>

      </section>

      <section className='pt-24' id='reviews'>
        <div className="mx-auto text-center md:max-w-xl lg:max-w-4xl">
          <h3
            className="mb-6 text-3xl md:text-4xl font-extrabold text-neutral-800 dark:text-neutral-200">
            Rezensionen
          </h3>
          <p className="font-light text-gray-500 mb-6 pb-2 md:mb-12 md:pb-0">
            Uns ist wichtig was unsere Besucher von uns denken. Hierfür haben wir ein Paar Rezensionen
            für Sie aufgelistet, die die Erfahrung in der Usedomperle am besten beschreiben. Scheuen Sie also nicht und schreibe auch Sie gern eine Rezension.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-6 text-center mx-auto max-w-3xl md:grid-cols-2 py-8">

          <div className="bg-gray-100 p-6 rounded-xl shadow-lg shadow-black/30 mb-12 md:mb-0 w-60 justify-center items-center mx-auto">
            <div className="mb-6 flex justify-center">
              <img
                src="https://lh3.googleusercontent.com/a-/ALV-UjWyk5QyEaWRLpcKP4ZfXGb_F5H75vsX5iec8-HTyKYI4AI=w60-h60-p-rp-mo-br100"
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
              <li>
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
              <li>
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
              <li>
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
              <li>
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
              <li>
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
              <li>
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
              <li>
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
              <li>
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
              <li>
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
              <li>
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

      <section className="bg-white dark:bg-gray-900 py-24" id='contact'>
        <div className="py-8 lg:py-16 px-4 mx-auto max-w-3xl -md">
          <h2 className="mb-4 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">Kontaktieren Sie uns</h2>
          <p className="mb-8 lg:mb-16 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Haben Sie Probleme mit der Buchung? Oder wollen Sie uns einfach nur Feedback geben? Wir stehen für Sie bereit.</p>
          <form action="#" className="space-y-8">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Ihre Email</label>
              <input type="email" id="email" className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5" placeholder="mustername@mail.com" required />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Betreff</label>
              <input type="text" id="subject" className="block p-3 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 shadow-sm focus:ring-primary-500 focus:border-indigo-500" placeholder="Wie können wir helfen?" required />
            </div>
            <div className="sm:col-span-2">
              <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Ihre Nachricht</label>
              <textarea id="message" className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-indigo-500 focus:border-indigo-500" placeholder="Schreiben Sie eine Nachricht..."></textarea>
            </div>
            <button type="submit" className="shadow-md shadow-gray-500 py-3 px-5 text-sm font-medium text-center text-white bg-indigo-500 rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">
              Nachricht senden
            </button>
          </form>
        </div>
      </section>

      <footer className="bg-gray-300 rounded-lg shadow text-center">
        <ul className='pt-4'>
          <li>
            <p className="text-black text-sm font-light">Ferienhaus "Die Usedomperle"</p>
          </li>
          <li>
            <p className="text-black text-sm font-light">Kiefernweg 9, 17449 Peenemünde {"(Dünenresidenz Karlshagen)"}</p>
          </li>
          <li>
            <p className="text-black text-sm font-light">01520-8870816</p>
          </li>
          <li>
            <a href="mailto:info@die-usedomperle" className="text-indigo-600 text-sm font-light">info@die-usedomperle.de</a>
          </li>
        </ul>

        <div className="h-24 md:h-36 w-full mx-auto max-w-screen-xl p-4 flex items-end justify-center">

          <span className="text-sm text-black sm:text-center dark:text-gray-400">© 2023 <a href="https://aecht.media" target="_blank" className="hover:none text-indigo-700 font-bold">ächtmedia™</a>. Alle Rechte vorbehalten.
          </span>
        </div>
      </footer>
    </>
  )
}

export default App
