import React, { useState } from "react";



function Gallery() {

    return (
        <>
            <div id="gallery" className="max-w-[1140px] w-full m-auto p-4 py-16">
                <h2 className="py-6 text-3xl md:text-4xl tracking-tight font-extrabold text-center text-gray-100 dark:text-white">Gallerie</h2>
                <div className="grid md:grid-cols-5 gap-4">
                    <div className="md:col-span-3 col-span-2 row-span-2">
                        <img className="w-full h-full object-cover" src="../src/assets/Haus_seite_2.jpg" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-full object-cover" src="../src/assets/neue Bilder Usedomperle/schlafzimmer1.png" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-full object-cover" src="../src/assets/neue Bilder Usedomperle/lampe_dachgeschoss.png" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-full object-cover" src="../src/assets/neue Bilder Usedomperle/couch.png" alt="" />
                    </div>
                    <div>
                        <img className="w-full h-full object-cover" src="../src/assets/neue Bilder Usedomperle/Schlafzimmer2.png" alt="" />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Gallery;
