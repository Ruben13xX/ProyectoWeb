import React from 'react';
import Seccion from './Seccion';

const ExplorarArticulos = () => { // el componente para explorar algunos articulos
  // Arreglo que almacena los datos de los productos, como su precio, nombre, y una imagen del articulo
  const articulos = [
    { id: 1, nombre: 'Super Mario Bros', precio: '$700.00', imagen: 'https://m.media-amazon.com/images/I/71n+VqkywjL._AC_SY741_.jpg' },
    { id: 2, nombre: 'Super Smash Bros', precio: '$399.99', imagen: 'https://m.media-amazon.com/images/I/81qzH0RY3DS.__AC_SX300_SY300_QL70_ML2_.jpg' },
    { id: 3, nombre: 'Mario Kart Deluxe', precio: '$499.99', imagen: 'https://m.media-amazon.com/images/I/71vMbXI+K6L._AC_SX342_SY445_.jpg' },
    { id: 4, nombre: 'The Legend Of Zelda', precio: '$500.00', imagen: 'https://m.media-amazon.com/images/I/716IChJgUzS.__AC_SX300_SY300_QL70_ML2_.jpg' },
    { id: 5, nombre: 'Luigi Mansion 3', precio: '$599.99', imagen: 'https://m.media-amazon.com/images/I/71r5qBxPtzS.__AC_SX300_SY300_QL70_ML2_.jpg' },
    { id: 6, nombre: 'Mario Kart Deluxe', precio: '$499.99', imagen: 'https://m.media-amazon.com/images/I/71vMbXI+K6L._AC_SX342_SY445_.jpg' },
    { id: 7, nombre: 'The Legend Of Zelda', precio: '$500.00', imagen: 'https://m.media-amazon.com/images/I/716IChJgUzS.__AC_SX300_SY300_QL70_ML2_.jpg' },
    { id: 8, nombre: 'Luigi Mansion 3', precio: '$599.99', imagen: 'https://m.media-amazon.com/images/I/71r5qBxPtzS.__AC_SX300_SY300_QL70_ML2_.jpg' }
  ];

  //este es el contenido que mostrara en el componente de seccion en el inicio de la pagina
  const contenidoArticulos = (
    <div className="articulos-contenedor">
      {articulos.map(articulo => (
        <div key={articulo.id} className="articulo-casilla">  {/* Cada articulo se muestra en un contenedor con una imagen, nombre y precio */}
          <img src={articulo.imagen} alt={articulo.nombre} /> {/* la imagen del producto */}
          <h3>{articulo.nombre}</h3> {/* el nombre del producto*/}
          <p>{articulo.precio}</p> {/* precio del producto*/}
        </div>
      ))}
    </div>
  );

  return (
    <Seccion title="Explora algunos de nuestros articulos" content={contenidoArticulos} /> // Utilizamos el componente seccion para mostrar el contenido de los articulos
  );
};

export default ExplorarArticulos;