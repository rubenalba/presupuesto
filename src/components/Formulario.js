import React,{useState} from 'react';
import Error from './Error';
import shortid from 'shortid';


const Formulario = () => {

    const [nombreGasto, guardarNombre] = useState('');
    const [cantidad,guardarCantidad] = useState(0);
    const [error, guardarError] = useState(false);

    //cuando el usario agrega un gasto
    const agregarGasto = e=>{

        e.preventDefault();
        //validar
        if(cantidad<1|| isNaN(cantidad)||nombreGasto.trim()===''){
            guardarError(true);
            return;
        }
        guardarError(false);
        //construir el gasto
const gasto = {
    nombreGasto,
    cantidad,
    id: shortid.generate()
}
console.log(gasto);

        //pasar el gasto al componente principal
        //resetear form
}


    return (
        <form onSubmit ={agregarGasto}>
            <h2>Agrega tus gastos aquí</h2>
            {error ? <Error mensaje="ambos campos son obligatorios o presupuesto incorrecto"/> : null}
            <div className="campo">
                <label>Nombre Gasto</label>
                <input
                    type="text"
                    className="u-full-width"
                    placeholder="Ej. Transporte"
                    value={nombreGasto}
                    onChange={e=>guardarNombre(e.target.value)}
                ></input>
            </div>
            <div className="campo">
                <label>Cantidad Gasto</label>
                <input
                    type="number"
                    className="u-full-width"
                    placeholder="300"
                    value={cantidad}
                    onChange={e=>guardarCantidad(parseInt( e.target.value,10))}
                ></input>
            </div>
            <input
                type="submit"
                className="button-primary u-full-width"
                value="Agregar gasto"
            />
        </form>
    );
}
export default Formulario;