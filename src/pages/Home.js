import React from 'react';
import { Link } from 'react-router-dom';
import landscape01 from '../images/landscape01.jpg';
import landscape02 from '../images/landscape02.jpg';
import landscape03 from '../images/landscape03.jpg';


const Home = () => {
  return (
    <div className="flex flex-col font-kanit">
      <p className="px-6 py-6 text-base font-semibold text-center text-blue-900 sm:text-lg">Este es un sitio colaborativo en el cual podrás encontrar experiencias y opiniones sobre distintos destinos turísticos. <br/> Envíanos tus propias experiencias para que otros usuarios puedan conocer destinos potenciales y tomar la mejor decisión posible para su próximo viaje!</p>
      <div id="carouselExampleSlidesOnly" className="relative w-2/6 pb-8 left-1/3 carousel slide" data-bs-ride="carousel">
        <div className="relative overflow-hidden border rounded-2xl carousel-inner">
          <div className="relative float-left w-full carousel-item active">
            <img
              src={landscape01}
              className="block w-full h-full"
              alt="Landscape"
            />
          </div>
          <div className="relative float-left w-full carousel-item">
            <img
              src={landscape02}
              className="block w-full"
              alt="Landscape"
            />
          </div>
          <div className="relative float-left w-full carousel-item">
            <img
              src={landscape03}
              className="block w-full"
              alt="Landscape"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-between mb-4 sm:flex-row sm:justify-evenly">
        <Link to="/UploadTravel"><button className="p-2 m-2 text-xs text-white border rounded-lg hover:font-semibold bg-violet-800 border-violet-400 hover:text-black hover:bg-violet-400 hover:border-violet-800 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-md hover:shadow-black sm:text-base">Compartir una experiencia</button></Link>
        <Link to="/FindCountry"><button className="p-2 m-2 text-xs text-white border rounded-lg hover:font-semibold bg-rose-800 border-rose-400 hover:text-black hover:bg-rose-400 hover:border-rose-800 hover:-translate-y-1 hover:-translate-x-1 hover:shadow-md hover:shadow-black sm:text-base">Buscar un destino</button></Link>
      </div>
      <p className="mt-4 text-sm text-center">Por favor tener en cuenta que la información aquí compartida es sólo de carácter indicativo y corresponde a testimonios y experiencias particulares de distintos usuarios.</p>
    </div>
  )
}

export default Home