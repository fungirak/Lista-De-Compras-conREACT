import React, {useState, useEffect} from 'react';
import ListaDeCompras from './components/ListaDeCompras';
import FormCompra from './components/FormCompra';
import Nav from './components/Nav';


const compraInicial = [
    {
        id: 1,
        titulo: 'Artículo de ejemplo #1',
        completado: false
    }
    
];
 
const localCompras = JSON.parse(localStorage.getItem('compras'));

const App = () => {

    const [compras, setCompras] = useState(localCompras || compraInicial);
    const [editarCompra, setEditarCompra] = useState(null);

    useEffect(() => {

        localStorage.setItem('compras', JSON.stringify(compras));

    }, [compras]);

    const borrarCompra = (compraID) => {

        if(editarCompra && compraID === editarCompra.id) {
            setEditarCompra(null);
        }

        const updateCompras = compras.filter(compra => compra.id !== compraID);
        setCompras(updateCompras);
    }

    const compraRealizada = (compraID) => {

        const updateCompras = compras.map(compra => compra.id === compraID ? {...compra, completado: !compra.completado} : compra );

        setCompras(updateCompras);
    }
    
    const agregarCompra = (compra) => {

        const newCompra = {
            id: Date.now(),
            ...compra,
            completado: false

        }

        const updateCompras = [
            newCompra,
            ...compras,
        ]

        setCompras(updateCompras);
    }
    
    const actualizarCompra = (editarCompra) => {
        
        const updateCompras = compras.map(compra => (
            compra.id === editarCompra.id
            ? editarCompra
            : compra
        ))

        setCompras(updateCompras);

    }

    return (
        <div className="container-fluid mt-3">
           <Nav/>
             
            <div className="row ">
                

                <div className="col-md-4 col-sm-12">
                    <FormCompra 
                        editarCompra={editarCompra}
                        agregarCompra={agregarCompra}
                        actualizarCompra={actualizarCompra}
                        setEditarCompra={setEditarCompra}
                    />
                </div>

                <div className="col-md-8 col-sm-12">
                   
                    <ListaDeCompras
                        compras={compras}
                        borrarCompra={borrarCompra}
                        compraRealizada={compraRealizada}
                        setEditarCompra={setEditarCompra}
                    />
                </div>

                
            </div>
        </div>
    );
}

export default App;