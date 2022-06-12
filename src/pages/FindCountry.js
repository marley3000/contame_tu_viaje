import React, { useState } from 'react';
import LandscapeAnimation from "../Components/LandscapeAnimation";
import ConsultCountry from "../Components/ConsultCountry";
import axios from 'axios';
import Modal from '../Components/Modal';
import styled from 'styled-components';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import { TailSpin } from 'react-loader-spinner';

const baseUrl = process.env.REACT_APP_BASE_URL;

const FindCountry = () => {

  const [travels, setTravels] = useState(null);
  const [errorTravel, setErrorTravel] = useState(null);
  
  const [estadoModal, cambiarEstadoModal] = useState(false);

  const [isLoading, setIsLoading] = useState(false);
  
  const handleSubmit = async (countryData) => {
    
    setIsLoading(true);

    try {
      const response = await axios({
          url: `${baseUrl}/verDestino/${countryData.campo}`,
          method: 'GET'
      })

      setTravels(response.data.viaje);
      setIsLoading(false);
      
    } catch (error) {
      setErrorTravel(error);
      setIsLoading(false);
    }
  }
  
  return (
    <div className="flex flex-col items-center justify-center text-center font-kanit">
      <h2 className="m-4 text-3xl font-bold text-blue-900">BUSCA TU DESTINO!</h2>
      <h5 className="font-bold text-violet-800">Ingresa el país al que desearías viajar y obtiene las opiniones y experiencias de otros viajeros.</h5>
      <LandscapeAnimation/>
      <ConsultCountry handleSubmit={handleSubmit} onClick={() => cambiarEstadoModal(!estadoModal)} />
      <Modal
        estado={estadoModal}
        cambiarEstado={cambiarEstadoModal}
        estadoTravel={travels}
        cambiarEstadoTravel={setTravels}
        estadoError={errorTravel}
        cambiarEstadoError={setErrorTravel}
      >
        <Contenido>
          {
            isLoading === true && <TailSpin color="#6d28d9"/>
          }
          {
            errorTravel != null && <h2 className="font-kanit text-2xl md:text-3xl pb-4 !text-rose-700">El destino no se encuentra en nuestra base de datos. Por favor prueba con uno diferente.</h2>
          }
          {
            travels != null && 
              <div className="font-kanit">
                {
                  travels.map(({_id, name, destination, number_travelers, duration_days, valoration, activities, opinion}) => 
                    <div key={_id} className="mb-16 py-3 bg-gradient-to-r from-violet-700 to-rose-700 rounded-xl mx-4">
                      <h2 className="text-3xl md:text-4xl">Bienvenidos viajeros!</h2>
                      <h3 className="text-2xl md:text-3xl">Soy {name}. A continuación verás información de mi viaje a {destination}: </h3>
                      <h5 className="text-base md:text-xl"><b>Cantidad de viajeros</b>: {number_travelers}</h5>
                      <h5 className="text-base md:text-xl"><b>Duración de la estadía</b>: {duration_days} días</h5>
                      <h5 className="text-base md:text-xl"><b>Valoración del viaje (mejor puntaje: 5; peor puntaje: 1)</b>: {valoration}</h5>
                      <p className="text-base md:text-xl"><b>Actividades que puedes realizar</b>: {activities}</p>
                      <p className="text-base md:text-xl"><b>Mi opinión sobre el destino</b>: {opinion}</p>
                    </div>
                  )
                }
              </div>
          } 
        </Contenido>
      </Modal>
      <p className="mt-4 text-sm text-violet-800">Por favor tener en cuenta que la información aquí compartida es sólo de carácter indicativo y corresponde a testimonios y experiencias particulares de distintos usuarios.</p>
    </div>
  )
}

export default FindCountry

const Contenido = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 10;
  color: #fff;
  padding: 0 20px;

  h2 {
    font-weight: 700;
    color: #00FF33;
  }

  h3 {
    font-weight: 700;
    margin-bottom: 10px;
    color: #e8f8f5;
  }
`;