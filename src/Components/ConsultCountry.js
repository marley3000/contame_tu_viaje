import React, { useState } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeError } from '../Elements/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponentInput from './Input';

const ConsultCountry = ({ handleSubmit, onClick }) => {

    const [destination, setDestination] = useState({campo: '', valido: null});
    const [formValido, setFormValido] = useState(null);

    const expresiones = {destination: /^[A-Z][a-zA-ZÀ-ÿ\s]{3,25}$/}

    const onSubmit = (e) => {
        e.preventDefault();

        if (destination.valido === 'true') {
            setFormValido(true);
            handleSubmit({...destination});
            setDestination({campo: '', valido: null});
        } else {
            setFormValido(false);
        }

    }


  return (
    <Formulario onSubmit={onSubmit} className="sm:!w-auto !w-72 !flex !flex-col z-0">
        <ComponentInput
            estado={destination}
            cambiarEstado={setDestination}
            tipo="text"
            label="Búsqueda de destino"
            placeholder="Escriba el país"
            name="destination"
            leyendaError="El país debe iniciar con mayúscula y contener entre 4 y 25 dígitos (solo letras y espacios)."
            expresionRegular={expresiones.destination}
        />
        
        {formValido === false && <MensajeError className="!text-xs !pt-2">
            <p>
                <FontAwesomeIcon icon={faExclamationTriangle}/>
                <b>Error:</b> Por favor indica el destino deseado.
            </p>
        </MensajeError>}
        <ContenedorBotonCentrado>
            <Boton onClick={onClick} type="submit">Enviar</Boton>
        </ContenedorBotonCentrado>
    </Formulario>
  )
}

export default ConsultCountry