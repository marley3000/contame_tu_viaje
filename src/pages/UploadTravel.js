

const uploadTravel = () => {
  return (
    <div>
      <h2 className="m-4 text-3xl font-bold text-center text-blue-900 font-kanit">CARGA TU VIAJE!</h2>
      <h5 className="font-bold text-center font-kanit text-violet-800">Aquí puedes cargar tu experiencia de viaje. Recuerda que mientras más información incluyas, los viajeros podrán tomar mejores decisiones respecto a sus próximos destinos.</h5>
      <form method="postTravel" action="/crear" className="grid gap-4 py-4 pl-4 mx-4 mt-8 rounded-md shadow-lg lg:grid-cols-2 sm:mx-10 lg:mx-20 font-kanit sm:pl-8 lg:pl-20 bg-gradient-to-r from-purple-200 to-orange-200">
        <label for="name" className="text-violet-900">Nombre: <input type="text" className="pl-2 rounded bg-rose-50 text-violet-500" id="name" name="name"/></label>
        <label for="destination" className="text-violet-900">País visitado: <input type="text" className="pl-2 rounded text-violet-500 w-36 bg-rose-50" id="destination" name="destination"/></label>
        <label for="number_travelers" className="text-violet-900">Cantidad de personas: <input type="number" className="w-12 pl-2 rounded text-violet-500 bg-rose-50" id="number_travelers" name="number_travelers"/></label>
        <label for="duration_days" className="text-violet-900">Cantidad de días: <input type="number" className="w-12 pl-2 rounded text-violet-500" id="duration_days" name="duration_days bg-rose-50"/></label>
        <label for="valoration" className="text-violet-900">Valoración: <input type="number" className="w-12 pl-2 rounded text-violet-500 bg-rose-50" id="valoration" name="valoration"/></label>
        <br/>
        <label for="activities" className="text-violet-900">Actividades realizadas: <br/><textarea placeholder="Enumere aquí las actividades realizadas..." id="activities" name="activities" className="w-2/3 pl-2 rounded resize-none h-36 sm:w-4/5 text-violet-500 bg-rose-50"></textarea></label>
        <label for="opinion" className="text-violet-900">Opinión: <br/><textarea id="opinion" placeholder="Brinde su opinión, recomendaciones, etc." name="opinion" className="w-2/3 pl-2 rounded resize-none h-36 sm:w-4/5 text-violet-500 bg-rose-50"></textarea></label>
        <button type="submit" className="w-1/4 py-2 font-medium text-white rounded-md hover:-translate-y-1 hover:translate-x-1 hover:shadow-md hover:shadow-black bg-gradient-to-r from-violet-700 to-rose-700 border-1">Enviar</button>
      </form>
    </div>
  )
}

export default uploadTravel