import LogoAvion from '../images/LogoAvion.png'


const Navbar = () => {
  return (
    <div className="flex p-3 bg-gradient-to-r from-violet-700 to-rose-700">
        <img src={LogoAvion} alt='LogoAvion' className="h-8 pl-2 sm:h-12"/>
        <h1 className="relative pl-8 text-3xl font-bold text-center md:pl-0 text-slate-100 font-macondo sm:text-5xl md:left-1/4 lg:left-1/3">CONTAME TU VIAJE</h1>
    </div>
  )
}

export default Navbar