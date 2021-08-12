import React, { useState, useEffect } from 'react';

const valorInicialForm = {
    titulo: ''
}

const FormCompra = ({ agregarCompra, editarCompra, actualizarCompra, setEditarCompra }) => {

    const [valorForm, setValorForm] = useState(valorInicialForm);
    const { titulo } = valorForm;
    const [error, setError] = useState(null);
    const [successMessage, setSuccessMessage] = useState(null);
   


    useEffect(() => {

        if(editarCompra) {
            setValorForm(editarCompra);
        }

        else {
            setValorForm(valorInicialForm);
        }

    }, [editarCompra])

    const handleInputChange = (e) => {

        const changedFormValues = {
            ...valorForm,
            [e.target.name]: e.target.value
        }

        setValorForm(changedFormValues);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if(titulo.trim() === '') {
            setError('Escribe un artículo');
            return;
        }

        
        if(editarCompra) {
            actualizarCompra(valorForm);
            setSuccessMessage('Actualizado con éxito');
        }

        else {
            agregarCompra(valorForm);
            setSuccessMessage('Agregado con éxito');
            setValorForm(valorInicialForm);
        }

        setTimeout(() => {
            setSuccessMessage(null);
        }, 1000);

        setError(null);
    }

    return (
        <div className="bg-light p-3 mt-5 rounded col-sm-12 mx-auto shadow">
            <h3 className="text-center text-dark display-5">{ editarCompra ? 'EDITAR COMPRA' : 'NUEVA COMPRA'}</h3>


            {
                editarCompra &&
                <button
                    onClick={() => setEditarCompra(null)}
                    className="btn btn-sm btn-warning mb-2"
                > Salir
                </button>
            }


            <form onSubmit={handleSubmit}>
                <input 
                    type="text"
                    placeholder="Nombre de artículo"
                    className="form-control"
                    value={titulo}
                    name="titulo"
                    onChange={handleInputChange}
                />

               
                
                <button 
                    className="btn btn-primary btn-block mt-2 "
                >{ editarCompra ? 'Actualizar Artículo' : 'Agregar a la lista' }
                </button>
                
            </form>

            {
                error &&
                (
                    <div className="alert alert-danger mt-2">
                        { error }
                    </div> 
                ) 

            }

            {
                successMessage && (
                    <div className="alert alert-success mt-2">
                        { successMessage }
                    </div>
                )
            }

            
        </div>
    );
}

export default FormCompra;