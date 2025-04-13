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
        className="h-[95vh] flex flex-col justify-between relative bg-cover bg-center"
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
            className="mb-5 pl-5 text-sm underline tracking-widest flex items-center gap-2 text-white"
          >
            <img src={wsp} width={22} className="" />
            <span>3804712931</span>
          </a>
        </div>
      </div>
      {/* catálogo */}
      <div className="bg-white py-6 px-4 grid gap-6">
        {pantalones.map((p, index) => (
          <div key={index} className="rounded-2xl shadow-xl overflow-hidden">
            <img src={p.img} alt={p.nombre} className="w-full object-cover" />
            <div className="p-4">
              <h2 className="text-lg font-semibold text-gray-700">{p.nombre}</h2>
              <p className="text-gray-500">talles: {p.Talles}</p>
              <p className="text-pink-600 font-bold mt-2">{p.precio}</p>
            </div>
          </div>
        ))}
      </div>
      {/* footer */}
      <footer className="bg-gray-100 py-6 px-4 text-center text-sm text-gray-700 md:hidden">
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
