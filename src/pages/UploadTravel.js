import React from 'react'

const uploadTravel = () => {
  return (
    <div>
      <h2 className="font-kanit text-blue-900 text-3xl font-bold m-4 text-center">CARGA TU VIAJE!</h2>
      <h5 className="font-kanit text-violet-800 font-bold text-center">Aquí puedes cargar tu experiencia de viaje. Recuerda que mientras más información incluyas, los viajeros podrán tomar mejores decisiones respecto a sus próximos destinos.</h5>
      <form className="grid grid-cols-2 gap-4 mt-8 mx-20 font-kanit rounded-md shadow-lg pl-28 py-4 bg-gradient-to-r from-purple-200 to-orange-200">
        <label for="name" className="text-violet-900">Nombre: <input type="text" className="rounded pl-2 text-violet-500" id="name" name="name"/></label>
        <label for="email" className="text-violet-900">Email: <input type="email" className="rounded pl-2 text-violet-500" id="email" name="email"/></label>
        <label for="destination" className="text-violet-900">País visitado: <input type="text" className="rounded pl-2 text-violet-500" id="destination" name="destination"/></label>
        <label for="number_travelers" className="text-violet-900">Cantidad de personas: <input type="number" className="rounded pl-2 text-violet-500" id="number_travelers" name="number_travelers"/></label>
        <label for="duration_days" className="text-violet-900">Cantidad de días: <input type="number" className="rounded pl-2 text-violet-500" id="duration_days" name="duration_days"/></label>
        <label for="valoration" className="text-violet-900">Valoración: <input type="number" className="rounded pl-2 text-violet-500" id="valoration" name="valoration"/></label>
        <label for="activities" className="text-violet-900">Actividades realizadas: <input type="text" id="activities" name="activities" className="h-36 w-4/5 rounded pl-2 text-violet-500"></input></label>
        <label for="opinion" className="text-violet-900">Opinión: <br/><input type="text" id="opinion" name="opinion" className="h-36 w-4/5 rounded pl-2 text-violet-500"></input></label>
        <label for="img" className="text-violet-900">Imagen del viaje: <input type="file" className="rounded pl-2 text-violet-500" id="img" name="img"/></label>
        <button type="submit" className="py-2 w-1/4 hover:-translate-y-1 hover:translate-x-1 hover:shadow-md hover:shadow-black font-medium text-white bg-gradient-to-r from-violet-700 to-rose-700 rounded-md border-1">Enviar</button>
      </form>
    </div>
  )
}

export default uploadTravel