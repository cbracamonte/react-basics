import React, { Fragment, useState } from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
import Productos from './components/Productos'
import Carrito from './components/Carrito'

function App() {
  // Props
  const nombreTienda = 'Tienda Virtual'
  const añoActual = new Date().getFullYear();

  // State -- Hooks

  const [productos, guardarProductos] = useState([
    { id: 1, nombre: 'Camisa', precio: 199 },
    { id: 2, nombre: 'Pantalon', precio: 159 },
    { id: 3, nombre: 'Polo', precio: 59 }
  ]);

  const [carrito, agregarProducto] = useState([]);


  return (
    <Fragment >
      <Header nombreTienda={nombreTienda} />
      <section>
        <h1>Lista de Productos</h1>
        {productos.map(producto => (
          <Productos
            key={producto.id}
            producto={producto}
            productos={productos}
            carrito={carrito}
            agregarProducto={agregarProducto}
          />
        ))}
      </section>
      <section>
        <Carrito
          carrito={carrito}
          agregarProducto={agregarProducto} />
      </section>
      <Footer añoActual={añoActual} />
    </Fragment>
  );
}

export default App;
