import React from 'react';

const Seccion = ({ title, content, imageUrl }) => {
  return (
    <section className="seccion">
      <div className="seccion-contenido">
        <div className="texto">
          <h2>{title}</h2>
          <div>{content}</div>
        </div>
      </div>
    </section>
  );
};

export default Seccion;


