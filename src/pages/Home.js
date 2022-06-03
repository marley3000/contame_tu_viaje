import React from 'react';
import { Link } from 'react-router-dom';
import Carousel from '../Components/Carousel';



const Home = () => {
  return (
    <div className="flex flex-col font-kanit">
      <p className="px-6 py-6 text-base font-semibold text-center text-blue-900 sm:text-lg">Este es un sitio colaborativo en el cual podrás encontrar experiencias y opiniones sobre distintos destinos turísticos. <br/> Envíanos tus propias experiencias para que otros usuarios puedan conocer destinos potenciales y tomar la mejor decisión posible para su próximo viaje!</p>
      <Carousel/>
      <div className="flex flex-col items-center justify-between mb-4 sm:flex-row sm:justify-evenly">
        <Link to="/UploadTravel"><button className="p-2 m-2 text-xs text-white border rounded-lg hover:font-semibold bg-violet-800 border-violet-400 hover:text-black hover:bg-violet-400 hover:border-violet-800 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-md hover:shadow-black sm:text-base">Compartir una experiencia</button></Link>
        <Link to="/FindCountry"><button className="p-2 m-2 text-xs text-white border rounded-lg hover:font-semibold bg-rose-800 border-rose-400 hover:text-black hover:bg-rose-400 hover:border-rose-800 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-md hover:shadow-black sm:text-base w-40 sm:w-52">Buscar un destino</button></Link>
      </div>
      <p className="text-sm text-violet-800 text-center mt-6">Por favor tener en cuenta que la información aquí compartida es sólo de carácter indicativo y corresponde a testimonios y experiencias particulares de distintos usuarios.</p>
    </div>
  )
}

export default Home