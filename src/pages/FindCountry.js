import { getDestination } from "../Services/Services";
import LandscapeAnimation from "../Components/LandscapeAnimation";
import ConsultCountry from "../Components/ConsultCountry";

const handleSubmit = (data) => {
  getDestination(data)
}

const FindCountry = () => {
  return (
    <div className="flex flex-col items-center justify-center text-center font-kanit">
      <h2 className="m-4 text-3xl font-bold text-blue-900">BUSCA TU DESTINO!</h2>
      <h5 className="font-bold text-violet-800">Ingresa el país al que desearías viajar y obtiene las opiniones y experiencias de otros viajeros.</h5>
      <LandscapeAnimation/>
      <ConsultCountry handleSubmit={handleSubmit} />
      <p className="text-sm text-violet-800 mt-4">Por favor tener en cuenta que la información aquí compartida es sólo de carácter indicativo y corresponde a testimonios y experiencias particulares de distintos usuarios.</p>
    </div>
  )
}

export default FindCountry