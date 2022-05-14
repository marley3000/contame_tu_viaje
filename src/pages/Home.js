import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="flex flex-col h-screen bg-stone-800">
      <h1 className="pt-16 text-4xl font-bold text-center text-orange-500 sm:text-5xl">CONTAME TU VIAJE</h1>
      <p className="pt-16 text-center text-lime-400">Este es un sitio colaborativo en el cual podrás encontrar experiencias y opiniones sobre distintos destinos turísticos. Por favor tener en cuenta que la información aquí compartida es sólo de carácter indicativo y corresponde a testimonios y experiencias particulares de distintos usuarios. <br/> <br/> <span className="text-lg text-emerald-300">Envíanos tus propias experiencias para que otros usuarios puedan conocer destinos potenciales y tomar la mejor decisión posible para su próximo viaje!</span></p>
      <div className="flex items-center pt-20 justify-evenly">
        <button className="p-2 font-bold text-white border rounded-lg bg-rose-800 border-rose-300 hover:text-black hover:bg-rose-300 hover:border-rose-800"><Link to="/UploadTravel">Compartir una experiencia</Link></button>
        <button className="p-2 font-bold text-white bg-indigo-800 border border-indigo-300 rounded-lg hover:text-black hover:bg-indigo-300 hover:border-indigo-800"><Link to="/FindCountry">Buscar un destino</Link></button>
      </div>
    </div>
  )
}

export default Home