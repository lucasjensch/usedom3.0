import React, {useState} from 'react';
import './App.css'



function App() {

  const [popup, openPopup] = React.useState(false);

  return (
    <>
      <section id='home' className="bg-blue-300 h-screen pl-16 pr-16 overflow-hidden pt-36 bg-cover bg-center">
        <div className='max-w-lg mx-auto'>
          <h1 className='text-7xl font-bold'>Willkommen in der Usedomperle</h1>
          <p>Ihrem exklusiven Ferienhaus auf Usedom.</p>
          <div className="">
            <button>Buchen Sie Ihren Urlaub</button>
          </div>
        </div>
      </section>

      <section id='ausstattung' className='h-screen'>
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
              <button onClick ={() => openPopup(true)} className='pt-4 text-indigo-500 font-bold'>Mehr Informationen </button>
            </div>
          </div>
        </div>
        
        {popup ?<div className="fixed top-0 bg-black/50 w-full h-screen flex items-center justify-center z-99">
            <div className="bg-white w-10/12 h-2/3 flex justify-center">
              
              <button onClick ={() => openPopup(false)} className='absolute w-12 h-12' ><img className='' src="src/assets/icon-close.svg" alt="close" /></button>
              <div className='p-5'>
                <h2 className='text-3xl font-semibold'>Rund ums Haus</h2>
                <p>Auf der Terrasse befinden sich Gartenmobilar und ein Strandkorb</p>
              </div>
            </div>
          </div> :null}

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src="./src/assets/Esstisch_Couch.jpg" alt="Modern building architecture" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">Incredible accommodation for your team</p>
              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
          </div>
        </div>

        <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl mt-6">
          <div className="md:flex">
            <div className="md:shrink-0">
              <img className="h-48 w-full object-cover md:h-full md:w-48" src="./src/assets/Schlafzimmer2.jpg" alt="Modern building architecture" />
            </div>
            <div className="p-8">
              <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Company retreats</div>
              <p className="block mt-1 text-lg leading-tight font-medium text-black">Incredible accommodation for your team</p>
              <p className="mt-2 text-slate-500">Looking to take your team away on a retreat to enjoy awesome food and take in some sunshine? We have a list of places to do just that.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default App
