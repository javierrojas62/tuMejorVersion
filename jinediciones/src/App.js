import React from 'react';
import './App.css';
import Header from './header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Carrusel from './carrusel';
import logo from './assets/logo.png';
import FloatingSocialButton from "./components/FloatingSocialButton";
import { FaWhatsapp } from "react-icons/fa";
import { HashRouter } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <main className="container-fluid mt-5">
        <FloatingSocialButton />
        <div className="d-flex justify-content-between align-items-center pt-3">
          <div className="flex-grow-1 text-center">
          </div>

        </div>
        <Header />

        <div className='container mt-3'>         <Carrusel />
        </div>
        <div className='container mt-3'>
          {/* acordion Boostrap */}
          <div class="accordion" id="accordionExample">
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Impulsa tu éxito 🌱 </strong>
                </button>
              </h2>
              <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>¡Da el primer paso hacia la vida que siempre has soñado!</strong> Con nuestros talleres de autorrealización, descubrirás cómo potenciar tus fortalezas y alcanzar tus objetivos personales y profesionales. ¿Necesitas acompañamiento personalizado? Nuestro servicio de coaching te ayudará a superar miedos, ganar confianza y alcanzar el éxito en cualquier ámbito. Además, nuestras capacitaciones están diseñadas para brindarte las herramientas prácticas que necesitas para destacar en el mundo actual. ¡El momento de impulsar tu éxito es ahora!
                  <div className="d-flex justify-content-end mt-3">
                    <a
                      href="https://api.whatsapp.com/send?phone=5492645065072&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20talleres%20de%20autorrealizaci%C3%B3n%20y%20coaching%20personalizado."
                      className="btn btn-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactame&nbsp;<FaWhatsapp size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                  <strong>Crea tu propia historia ✨</strong>
                </button>
              </h2>
              <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>¡Transforma tus ideas en historias que dejan huella!</strong> Nuestros talleres de escritura creativa te guiarán para liberar tu imaginación y dar forma a relatos únicos, mientras que la escritura terapéutica te ayudará a conectar con tus emociones y sanar a través de las palabras. ¿Ya tienes un texto y quieres perfeccionarlo? Nuestro servicio de edición profesional se encarga de pulir cada detalle para que tu obra brille. ¡Es hora de contar tu historia y compartirla con el mundo!
                  <div className="d-flex justify-content-end mt-3">
                    <a
                      href="https://api.whatsapp.com/send?phone=5492645065072&text=Hola%2C%20me%20gustar%C3%ADa%20saber%20m%C3%A1s%20sobre%20los%20talleres%20de%20escritura%20creativa%20y%20edici%C3%B3n%20profesional."
                      className="btn btn-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactame&nbsp;<FaWhatsapp size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                  <strong>Leer para creer 📖</strong>
                </button>
              </h2>
              <div id="collapseThree" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>¡Déjate atrapar por historias que despiertan tu imaginación y amplían tu perspectiva!</strong>  Explora nuestra colección de libros digitales de distintos géneros y encuentra la lectura perfecta para cada momento. Desde emocionantes novelas hasta inspiradores ensayos, cada libro está pensado para acompañarte en tu camino de crecimiento personal y cultural. ¡Descubre nuevas experiencias sin salir de casa y lleva tu pasión por la lectura al siguiente nivel!
                  <div className="d-flex justify-content-end mt-3">
                    <a
                      href="https://api.whatsapp.com/send?phone=5492645065072&text=Hola%2C%20quiero%20informaci%C3%B3n%20sobre%20los%20libros%20digitales%20y%20recomendaciones%20de%20lectura."
                      className="btn btn-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactame&nbsp;<FaWhatsapp size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div class="accordion-item">
              <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                  <strong>Mirada docente 🎓</strong>
                </button>
              </h2>
              <div id="collapseFour" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div class="accordion-body">
                  <strong>¡Lleva tu carrera docente al siguiente nivel!</strong> Con nuestra formación y capacitación, adquirirás nuevas herramientas y estrategias para mejorar tu práctica educativa. Accede a libros digitales académicos que profundizan en las principales áreas del conocimiento y descubre recursos didácticos innovadores para enriquecer tus clases y captar la atención de tus estudiantes. Ya sea que busques perfeccionar tu metodología o ampliar tus conocimientos, aquí encontrarás todo lo que necesitas para marcar la diferencia en el aula. ¡Conviértete en el referente que tus alumnos necesitan!
                  <div className="d-flex justify-content-end mt-3">
                    <a
                      href="https://api.whatsapp.com/send?phone=5492645065072&text=Hola%2C%20me%20interesa%20la%20formaci%C3%B3n%20docente%20y%20los%20recursos%20educativos%20que%20ofrecen."
                      className="btn btn-success"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Contactame&nbsp;<FaWhatsapp size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* fin acordion */}
          <div className="text-center mt-3">
            <p>¡Hola! Soy <code>Ivi Janet</code>, y mi pasión es potenciar tu camino hacia el éxito académico y creativo. Como <strong>Profesora de Psicología y Ciencias de la Educación</strong>, mi enfoque es brindarte las herramientas y el acompañamiento personalizado que necesitas para alcanzar tus metas.</p>
            <p>Ofrezco una gama completa de servicios pensados para vos:</p>
            <ul className='text-'>
              <li><strong>Asistencia Académica Personalizada</strong>: ¿Estás trabajando en tu tesis o proyectos de investigación? Te guío en cada etapa, desde la conceptualización hasta la redacción final, asegurando que tu trabajo sea sólido y brillante.</li>
              <li><strong>Coaching de Vida</strong>: Juntos exploraremos tus objetivos y desafíos, diseñando estrategias prácticas para que desarrolles tu máximo potencial en todas las áreas de tu vida.</li>
              <li><strong>Edición y Armado de Libros</strong>: Como Editora Literaria y Escritora, sé lo importante que es dar vida a tus ideas. Te acompaño en el proceso de edición, maquetación y preparación de tu obra para que tu voz sea escuchada.</li>
            </ul>
            <p>Mi compromiso es ofrecerte un soporte integral, con un enfoque cálido y profesional, para que cada paso que des te acerque a la realización de tus sueños. ¿Lista/o para empezar?</p>
          </div>
        </div>
      </main>
      <footer className="bg-dark text-white text-center py-3">
        <p>© 2023 Rojas Informática. Todos los derechos reservados.</p>
      </footer>

    </div>
  );
}

export default App;
