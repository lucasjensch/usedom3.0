import React from "react";

const RentalTerms: React.FC = () => {
    return (

        <>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-blue-700">Mietbedingungen</h1>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">1. Vertragsabschluss</h2>
                    <p>
                        Ihre Anmeldung kann telefonisch, mündlich, schriftlich oder per E-Mail
                        erfolgen. Für uns ist der Abschluss des Mietvertrages verbindlich,
                        wenn wir Ihnen die Dauer und den Preis der Beherbergung schriftlich
                        mitgeteilt haben, der Mietvertrag durch Sie in zweifacher Ausfertigung
                        unterzeichnet wurde und ein gegengezeichnetes Exemplar bei Ihnen
                        eingegangen ist.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">2. Zahlungsmodalitäten</h2>
                    <p>
                        Innerhalb einer Woche ist die Anzahlung in Höhe von 30 % des
                        Gesamtpreises zu tätigen, vier Wochen vor Anreise erfolgt die
                        Restzahlung. Kurzfristige Buchungen werden bei Anreise bar bezahlt
                        oder nach Vereinbarung.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">3. Anreise / Abreise</h2>
                    <p>
                        Die Haus- / Schlüsselübergabe erfolgt vor Ort. Die Anreise sollte ab
                        16:00 Uhr und die Abreise bis 10:00 Uhr erfolgen.
                    </p>
                    <p>
                        Vor Abreise hat der Mieter noch folgende Arbeiten selbst zu
                        erledigen: Abziehen der Bettwäsche, Spülen des Geschirrs, Reinigung
                        des Kamins, Reinigung des Grills, Entleeren der Papierkörbe und
                        Mülleimer, Verbringen des Mülls zu den Abfalltonnen und besenreine
                        Übergabe des Hauses.
                    </p>
                </section>

                {/* Weitere Abschnitte wie Pflichten des Mieters, Kurtaxe, Reiserücktritt etc. */}
                {/* Beispiel für einen weiteren Abschnitt */}
                <section className="mb-6">
                    <h2 className="text-xl font-semibold">10. Stornierungskosten</h2>
                    <p>
                        Wir berechnen bei Rücktritt bis 4 Wochen vor Reiseantritt 30 % des
                        Mietpreises. Bei späterem Rücktritt wird der volle Mietpreis
                        berechnet. Sollte für den gebuchten Zeitraum eine Neuvermietung
                        möglich sein, berechnen wir lediglich 10 % des Mietpreises als
                        Bearbeitungsgebühr. Bei Teilvermietung werden die Stornierungsgebühren
                        nur für den nicht neuvermieteten Zeitraum berechnet!
                    </p>
                </section>

                <p className="text-gray-500">Karlshagen, Oktober 2022</p>
            </div>
            <div className="container mx-auto p-6">
                <h1 className="text-3xl font-bold mb-6 text-blue-700">Datenschutzerklärung</h1>
                <p className="mb-4">
                    Der Betreiber dieser Seite nimmt den Schutz Ihrer persönlichen Daten
                    sehr ernst. Ich behandle Ihre personenbezogenen Daten vertraulich und
                    entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser
                    Datenschutzerklärung.
                </p>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Umgang mit personenbezogenen Daten</h2>
                    <p>
                        Personenbezogene Daten dienen ausschließlich der Vertragsbegründung,
                        inhaltlichen Ausgestaltung, Durchführung oder Abwicklung des
                        Vertragsverhältnisses (Art. 6 I b DSGVO). Darüber hinaus werden
                        personenbezogene Daten nur verarbeitet, soweit ich hierzu Ihre
                        Einwilligung erhalten habe (Art. 6 I a DSGVO).
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Daten zur Leistungserbringung</h2>
                    <p>
                        Ich erhebe und verarbeite ausschließlich solche personenbezogenen
                        Daten, die zu einer Leistungserbringung und deren Abwicklung
                        erforderlich sind.
                    </p>
                </section>

                <section className="mb-6">
                    <h2 className="text-xl font-semibold">Dauer der Speicherung</h2>
                    <p>
                        Ich speichere Ihre personenbezogenen Daten nach Beendigung des Zwecks,
                        für welchen die Daten erhoben wurden, nur solange, wie dies auf Grund
                        der gesetzlichen (insbesondere steuerrechtlichen) Vorschriften
                        erforderlich ist.
                    </p>
                </section>
                <h1 className="text-3xl font-bold mb-6 text-blue-700">Impressum</h1>
                <p className="">
                    Anbieter gemäß § 5 TMG: <br />
                    Mario Jensch <br />
                    Ahrensfelder Dreieck 15 <br />
                    16356 Ahrensfelde      </p>


                <h2 className="text-xl font-semibold">Kontakt</h2>
                <p>
                    Telefon: +49 (0) 1520-8870816 <br />
                    E-Mail: info@die-usedomperle.de
                </p>

            </div>
            <footer className="bg-gray-900 text-gray-300 py-10">
                <div className="container mx-auto px-6 pt-8 lg:px-8">
                    <div className="flex flex-wrap justify-between gap-8">
                        {/* Logo and Description */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <img className="w-56" src="../src/assets/logo_transparent.png" alt="" />
                            <p className="text-gray-400">
                                Entspannen Sie sich in unserem gemütlichen Ferienhaus direkt am Strand von Usedom.
                                Perfekt für eine Auszeit am Meer.
                            </p>
                        </div>

                        {/* Links */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <h4 className="text-lg font-semibold text-white mb-3">Navigation</h4>
                            <ul className="space-y-2">
                                <li><a href="index.html" className="hover:text-white">Startseite</a></li>
                                <li><a href="index.html" className="hover:text-white">Ausstattung</a></li>
                                <li><a href="index.html" className="hover:text-white">Preise und Belegung</a></li>
                                <li><a href="index.html" className="hover:text-white">Fotos</a></li>
                                <li><a href="index.html" className="hover:text-white">Kontakt</a></li>
                            </ul>
                        </div>


                        {/* Contact Information */}
                        <div className="w-full sm:w-1/2 lg:w-1/4">
                            <h4 className="text-lg font-semibold text-white mb-3">Kontakt</h4>
                            <ul className="space-y-2">
                                <li>Email: <a href="mailto:info@usedomperle.de" className="hover:text-white">info@usedomperle.de</a></li>
                                <li>Telefon: <a href="tel:+4915208870816" className="hover:text-white">+49 1520 887 081 6</a></li>
                                <li>Adresse: Kiefernweg 9 - 17449 Peenemünde (Dünenresidenz Karlshagen)</li>
                            </ul>
                        </div>
                    </div>

                    {/* Bottom Footer */}
                    <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-sm">
                        &copy; {new Date().getFullYear()} Usedomperle. Alle Rechte vorbehalten. | made by <a href="https://ächt.media">ächt media</a>
                    </div>
                </div>
            </footer>
        </>

    );
};

export default RentalTerms;
