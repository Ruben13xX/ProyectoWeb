import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Seccion from './components/Seccion';
import Beneficios from './components/Beneficios';
import ExplorarArticulos from './components/ExplorarArticulos';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',    //Estado para almacenar los datos del formulario de contacto
    message: ''
  });

  const [messageSent, setMessageSent] = useState(false);

//Esta funcion nos funciona para manejar los cambios en los campos de el formulario de contacto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };
//Funcion para el momento de enviar el formulario
  const handleSubmit = (e) => {
    e.preventDefault(); // previene el formulario por default
    setMessageSent(true); //nos indica si el mensaje fue enviado o no
    setFormData({ name: '', email: '', message: '' }); // despues limpia los campos en el formulario
  };

  return (
    //Manejamos las rutas que envuelven a la app con router
    <Router>      
      <div className="contenedor-app">
        {/*Definimos el header de la pagina, con sus rutas de navegacion*/}
        <header>
          <div className="WebNombre"> 
            <h1>GameShop</h1>
          </div>
          <nav>
            {/*Rutas de navegacion que estaran en header*/}
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="#">Tienda</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/AcercaDeNosotros">Acerca de nosotros</a></li>
            </ul>
          </nav>
        </header>
        <Routes>
          {/*Ruta principal de la pagina */}
          <Route
            path="/"
            element={
              <>
                <h2 className="TituloWeb">¡Bienvenido a GameShop!</h2>
                {/*Un componente que crea una seccion para explorar algunos articulos*/}
                <ExplorarArticulos />
                {/* Componente que añade algunos de los beneficios de comprar en la pagina */}
                <Beneficios />
                {/* Una seccion que añade algunas preguntas frecuentes que podrian tener los clientes */}
                <Seccion
                  title="Preguntas Frecuentes"
                  content={
                    <>
                      <div className="PreguntasFrec">
                        <h3>¿Como puedo realizar un pedido?</h3>
                        <p>Realiza tu pedido directamente a traves de nuestra tienda online seleccionando los productos que desees.</p>
                      </div>
                      <div className="PreguntasFrec">
                        <h3>¿Cuales son los métodos de pago?</h3>
                        <p>Aceptamos tarjetas de credito, PayPal y transferencias bancarias.</p>
                      </div>
                      <div className="PreguntasFrec">
                        <h3>¿Como puedo devolver un producto?</h3>
                        <p>Puedes devolver un producto dentro de los 30 dias despues de recibirlo, siempre que se encuentre en su estado original.</p>
                      </div>
                    </>
                  }
                />
              </>
            }
          />
          {/*Ruta de contacto de la pagina*/}
          <Route
            path="/contacto"
            element={
              <section className="seccion">
                <h2>Contacta con nosotros</h2>
                {/* Comprueba el estado de de si el mensaje se envio o no, y si se envio saltara el mensae que sale en el parrafo */}
                {messageSent ? (
                  <p>Mensaje enviado, responderemos lo más pronto posible! =)</p>
                ) : (
                  <form onSubmit={handleSubmit} className="formulario-contacto">   {/* Si el mensaje no se envio, nos devolvera el formulario de contacto*/}
                    <div>
                      <label htmlFor="name">Nombre:</label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="email">Correo electrónico:</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <div>
                      <label htmlFor="message">Mensaje:</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    <button type="submit">Enviar</button>  {/* Boton que hace que el formulario se envie */}
                  </form>
                )}
              </section>
            }
          />
           {/*Ruta que lleva al acerca de nosotros */}
          <Route
            path="/AcercaDeNosotros"
            element={
              <>
              {/* Se crea otra seccion para el quienes somos */}
                <Seccion
                  title="¿Quiénes somos?"
                  content={
                    <>
                      <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                        Vivamus lacinia odio vitae vestibulum vestibulum. 
                        Cras venenatis euismod malesuada. Nulla facilisi. 
                        Ut fringilla lorem ac dui consequat, nec aliquet metus vehicula.
                      </p>
                      <p>
                        Aliquam erat volutpat. Integer at arcu nec magna fermentum malesuada. 
                        Praesent convallis dolor vitae dolor accumsan, 
                        sed porttitor velit fermentum. Nulla dapibus velit a ligula facilisis, 
                        at vestibulum libero venenatis.
                      </p>
                    </>
                  }
                />
                <img src="https://i.postimg.cc/Rhxd5NXy/imagenabout-1.png" className="img-acercade"/>
                {/* Y otra seccion para indicar las direcciones de algunas sucursales */}
                <Seccion
                  title="Nuestra Ubicación"
                  content={
                    <>
                      <p>
                        Visitanos en nuestras diferentes sucursales para poder atenderle personalmente,
                        contamos con 3 sucursales en la ciudad:
                        <ul>
                          <li><strong>Sucursal Centro: </strong>AV. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                          <li><strong>Sucursal Obregon: </strong>Calle Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                          <li><strong>Sucursal Patria: </strong>AV. Lorem ipsum dolor sit amet, consectetur adipisicing elit.</li>
                        </ul>
                      </p>
                    </>
                  }
                />
              </>
            }
          />
        </Routes>
{/* El footer de la pagina web */}
        <footer>
          <div className="contenido-footer">
            <p>&copy; 2024 GameShop, Inc.</p>
            <nav>
              <ul>
                {/* Los enlaces que estaran en el footer, algunos distintos a los que estan en el header */}
                <li><a href="/">Inicio</a></li>
                <li><a href="#">Tienda</a></li>
                <li><a href="/contacto">Contactanos</a></li>
                <li><a href="#">Políticas y Garantías</a></li>
                <li><a href="#">Atención al cliente</a></li>
              </ul>
            </nav>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;