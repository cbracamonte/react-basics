import * as React from 'react';

const Productos = ({ producto, productos, carrito, agregarProducto }: any) => {
    const seleccionarProducto = id => {
        const productoSeleccionado = productos.filter(producto => producto.id === id)[0];
        /* En react no esta permitido modificar el state, lo que no permite hacer carrito.push(item), para eso se accede 
        a las funciones del State.*/
        agregarProducto([
            ...carrito,
            productoSeleccionado
        ]);
    }

    const eliminarProducto = id => {
        const productoSeleccionado = carrito.filter(producto => producto.id !== id);
        console.log(productoSeleccionado)
        agregarProducto(productoSeleccionado);
    }

    return (
        <ul>
            <li>
                {producto.nombre} <span><b>/S{producto.precio}</b></span>
            </li>
            {productos
                ?
                (<button type="button" onClick={() => (seleccionarProducto(producto.id))}>Comprar</button>)

                :
                (<button type="button" onClick={() => (eliminarProducto(producto.id))}>Eliminar</button>)
            }
        </ul>
    );
}

export default Productos;