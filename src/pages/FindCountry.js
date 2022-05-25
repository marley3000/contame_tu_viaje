import barco from '../images/barco.png';
import nube1 from '../images/nube1.png';
import nube2 from '../images/nube2.png';
import nube3 from '../images/nube3.png';
import paisaje_playa from '../images/paisaje_playa.jpg';
import avion from '../images/avion.png';

const FindCountry = () => {
  return (
    <div className="font-kanit flex flex-col justify-center items-center text-center">
      <h2 className="text-blue-900 text-3xl font-bold m-4">BUSCA TU DESTINO!</h2>
      <h5 className="text-violet-800 font-bold">Ingresa el país al que desearías viajar y obtiene las opiniones y experiencias de otros viajeros.</h5>
      <div className="w-80 h-56 relative overflow-hidden bg-[#9AD7D8] rounded-md my-10">
        <img src={paisaje_playa} alt="PaisajePlaya" className="absolute -bottom-2 w-full object-cover"/>
        <img src={barco} alt="Barco" className="img-barco absolute w-1/4 -bottom-2 -right-12"/>
        <img src={nube1} alt="Nube" className="img-nube absolute w-16 top-0 left-12"/>
        <img src={nube2} alt="Nube" className="img-nube absolute w-9 top-5 left-32"/>
        <img src={nube3} alt="Nube" className="img-nube absolute w-11 top-14 left-40"/>
        <img src={avion} alt="Avion" className="img-avion absolute top-8 -left-12 w-[45%]"/>
      </div>
      <form className="flex justify-center items-center">
        <input type="search" placeholder="Ingresa un país" className="rounded-lg py-2 shadow-sm shadow-black text-violet-500 text-center bg-rose-50 mr-2" id="search" name="search"/>
        <button type="submit" className="p-2 hover:-translate-y-1 hover:translate-x-1 hover:shadow-md hover:shadow-black font-medium text-white bg-gradient-to-r from-violet-700 to-rose-700 rounded-md border-1">Buscar</button>
      </form>
      <p className="text-violet-800 text-sm absolute bottom-8">Por favor tener en cuenta que la información aquí compartida es sólo de carácter indicativo y corresponde a testimonios y experiencias particulares de distintos usuarios.</p>
    </div>
  )
}

export default FindCountry