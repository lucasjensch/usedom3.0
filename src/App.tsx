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
  interface Review {
    name: string;
    date: string;
    content: string;
    rating: number; // Bewertung von 1 bis 5
  }

  const reviews: Review[] = [
    {
      name: "Anna Müller",
      date: "15. August 2023",
      content: "Ein wunderschönes Ferienhaus! Die Ausstattung ist top und die Lage direkt am Strand ist perfekt. Wir kommen gerne wieder!",
      rating: 5,
    },
    {
      name: "Max Schmidt",
      date: "22. September 2023",
      content: "Sehr gemütlich und gut ausgestattet. Die Sauna im Badezimmer war ein tolles Highlight nach einem Tag am Strand.",
      rating: 4,
    },
    {
      name: "Julia Meier",
      date: "10. Oktober 2023",
      content: "Wir hatten einen tollen Aufenthalt. Die Fahrräder waren ein super Zusatz, um die Umgebung zu erkunden.",
      rating: 5,
    },
    {
      name: "Johann Kreider",
      date: "12. März 2019",
      content: "Toll! Einfach eine super schöne Lage und eine moderne Ausstattung. Wir kommen wieder.",
      rating: 4,
    },
  ];

  interface ContactFormData {
    name: string;
    email: string;
    message: string;
  }

  const [formData, setFormData] = useState<ContactFormData>({ name: '', email: '', message: '' });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Hier könnte eine API-Anfrage erfolgen
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' }); // Zurücksetzen des Formulars
  };

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

  const [FAQ1, setFAQ1] = useState(false);

  const imageUrls = [
    "../src/assets/neue Bilder Usedomperle/Eingangstür.png",
    "../src/assets/neue Bilder Usedomperle/Schuppen.png",
    "../src/assets/neue Bilder Usedomperle/Haus-Seitenprofil.png",
    "../src/assets/neue Bilder Usedomperle/Usedomperle-outdoor.png",
    "../src/assets/neue Bilder Usedomperle/EG_Bad.png",
    "../src/assets/neue Bilder Usedomperle/EG_Bad_2.png",
    "../src/assets/neue Bilder Usedomperle/EG_Tisch.png",
    "../src/assets/neue Bilder Usedomperle/EG_Tisch_Bild.png",
    "../src/assets/neue Bilder Usedomperle/EG_Couch.png",
    "../src/assets/neue Bilder Usedomperle/EG_Fernseher.png",
    "../src/assets/neue Bilder Usedomperle/1OG_Bett1.png",
    "../src/assets/neue Bilder Usedomperle/1OG_Bett2.png",
    "../src/assets/neue Bilder Usedomperle/1OG_Bad.png",
    "../src/assets/neue Bilder Usedomperle/1OG_Bad2.png",
    "../src/assets/neue Bilder Usedomperle/1OG_Sauna.png",
    "../src/assets/neue Bilder Usedomperle/1OG_Flur.png",
    "../src/assets/neue Bilder Usedomperle/1OG_Schlaf.png",
    "../src/assets/neue Bilder Usedomperle/1OG_Schlaf2.png",
    "../src/assets/neue Bilder Usedomperle/Schlafzimmer3.png",
    "../src/assets/neue Bilder Usedomperle/lampe_dachgeschoss.png",
    "../src/assets/neue Bilder Usedomperle/2OG_Schuppen.png",
  ]



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

      <section>
        <div className="flex flex-col justify-center items-center mx-auto bg-wallpaper min-h-[80vh] bg-cover bg-center">
          <h1 className="text-9xl text-white font-extrabold">Die Usedomperle</h1>
          <p className="text-white text-2xl pt-5">Ihr exklusives Ferienhaus direkt am Strand.</p>
        </div>
      </section>

      <section >
        <div className="max-w-[1100px] mx-auto py-20">
          <h2 className="text-3xl pb-10">Ihr exklusives Ferienhaus direkt in Karlshagen.</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 pb-10">
            <img className="row-span-2 col-span-2" src="../src/assets/couch_fernseher.jpg" alt="" />
            <img src="../src/assets/neue Bilder Usedomperle/1OG_Bett1.png" alt="" />
            <img src="../src/assets/neue Bilder Usedomperle/lampe_dachgeschoss.png" alt="" />
            <img className="-mt-[5px]" src="../src/assets/Hintergrund_Haus.jpg" alt="" />
            <img className="-mt-[5px]" src="../src/assets/Haus_Terrasse_3.jpg" alt="" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 pt-10 min-h-screen">
            <div className="col-span-2 flex flex-col items-start">
              <h2 className="text-3xl">Exklusive Ausstattung für Ihren Traumurlaub.</h2>
              <p className="text-xl">Platz für 6 Gäste, 3 Schlafzimmer, 3 Bäder</p>

              <div className="pb-8 pt-8 w-[90%]">
                <div className="my-5 border-t border-black/20 pt-5">
                  <p className="text-xl">Unschlagbare Lage direkt am Strand</p>
                  <p>Sie können das Meer innerhalb von wenigen Minuten zu Fuß erreichen.</p>
                </div>
                <div className="my-5">
                  <p className="text-xl">Exklusvie Ausstattung für einen Traumurlaub</p>
                  <p>Genießen Sie Komfort und Gemütlichkeit in der Usedomperle.</p>
                </div>
                <div className="my-5 border-b border-black/20 pb-5">
                  <p className="text-xl">Inklusive technischer Ausstattung</p>
                  <p>Kostenloses WLAN, Smart-TV, BlueRay-Player, etc.</p>
                </div>
              </div>
              <div className="w-[90%] border-b border-black/20 pb-5">
                <p>Von Mai bis September steht Ihnen ein Strandkorb am Strand zur Verfügung, um entspannte Tage in der Sonne zu genießen. Das Ferienhaus ist für die Belegung von maximal 6 Personen ausgelegt, wobei Kleinkinder als Personen zählen. Es sind weitere Aufbettungen gegen Aufpreis möglich.
                  Haustiere sind in diesem Haus nicht gestattet. Die Wohn- und Nutzfläche beträgt ca. 100 m² und bietet Ihnen eine komfortable Fußbodenheizung im gesamten Haus.
                  Im ersten Obergeschoss befinden sich zwei Schlafzimmer mit Betten in der Größe von 1,80 m x 2 m. Im zweiten Obergeschoss gibt es ein weiteres Schlafzimmer mit einem Bett derselben Größe.
                  Das Ferienhaus verfügt über zwei Bäder:
                </p>
                <button className="underline mt-4">Mehr lesen...</button>
              </div>

              <div className="">
                <h2 className="text-3xl pt-8">Diese Ausstattung können wir bieten</h2>
                <div className="grid grid-cols-4 grid-rows-3">

                </div>
              </div>


            </div>
            <div className="w-full h-[400px] flex flex-col sticky top-[100px] border border-black/20 rounded-xl p-4 shadow-gray-300 shadow-lg">
              <p className="font-bold text-black text-3xl">ab 85€/Nacht</p>
              <p className="text-gray-500 pb-5">inkl. MWSt.</p>
              <a href="#contact" className="bg-blue-500 p-4 flex justify-center text-white rounded-xl text-xl">Reservieren</a>
            </div>
          </div>
        </div>
      </section>
      <section className="py-20 ">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Was unsere Gäste sagen</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reviews.map((review, index) => (
              <div key={index} className="p-6 border rounded-lg shadow-md bg-white">
                <div className="flex items-center mb-4">
                  <h3 className="text-lg font-semibold">{review.name}</h3>
                  <span className="ml-4 text-gray-500">{review.date}</span>
                </div>
                <div className="flex items-center mb-2">
                  {/* Sterne-Bewertung */}
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 15.27L16.18 20l-1.64-7.03L20 8.24l-7.19-.61L10 1 7.19 7.63 0 8.24l5.46 4.73L3.82 20z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700">{review.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


      <section className="py-20">
        <div className="max-w-[1100px] mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Kontaktieren Sie uns</h2>
          {submitted && <p className="mb-4 text-green-600 text-center">Vielen Dank für Ihre Nachricht!</p>}
          <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-Mail</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">Nachricht</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              />
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition">
              Absenden
            </button>
          </form>
          <div className="mt-10 text-center">
            <h3 className="text-xl font-bold">Kontaktinformationen</h3>
            <p className="text-gray-600">Telefon: +49 123 456 7890</p>
            <p className="text-gray-600">E-Mail: info@example.com</p>
            <p className="text-gray-600">Adresse: Musterstraße 1, 12345 Musterstadt</p>
          </div>
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
