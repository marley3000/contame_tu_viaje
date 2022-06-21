import React from 'react';
import FormUpload from "../Components/FormUpload";
import { saveDestination } from "../Services/Services";

const handleSubmit = (data) => {
  saveDestination(data)
}

const uploadTravel = () => {
  return (
    <div>
      <h2 className="m-4 text-3xl font-bold text-center text-blue-900 font-kanit">CARGA TU VIAJE!</h2>
      <h5 className="font-bold text-center font-kanit text-violet-800">Aquí puedes cargar tu experiencia de viaje. Recuerda que mientras más información incluyas, los viajeros podrán tomar mejores decisiones respecto a sus próximos destinos.</h5>
      <FormUpload handleSubmit={handleSubmit} />
    </div>
  )
}

export default uploadTravel