import wsp from './assets/logo_wsp.svg'
import ig from './assets/logo_ig.svg'
import fondo_home from './assets/fondo_home.jpg'
import { useState } from 'react'
import { data } from './data'

function App() {
  const [pantalones, setPantalones] = useState(data)

  return (
    <>
      {/* home */}
      <div
        className="h-[95vh] md:h-[45vh] flex flex-col justify-between relative bg-cover bg-center"
        style={{ backgroundImage: `url(${fondo_home})` }}
      >
        {/* Capa oscura encima */}
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        {/* Contenido encima de la capa oscura */}
        <div className="relative z-10 h-full flex flex-col justify-between">
          <p className="text-right pt-5 pr-5 uppercase text-white">Vaire</p>
          <h1 className="text-center text-5xl uppercase text-white">Catálogo</h1>
          <a
            href="https://wa.me/543804712931"
            target="_blank"
            rel="noopener noreferrer"
            className="mb-5 pl-5 text-sm underline flex items-center gap-2 text-white"
          >
            <img src={wsp} width={22} className="" />
            <span className='tracking-widest'>3804712931</span>
          </a>
        </div>
      </div>
      {/* catálogo */}
      <div className="py-10 px-10 grid gap-8 md:grid-cols-4">
        {pantalones.map((p, index) => (
          <div key={index} className="rounded-2xl overflow-hidden">
            <img src={p.img} alt={p.nombre} className="w-full md:h-[600px]" />
            <div className="p-4 flex flex-col rounded-b-2xl gap-4 border-r border-b border-l border-white">
              <div className='flex justify-between items-center'>
                <h2 className="text-2xl font-semibold uppercase tracking-widest text-white">{p.nombre}</h2>
                <p className="font-bold text-2xl">{p.precio}</p>
              </div>
              <div className='flex gap-5 justify-end'>{p.Talles.map((talle, index) => (
                <div key={index} className='p-2 border border-white rounded-full'>
                  <span>{talle}</span>
                </div>
              ))}</div>
            </div>
          </div>
        ))}
      </div>
      {/* footer */}
      <footer className="bg-gray-100 py-6 px-4 text-center text-sm text-gray-700">
        <div className="flex justify-center gap-6 items-center mb-2">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/vaire.arg/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <img src={ig} alt="Ig" width={23}/>
            @vaire.arg
          </a>

          {/* WhatsApp */}
          <a
            href="https://wa.me/543804712931"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:underline"
          >
            <img src={wsp} alt="WhatsApp" className="invert" width={22}/>
            3804712931
          </a>
        </div>
        <p className="text-xs text-gray-500 mt-5">© 2025 Vaire.</p>
      </footer>
    </>
  )
}

export default App
