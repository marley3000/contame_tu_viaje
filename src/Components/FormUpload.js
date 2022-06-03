import React, { useState } from 'react';
import { Formulario, ContenedorBotonCentrado, Boton, MensajeExito, MensajeError } from '../Elements/Form';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons';
import ComponentInput from './Input';

const FormUpload = ({handleSubmit}) => {

    const [name, setName] = useState({campo: '', valido: null}); 
    const [destination, setDestination] = useState({campo: '', valido: null}); 
    const [number_travelers, setNumberTravelers] = useState({campo: '', valido: null}); 
    const [duration_days, setDurationDays] = useState({campo: '', valido: null}); 
    const [valoration, setValoration] = useState({campo: '', valido: null}); 
    const [activities, setActivities] = useState({campo: '', valido: null}); 
    const [opinion, setOpinion] = useState({campo: '', valido: null}); 
    const [formValido, setFormValido] = useState(null)

    const expresiones = {
        name: /^[a-zA-ZÀ-ÿ]{3,20}$/,
        destination: /^[a-zA-ZÀ-ÿ\s]{4,25}$/,
        number_travelers: /^\d{1,2}$/,
        duration_days: /^\d{1,3}$/,
        valoration: /^\d{1}$/,
        activities: /^\w.{3,500}$/,
        opinion: /^\w.{3,500}$/
    }

    const formValues = {
        name: name.campo,
        destination: destination.campo,
        number_travelers: number_travelers.campo,
        duration_days: duration_days.campo,
        valoration: valoration.campo,
        activities: activities.campo,
        opinion: opinion.campo
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(name.valido === 'true' &&
            destination.valido === 'true' &&
            number_travelers.valido === 'true' &&
            duration_days.valido === 'true' &&
            valoration.valido === 'true' &&
            activities.valido === 'true' &&
            opinion.valido === 'true'
        ) {
            setFormValido(true);
            handleSubmit({...formValues})
            setName({campo: '', valido: null});
            setDestination({campo: '', valido: null});
            setNumberTravelers({campo: '', valido: null});
            setDurationDays({campo: '', valido: null});
            setValoration({campo: '', valido: null});
            setActivities({campo: '', valido: null});
            setOpinion({campo: '', valido: null});


        } else {
            setFormValido(false);
        }
    }

    return (
        <Formulario onSubmit={onSubmit}>
            <ComponentInput
                estado={name}
                cambiarEstado={setName}
                tipo="text"
                label="Nombre"
                placeholder="Escriba su nombre"
                name="name"
                leyendaError="El nombre debe contener entre 3 y 20 letras, sin dejar espacios."
                expresionRegular={expresiones.name}
            />
            <ComponentInput
                estado={destination}
                cambiarEstado={setDestination}
                tipo="text"
                label="País visitado"
                placeholder="Escriba el país de destino"
                name="destination"
                leyendaError="El país debe contener entre 4 y 25 dígitos (solo letras y espacios)."
                expresionRegular={expresiones.destination}
            />
            <div className="md:col-span-2 md:columns-3">
                <ComponentInput
                    estado={number_travelers}
                    cambiarEstado={setNumberTravelers}
                    tipo="number"
                    label="Viajeros"
                    placeholder="Indica la cantidad de personas"
                    name="number_travelers"
                    leyendaError="Solo se permiten números enteros."
                    expresionRegular={expresiones.number_travelers}
                />
                <ComponentInput
                    estado={duration_days}
                    cambiarEstado={setDurationDays}
                    tipo="number"
                    label="Duración de la estadía"
                    placeholder="Indica la cantidad de días"
                    name="duration_days"
                    leyendaError="Solo se permiten números enteros."
                    expresionRegular={expresiones.duration_days}
                />
                <ComponentInput
                    estado={valoration}
                    cambiarEstado={setValoration}
                    tipo="number"
                    label="Valoración de la estadía"
                    placeholder="Indica el puntaje"
                    name="valoration"
                    leyendaError="Solo puntaje del 0 (peor valoración) al 9 (mejor valoración)."
                    expresionRegular={expresiones.valoration}
                />
            </div>
            <ComponentInput
                estado={activities}
                cambiarEstado={setActivities}
                tipo="text"
                label="Actividades recomendadas"
                placeholder="Recomienda actividades en destino"
                name="activities"
                leyendaError="Este campo debe contener entre 3 y 500 caracteres."
                expresionRegular={expresiones.activities}
            />
            <ComponentInput
                estado={opinion}
                cambiarEstado={setOpinion}
                tipo="text"
                label="Opinión"
                placeholder="Opine sobre el destino"
                name="opinion"
                leyendaError="Este campo debe contener entre 3 y 500 caracteres."
                expresionRegular={expresiones.opinion}
            />

            {formValido === false && <MensajeError>
                <p>
                    <FontAwesomeIcon icon={faExclamationTriangle}/>
                    <b>Error:</b> Por favor rellena el formulario correctamente.
                </p>
            </MensajeError>}
            <ContenedorBotonCentrado>
                <Boton type="submit">Enviar</Boton>
                {formValido === true && <MensajeExito>Viaje cargado exitosamente!</MensajeExito>}
            </ContenedorBotonCentrado>
        </Formulario>
    )
}


export default FormUpload