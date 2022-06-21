import React from 'react';

const Error404 = () => {
    return (
      <div className="flex flex-col items-center">
          <div className="text-sm m-12 font-semibold text-center text-red-700 sm:text-xl font-kanit">
            <p><span className="text-md sm:text-3xl">Ooops..</span><br/> La página seleccionada fue modificada o todavía no ha sido creada. Pero no te preocupes, podés volver a nuestra página principal con sólo un click.</p>
          </div>
          <div className="flex items-center m-6 font-extrabold font-poppins text-8xl">
            <div className="mx-12 animate-pulse">
              <span className="text-red-400">4</span>
              <span className="mx-10 text-green-500">0</span>
              <span className="text-amber-400">4</span>
            </div>
          </div>
          <button className="px-4 py-2 mt-10 hover:scale-110 font-medium text-white bg-gradient-to-r from-violet-700 to-rose-700 rounded-md border-1 font-kanit">
            <a href="/">Volver a la página principal</a>
          </button>
      </div>
    )
  }
  
  export default Error404