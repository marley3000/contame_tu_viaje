import LogoAvion from '../images/LogoAvion.png'
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className="flex justify-between items-center py-3 px-8 bg-gradient-to-r from-violet-700 to-rose-700">
        <Link to="/"><img src={LogoAvion} alt='LogoAvion' className="sm:h-12 h-8"/></Link>
        <h1 className="text-3xl font-bold text-center text-slate-100 font-macondo sm:text-5xl ">CONTAME TU VIAJE</h1>
        <Link to="/"><h3 className="text-slate-100 font-kanit font-bold sm:text-base text-sm">Inicio</h3></Link>
    </div>
  )
}

export default Navbar