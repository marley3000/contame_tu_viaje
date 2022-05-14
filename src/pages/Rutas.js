import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import Error404 from "./Error404"
import FindCountry from "./FindCountry"
import Home from "./Home"
import UploadTravel from "./UploadTravel"


const Rutas = () => {
  return (
    <>
        <Router>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/UploadTravel" element={<UploadTravel/>}/>
                <Route path="/FindCountry" element={<FindCountry/>}/>
                <Route path="*" element={<Error404/>}/>
            </Routes>
        </Router>
    </>
  )
}

export default Rutas