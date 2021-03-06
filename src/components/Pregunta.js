import React, { Fragment, useState } from 'react';
import Error from './Error';
import PropTypes from 'prop-types';

const Pregunta = ({guardarPresupuesto, guardarRestante,actualizarPregunta}) => {

    //definir el state

    const [cantidad, guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    ///funcion que lee el presupuesto
    const definirPresupuesto = e => {
        guardarCantidad(parseInt(e.target.value, 10)); // el 10 está diciendo que está en base 10    
    }

    //subimt para definir el presupuesto

    const agregarPresupuesto = e=>{
        e.preventDefault();

        //Validar
        if(cantidad <1 || isNaN (cantidad)){ //isNAN "it's not a number", si el usuario no escribe un numero sale eso
            guardarError (true);
            return;
        }
        // si se pasa la validacion
        guardarError(false);
        guardarPresupuesto(cantidad);
        guardarRestante(cantidad);
        actualizarPregunta(false);
    }
    return (
        <Fragment>
            <h2>Coloca tu presupuesto</h2>
            {error ? <Error mensaje ="El presupuesto es incorrecto"/>: null}
            <form onSubmit= {agregarPresupuesto}>
                <input
                    type="number" //lo lee como string aunque lo ponga como number
                    className="u-full-width"
                    placeholder="Coloca tu presupuesto"
                    onChange={definirPresupuesto}
                />
                <input
                    type="submit"
                    className="button-primary u-full-width"
                    value="Definir Presupuesto"
                />
            </form>
        </Fragment>
    );
}
//Documentación
Pregunta.propTypes={
    guardarPresupuesto: PropTypes.func.isRequired,
    guardarRestante: PropTypes.func.isRequired,
    actualizarPregunta: PropTypes.func.isRequired
}
export default Pregunta;