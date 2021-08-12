import React from 'react'


const Compra = ({ compra, borrarCompra, compraRealizada, setEditarCompra }) => {
    

    return (
        <div className={`card m-1 altura col ${compra.completado ? 'border border-success shadow' : ''}`} >
            <div className="card-body d-flex  rounded col-sm-12  " >
                <h4 className="card-title text-left text-primary">
                   <span>• </span> <span>{compra.titulo}</span>   
                </h4>
                
            </div>

            <div className="card-footer row col-sm-12  justify-content-center">
                    <button
                        onClick={() => compraRealizada(compra.id)}
                        className={`btn btn-sm btn-outline-success  mr-2 boton-circular-pequeño  ${compra.completado ? 'bg-success' : 'bg-dark'} ml-2`}
                    >
                        { compra.completado ?  '✅'  : '◻'}
                        
                    </button>
                    <button 
                        onClick={() => setEditarCompra(compra)}
                        className="btn btn-sm btn-outline-primary mr-2 boton-circular-pequeño"
                    >
                        <span>✍</span>
                    </button>
                    <button
                        onClick={() => borrarCompra(compra.id)}
                        className="btn btn-sm btn-outline-danger boton-circular-pequeño"
                    >
                        <span>❌</span>
                    </button>
            </div>
        </div>
    )
}

export default Compra;
