import React, { useState } from 'react';
import './App.css'



function App() {

  const [popup, openPopup] = React.useState(false);

  return (
    <>
      <section id='home' className="relative flex items-center justify-center h-screen overflow-hidden">
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
        <div className="z-10 w-10/12 break-words">
          <h1 className='text-white font-bold text-7xl md:text-9xl'>Die Usedomperle</h1>
          <p className='text-white font-semibold text-3xl md:text-3xl mt-12 max-w-4xl'>Ihr exklusives Ferienhaus direkt am Strand. Besuchen Sie uns in der Dünenresidenz in Karlshagen.</p>
          <div className="">
            <a href="#contact"><button className='bg-indigo-500 p-3 text-xl text-white font-semibold rounded-lg mt-20 shadow-md shadow-black hover:bg-indigo-600 delay-75'>Unsere Verfügbarkeit prüfen</button></a>
          </div>
        </div>

      </section>
      <section id='ausstattung' className='min-h-screen'>
        <div>
          <h2 className='text-black text-4xl font-bold pt-16 pb-16'>Unsere Ausstattung</h2>
        </div>
        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6">
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

        {popup ? <div className="fixed top-0 bg-black/30 w-full h-screen flex items-center justify-center z-99">
          <div className="bg-white w-10/12 h-2/3 flex justify-end">

            <button onClick={() => openPopup(false)} className='absolute w-12 h-12' ><img className='' src="src/assets/icon-close.svg" alt="close" /></button>
            <div className='p-5'>
              <h2 className='text-3xl font-semibold'>Rund ums Haus</h2>
              <p className=''>Auf der Terrasse befinden sich Gartenmobilar und ein Strandkorb. Außerdem steht für Sie ein Grill mit Utensilien bereit, sowie Fahrräder uns sämtliche Materialien im Holzschuppen.</p>
            </div>
          </div>
        </div> : null}

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6">
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

        {popup ? <div className="fixed top-0 bg-black/30 w-full h-screen flex items-center justify-center z-99">
          <div className="bg-white w-10/12 h-2/3 flex justify-end">

            <button onClick={() => openPopup(false)} className='absolute w-12 h-12' ><img className='' src="src/assets/icon-close.svg" alt="close" /></button>
            <div className='p-5'>
              <h2 className='text-3xl font-semibold'>Rund ums Haus</h2>
              <p className=''>Auf der Terrasse befinden sich Gartenmobilar und ein Strandkorb. Außerdem steht für Sie ein Grill mit Utensilien bereit, sowie Fahrräder uns sämtliche Materialien im Holzschuppen.</p>
            </div>
          </div>
        </div> : null}

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6">
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

        {popup ? <div className="fixed top-0 bg-black/30 w-full h-screen flex items-center justify-center z-99">
          <div className="bg-white w-10/12 h-2/3 flex justify-end">

            <button onClick={() => openPopup(false)} className='absolute w-12 h-12' ><img className='' src="src/assets/icon-close.svg" alt="close" /></button>
            <div className='p-5'>
              <h2 className='text-3xl font-semibold'>Rund ums Haus</h2>
              <p className=''>Auf der Terrasse befinden sich Gartenmobilar und ein Strandkorb. Außerdem steht für Sie ein Grill mit Utensilien bereit, sowie Fahrräder uns sämtliche Materialien im Holzschuppen.</p>
            </div>
          </div>
        </div> : null}
      </section>

      <section>
        <div className='flex items-center justify-center h-96 bg-parallax bg-fixed bg-cover'>
          <h2 className='text-white text-4xl font-bold'>Entspannen Sie sich und tanken Sie Sonne</h2>
        </div>
      </section>
      <section className='h-screen'>

      </section>
    </>
  )
}

export default App
