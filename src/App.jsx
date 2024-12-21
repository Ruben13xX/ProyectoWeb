import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Seccion from './components/Seccion';
import Beneficios from './components/Beneficios';
import ExplorarArticulos from './components/ExplorarArticulos';
import './App.css';

const App = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [messageSent, setMessageSent] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessageSent(true);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <Router>
      <div className="contenedor-app">
        <header>
          <div className="WebNombre">
            <h1>GameShop</h1>
          </div>
          <nav>
            <ul>
              <li><a href="/">Inicio</a></li>
              <li><a href="#">Tienda</a></li>
              <li><a href="/contacto">Contacto</a></li>
              <li><a href="/AcercaDeNosotros">Acerca de nosotros</a></li>
            </ul>
          </nav>
        </header>

        <Routes>
          <Route
            path="/"
            element={
              <>
                <h2 className="TituloWeb">¡Bienvenido a GameShop!</h2>
                <ExplorarArticulos />
                <Beneficios />
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
          <Route
            path="/contacto"
            element={
              <section className="seccion">
                <h2>Contacta con nosotros</h2>
                {messageSent ? (
                  <p>Mensaje enviado, responderemos lo más pronto posible! =)</p>
                ) : (
                  <form onSubmit={handleSubmit} className="formulario-contacto">
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
                    <button type="submit">Enviar</button>
                  </form>
                )}
              </section>
            }
          />
          <Route
            path="/AcercaDeNosotros"
            element={
              <>
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

        <footer>
          <div className="contenido-footer">
            <p>@ 2024 GameShop, Inc.</p>
            <nav>
              <ul>
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