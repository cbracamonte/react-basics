import React from 'react';
import './carrito.css'
import Productos from './Productos'
export interface CarritoProps {

}

const Carrito = ({ carrito, agregarProducto }) => {
    return (
        <div className="carrito">
            <h2>Tu Carrito de Compras</h2>
            {
                carrito.length === 0
                    ?
                    <p>No hay productos en el carrito</p>
                    : carrito.map(producto => (
                        <Productos
                            key={producto.id}
                            producto={producto}
                            carrito={carrito}
                            agregarProducto={agregarProducto}
                        />
                    ))
            }
        </div>
    );
}

export default Carrito;