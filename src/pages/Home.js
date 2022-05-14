import React from 'react';
import { Link } from 'react-router-dom';
import landscape01 from '../images/landscape01.jpg';
import landscape02 from '../images/landscape02.jpg';
import landscape03 from '../images/landscape03.jpg';


const Home = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-r from-yellow-200 to-orange-200 font-kanit">
      <h1 className="pt-8 text-4xl font-bold text-center text-grey-900 sm:text-5xl">CONTAME TU VIAJE</h1>
      <div className="">
        <p className="px-6 py-6 text-sm font-semibold text-center text-orange-700 sm:text-base">Este es un sitio colaborativo en el cual podrás encontrar experiencias y opiniones sobre distintos destinos turísticos. Por favor tener en cuenta que la información aquí compartida es sólo de carácter indicativo y corresponde a testimonios y experiencias particulares de distintos usuarios. <br/> <br/> <span className="text-base text-red-700 sm:text-lg">Envíanos tus propias experiencias para que otros usuarios puedan conocer destinos potenciales y tomar la mejor decisión posible para su próximo viaje!</span></p>
      </div>

      <div id="carouselExampleSlidesOnly" className="relative w-2/6 pb-8 left-1/3 carousel slide" data-bs-ride="carousel">
        <div className="relative overflow-hidden border rounded-md carousel-inner">
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

      <div className="flex flex-col items-center justify-between pb-10 sm:flex-row sm:justify-evenly">
        <button className="p-2 m-2 text-xs text-white border rounded-lg hover:font-semibold bg-rose-800 border-rose-300 hover:text-black hover:bg-rose-300 hover:border-rose-800 sm:text-base"><Link to="/UploadTravel">Compartir una experiencia</Link></button>
        <button className="p-2 m-2 text-xs text-white border rounded-lg hover:font-semibold w bg-emerald-800 border-emerald-300 hover:text-black hover:bg-emerald-300 hover:border-emerald-800 sm:text-base"><Link to="/FindCountry">Buscar un destino</Link></button>
      </div>

    </div>
  )
}

export default Home