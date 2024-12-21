import React from 'react';
import Seccion from './Seccion';

const ExplorarArticulos = () => {
  const articulos = [
    { id: 1, nombre: 'Super Mario Bros', precio: '$700.00', imagen: 'https://m.media-amazon.com/images/I/71n+VqkywjL._AC_SY741_.jpg' },
    { id: 2, nombre: 'Super Smash Bros', precio: '$399.99', imagen: 'https://m.media-amazon.com/images/I/81qzH0RY3DS.__AC_SX300_SY300_QL70_ML2_.jpg' },
    { id: 3, nombre: 'Mario Kart Deluxe', precio: '$499.99', imagen: 'https://m.media-amazon.com/images/I/71vMbXI+K6L._AC_SX342_SY445_.jpg' },
    { id: 4, nombre: 'The Legend Of Zelda', precio: '$500.00', imagen: 'https://m.media-amazon.com/images/I/716IChJgUzS.__AC_SX300_SY300_QL70_ML2_.jpg' },
    { id: 5, nombre: 'Luigi Mansion 3', precio: '$599.99', imagen: 'https://m.media-amazon.com/images/I/71r5qBxPtzS.__AC_SX300_SY300_QL70_ML2_.jpg' },
    { id: 3, nombre: 'Mario Kart Deluxe', precio: '$499.99', imagen: 'https://m.media-amazon.com/images/I/71vMbXI+K6L._AC_SX342_SY445_.jpg' },
    { id: 4, nombre: 'The Legend Of Zelda', precio: '$500.00', imagen: 'https://m.media-amazon.com/images/I/716IChJgUzS.__AC_SX300_SY300_QL70_ML2_.jpg' },
    { id: 5, nombre: 'Luigi Mansion 3', precio: '$599.99', imagen: 'https://m.media-amazon.com/images/I/71r5qBxPtzS.__AC_SX300_SY300_QL70_ML2_.jpg' }
  ];

  const contenidoArticulos = (
    <div className="articulos-contenedor">
      {articulos.map(articulo => (
        <div key={articulo.id} className="articulo-casilla">
          <img src={articulo.imagen} alt={articulo.nombre} />
          <h3>{articulo.nombre}</h3>
          <p>{articulo.precio}</p>
        </div>
      ))}
    </div>
  );

  return (
    <Seccion title="Explora algunos de nuestros articulos" content={contenidoArticulos} />
  );
};

export default ExplorarArticulos;