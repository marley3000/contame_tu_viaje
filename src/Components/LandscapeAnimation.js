import React from 'react';
import barco from '../images/barco.png';
import nube1 from '../images/nube1.png';
import nube2 from '../images/nube2.png';
import nube3 from '../images/nube3.png';
import paisaje_playa from '../images/paisaje_playa.jpg';
import avion from '../images/avion.png';


const LandscapeAnimation = () => {
  return (
    <div className="sm:w-[650px] w-64 h-56 relative overflow-hidden bg-[#9AD7D8] rounded-md my-5">
        <img src={paisaje_playa} alt="PaisajePlaya" className="absolute object-cover w-full -bottom-4 sm:-bottom-16"/>
        <img src={barco} alt="Barco" className="absolute w-1/4 img-barco -bottom-4 sm:-bottom-12 -right-12"/>
        <img src={nube1} alt="Nube" className="absolute top-0 w-16 img-nube left-12"/>
        <img src={nube2} alt="Nube" className="absolute img-nube w-9 top-5 left-32"/>
        <img src={nube3} alt="Nube" className="absolute img-nube w-11 top-14 left-40"/>
        <img src={avion} alt="Avion" className="img-avion absolute top-8 -left-12 w-[25%] sm:w-[14%]"/>
    </div>
  )
}

export default LandscapeAnimation