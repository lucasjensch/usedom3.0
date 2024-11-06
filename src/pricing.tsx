import React from "react";
import { useEffect } from "react";

function Pricing() {
  const [priceTable2024, setPriceTable2024] = React.useState(false);
  const [priceTable2025, setPriceTable2025] = React.useState(false);


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

  return (
    <>
      <section
        id="pricing"
        className="py-8 rounded-b-xl bg-gray-900 shadow-lg w-full shadow-gray-400 text-center"
      >
        <div className="max-w-[1250px] mx-auto">
          <div className="px-4">
            <h2 className="py-6 text-3xl md:text-5xl tracking-tight font-extrabold text-center text-gray-100 dark:text-white">
              Mietpreise und Buchungskalender
            </h2>
            <p className=" font-light text-center text-gray-300 dark:text-gray-400 sm:text-xl pt-4 pb-10">
              Entdecken Sie die Übernachtungspreise pro Nacht und freuen Sie
              sich auf Ihren Urlaub.
            </p>
          </div>

          <div className="grid grid-cols-1 py-6 md:flex md:justify-between items-center gap-1 ">
            <div className=" flex mx-auto py-8 px-2 md:h-[450px] md:mb-8">
              <div className="max-w-sm flex items-center md:h-full bg-white border border-gray-200 rounded-xl  dark:bg-gray-800 dark:border-gray-700 ">
                <div className="p-5">
                  <p className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                    Mietpreise für das Jahr 2024
                  </p>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Buchen Sie Ihren Urlaub schon ab 90€
                  </p>
                  <button
                    onClick={() => setPriceTable2024(true)}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Unsere Preise
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
                  </button>
                </div>
              </div>
            </div>
            {priceTable2024 ? (
              <div className="h-screen flex justify-center items-center bg-black/50 z-50 fixed top-0 left-0 w-screen">
                <div className="flex flex-col p-8 bg-gray-100 h-5/6 w-11/12 rounded-xl relative">
                  <button
                    onClick={() => setPriceTable2024(false)}
                    className="absolute top-0 right-0 m-4"
                  >
                    <img
                      className="w-12"
                      src="../src/assets/icon-close.svg"
                      alt=""
                    />
                  </button>
                  <div className="pb-8">
                    <h2 className=" font-extrabold text-3xl md:text-4xl">
                      2024
                    </h2>
                    <p className="hidden md:block">
                      Die dargestellten Preise werden pro Nacht berechnet.
                    </p>
                  </div>
                  <div className="mx-auto w-full">
                    <table className="table-auto w-full max-w-2xl mx-auto">
                      <tr className="bg-gray-900 text-white">
                        <th className="">von - bis</th>
                        <th>Preis pro Nacht</th>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">03.01 - 28.01.</td>
                        <td>90€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">28.01. - 24.03.</td>
                        <td>95€</td>
                      </tr>
                      <tr className="bg-gray-200 border-b border-gray-600">
                        <td className="">24.03. - 28.04.</td>
                        <td>100€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">28.04. - 16.06.</td>
                        <td>140€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">16.06. - 01.09.</td>
                        <td>195€</td>
                      </tr>
                      <tr className="bg-gray-200 border-b border-gray-600">
                        <td className="">01.09. - 06.10.</td>
                        <td>140€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">06.10. - 03.11.</td>
                        <td>100€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">03.11. - 22.12.</td>
                        <td>90€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">22.12. - 05.01.25</td>
                        <td>190€</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            ) : null}

            <div className=" flex mx-auto py-8 md:h-[530px] md:mb-8">
              <div className="max-w-sm flex items-center md:h-full bg-white border  border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700 ">
                <div className="p-8">

                  <div
                    id="ferienhausmiete-de-widget3-47780"
                    className="mx-auto"
                  >
                    <a
                      href="https://www.ferienhausmiete.de/47780.htm"
                      target="_blank"
                    >
                    </a>
                  </div>
                  <a
                    href="#contact"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Jetzt buchen
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
            </div>


            <div className="max-w-7xl mx-auto py-8 px-2 md:h-[450px] md:mb-8">
              <div className="max-w-sm md:h-full flex items-center bg-white border border-gray-200 rounded-xl shadow dark:bg-gray-800 dark:border-gray-700">
                <div className="p-5">
                  <h5 className="mb-2 text-2xl font-bold tracking-tight  text-gray-900 dark:text-white">
                    Mietpreise für das Jahr 2025
                  </h5>
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    Buchen Sie Ihren Urlaub schon ab 100€
                  </p>
                  <button
                    onClick={() => {
                      setPriceTable2025(true);
                    }}
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Unsere Preise
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
                  </button>
                </div>
              </div>
            </div>
            {priceTable2025 ? (
              <div className="h-screen flex justify-center items-center bg-black/50 z-50 fixed top-0 left-0 w-screen">
                <div className="flex flex-col p-8 bg-gray-100 h-5/6 w-11/12 rounded-xl relative">
                  <button
                    onClick={() => setPriceTable2025(false)}
                    className="absolute top-0 right-0 m-4"
                  >
                    <img
                      className="w-12"
                      src="../src/assets/icon-close.svg"
                      alt=""
                    />
                  </button>
                  <div className="pb-8">
                    <h2 className=" font-extrabold text-3xl md:text-4xl">
                      2025
                    </h2>
                    <p className="hidden md:block">
                      Die dargestellten Preise werden pro Nacht berechnet.
                    </p>
                  </div>
                  <div className="mx-auto w-full">
                    <table className="table-auto w-full max-w-2xl mx-auto">
                      <tr className="bg-gray-900 text-white">
                        <th className="">von - bis</th>
                        <th>Preis pro Nacht</th>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">05.01. - 30.03.</td>
                        <td>100€</td>
                      </tr>
                      <tr className="bg-gray-200 border-b border-gray-600">
                        <td className="">30.03. - 27.04.</td>
                        <td>115€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">27.04. - 22.06.</td>
                        <td>150€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">22.06. - 14.09.</td>
                        <td>210€</td>
                      </tr>
                      <tr className="bg-gray-200 border-b border-gray-600">
                        <td className="">14.09. - 05.10.</td>
                        <td>150€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300 ">
                        <td className="">05.10. - 02.11.</td>
                        <td>115€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">02.11. - 21.12.</td>
                        <td>100€</td>
                      </tr>
                      <tr className="bg-gray-200 border border-gray-300">
                        <td className="">21.12. - 04.06.26</td>
                        <td>90€</td>
                      </tr>
                    </table>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        </div>
      </section>
    </>
  );
}

export default Pricing;
