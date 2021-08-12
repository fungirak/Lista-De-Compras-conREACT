import React from 'react';
import Compra from './Compra';


const ListaDeCompras = ({ compras, borrarCompra, compraRealizada, setEditarCompra }) => {
    return (
        <div className="container mt-5  rounded justify-content-center  p-3">
            <h2 className="text-center  bg-dark  rounded text-light">LISTA DE COMPRAS</h2>

            {
                compras.length === 0
                ? (
                    <div className="d-flex justify-content-center">
                    <div className="alert alert-primary text-center col-md-8 mt-2 ">
                         ¿Tienes que comprar algo?
                    </div>
                    </div>
                )
                : (
                    compras.map(compra => (
                        <Compra 
                            compra={compra}
                            key={compra.id} 
                            borrarCompra={borrarCompra}
                            compraRealizada={compraRealizada}
                            setEditarCompra={setEditarCompra}
                        />
                    ))
                )
            }
            

        </div>
    );
}

export default ListaDeCompras;