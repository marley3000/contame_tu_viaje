import React, { useState } from 'react';
import LandscapeAnimation from "../Components/LandscapeAnimation";
import ConsultCountry from "../Components/ConsultCountry";
import axios from 'axios';
import Modal from '../Components/Modal';
import styled from 'styled-components';

const baseUrl = process.env.REACT_APP_BASE_URL;

const FindCountry = () => {

  const [travels, setTravels] = useState(null);
  const [errorTravel, setErrorTravel] = useState(null);
  
  const [estadoModal, cambiarEstadoModal] = useState(false);
  
  const handleSubmit = async (countryData) => {

    try {
      const response = await axios({
          url: `${baseUrl}/verDestino/${countryData.campo}`,
          method: 'GET'
      })

      setTravels(response.data.viaje);
      
    } catch (error) {
      setErrorTravel(error);
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
            errorTravel != null && <h2 className="font-roboto">El destino no se encuentra en nuestra base de datos. Por favor prueba con uno diferente.</h2>
          }
          {
            travels != null && 
              <div className="font-roboto">
                {
                  travels.map(({_id, name, destination, number_travelers, duration_days, valoration, activities, opinion}) => 
                    <div key={_id} className="mb-16">
                      <h2>Bienvenidos viajeros!</h2>
                      <h3>Soy {name}. A continuación verás información de mi viaje a {destination}: </h3>
                      <h5><b>Cantidad de viajeros</b>: {number_travelers}</h5>
                      <h5><b>Duración de la estadía</b>: {duration_days} días</h5>
                      <h5><b>Valoración del viaje (mejor puntaje: 5; peor puntaje: 1)</b>: {valoration}</h5>
                      <p><b>Actividades que puedes realizar</b>: {activities}</p>
                      <p><b>Mi opinión sobre el destino</b>: {opinion}</p>
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
  color: #34495e;
  padding: 0 20px;

  h2 {
    font-size: 36px;
    font-weight: 700;
    color: #8e24aa;
  }

  h3 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 10px;
    color: #3949ab;
  }

  h5 {
    font-size: 22px;
  }

  p {
    font-size: 22px;
  }
`;