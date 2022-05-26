import barco from '../images/barco.png';
import nube1 from '../images/nube1.png';
import nube2 from '../images/nube2.png';
import nube3 from '../images/nube3.png';
import paisaje_playa from '../images/paisaje_playa.jpg';
import avion from '../images/avion.png';

const FindCountry = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center font-kanit">
      <h2 className="m-4 text-3xl font-bold text-blue-900">BUSCA TU DESTINO!</h2>
      <h5 className="font-bold text-violet-800">Ingresa el país al que desearías viajar y obtiene las opiniones y experiencias de otros viajeros.</h5>
      <div className="w-80 h-56 relative overflow-hidden bg-[#9AD7D8] rounded-md my-10">
        <img src={paisaje_playa} alt="PaisajePlaya" className="absolute object-cover w-full -bottom-2"/>
        <img src={barco} alt="Barco" className="absolute w-1/4 img-barco -bottom-2 -right-12"/>
        <img src={nube1} alt="Nube" className="absolute top-0 w-16 img-nube left-12"/>
        <img src={nube2} alt="Nube" className="absolute img-nube w-9 top-5 left-32"/>
        <img src={nube3} alt="Nube" className="absolute img-nube w-11 top-14 left-40"/>
        <img src={avion} alt="Avion" className="img-avion absolute top-8 -left-12 w-[45%]"/>
      </div>
      <form method="get" action="http://localhost:8080/api/verDestino/:destination" className="flex items-center justify-center">
        <input type="text" placeholder="Ingresa un país" className="py-2 mr-2 text-center rounded-lg shadow-sm shadow-black text-violet-500 bg-rose-50" id="destination" name="destination"/>
        <button type="submit" className="p-2 font-medium text-white rounded-md hover:-translate-y-1 hover:translate-x-1 hover:shadow-md hover:shadow-black bg-gradient-to-r from-violet-700 to-rose-700 border-1">Buscar</button>
      </form>
      <p className="absolute text-sm text-violet-800 bottom-8">Por favor tener en cuenta que la información aquí compartida es sólo de carácter indicativo y corresponde a testimonios y experiencias particulares de distintos usuarios.</p>
    </div>
  )
}

export default FindCountry