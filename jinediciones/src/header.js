import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './header.css';
import logo from './assets/logo.png';

function Header() {
  const [open, setOpen] = useState(false);
  const [submenuOpen, setSubmenuOpen] = useState(null);
  const [subsubmenuOpen, setSubsubmenuOpen] = useState(null);

  const toggleSubmenu = (index) => {
    setSubmenuOpen(submenuOpen === index ? null : index);
    setSubsubmenuOpen(null);
  };

  const toggleSubsubmenu = (index) => {
    setSubsubmenuOpen(subsubmenuOpen === index ? null : index);
  };

  return (
    <>
      <nav className="navbar navbar-dark bg-dark fixed-top d-flex justify-content-between align-items-center px-3">
        <button
          className="navbar-toggler"
          type="button"
          onClick={() => {
            setOpen(!open);
            setSubmenuOpen(null);
            setSubsubmenuOpen(null);
          }}

        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="typewriter-container">
          <h1 className="typewriter-title">
            <span className="typewriter-effect">Tu Mejor Versión </span>
          </h1>
        </div>




        {/* Logo alineado a la derecha */}
        <img
          src={logo}
          alt="Logo"
          style={{ width: '60px', height: '60px', borderRadius: '10%' }}
          className="ms-auto"
        />

      </nav>


      {open && (
        <div className="sidebar-menu bg-dark text-white">
          <ul className="main-menu">
            <li className="menu-item">
              <span onClick={() => toggleSubmenu(0)}>Impulsa tu éxito 🚀 </span>
            </li>
            <li className="menu-item">
              <span onClick={() => toggleSubmenu(1)}>Crea tu propia historia ✍️ </span>
            </li>
            <li className="menu-item">
              <span onClick={() => toggleSubmenu(2)}>Libros digitales 📚</span>
            </li>
          </ul>

          {/* Submenú 1: Impulsa tu éxito */}
          {submenuOpen === 0 && (
            <ul className="submenu-flyout">
              <li>
                <span onClick={() => toggleSubsubmenu(0)}>Talleres de autorealización ➡</span>
                {subsubmenuOpen === 0 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/taller-autoconocimiento.html" className="text-white text-decoration-none">Taller de autoconocimiento</a></li>
                    <li><a href="/html/inteligencia-emocional.html" className="text-white text-decoration-none">Inteligencia emocional</a></li>
                    <li><a href="/html/taller-autoestima.html" className="text-white text-decoration-none">Taller de autoestima</a></li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => toggleSubsubmenu(1)}>Coach y acompañamiento ➡</span>
                {subsubmenuOpen === 1 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/coach-educativo.html" className="text-white text-decoration-none">Coach educativo</a></li>
                    <li><a href="/html/realizacion-personal.html" className="text-white text-decoration-none">Realización personal</a></li>
                    <li><a href="/html/espacio-mujer.html" className="text-white text-decoration-none">Espacio mujer</a></li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => toggleSubsubmenu(2)}>Capacitación permanente ➡</span>
                {subsubmenuOpen === 2 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/curso-perfeccionamiento.html" className="text-white text-decoration-none">Curso de perfeccionamiento</a></li>
                    <li><a href="/html/curso-postitulo.html" className="text-white text-decoration-none">Curso de postítulo</a></li>
                  </ul>
                )}
              </li>
            </ul>
          )}

          {/* Submenú 2: Crea tu propia historia */}
          {submenuOpen === 1 && (
            <ul className="submenu-flyout">
              <li>
                <span onClick={() => toggleSubsubmenu(3)}>Escritura creativa ➡</span>
                {subsubmenuOpen === 3 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/taller-escritura-creativa.html" className="text-white text-decoration-none">Taller de escritura creativa</a></li>
                    <li><a href="/html/taller-escritura-ampliada.html" className="text-white text-decoration-none"> Taller de escritura ampliada</a></li>
                    <li><a href="/html/escritura-terapeutica.html" className="text-white text-decoration-none">Escritura terapéutica</a></li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => toggleSubsubmenu(4)}>Edición de libros ➡</span>
                {subsubmenuOpen === 4 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/correccion.html" className="text-white text-decoration-none">Corrección</a></li>
                    <li><a href="/html/maquetacion.html" className="text-white text-decoration-none">Maquetación</a></li>
                    <li><a href="/html/registros.html" className="text-white text-decoration-none">Registros</a></li>
                  </ul>
                )}
              </li>
            </ul>
          )}

          {/* Submenú 3: Libros digitales */}
          {submenuOpen === 2 && (
            <ul className="submenu-flyout">
              <li>
                <span onClick={() => toggleSubsubmenu(5)}>Mirada docente 🎓 </span>
                {subsubmenuOpen === 5 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/libros-educativos.html" className="text-white text-decoration-none">Libros educativos</a></li>
                    <li><a href="/html/manuales.html" className="text-white text-decoration-none">Manuales</a></li>
                    <li><a href="/html/recursos-descargables.html" className="text-white text-decoration-none">Recursos descargables</a></li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => toggleSubsubmenu(6)}>Leer para crecer 📖 </span>
                {subsubmenuOpen === 6 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/cuentos-relatos.html" className="text-white text-decoration-none">Cuentos y relatos</a></li>
                    <li><a href="/html/poesias.html" className="text-white text-decoration-none">Poesías</a></li>
                    <li><a href="/html/ensayos-monografias.html" className="text-white text-decoration-none">Ensayos y monografías</a></li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => toggleSubsubmenu(7)}>Lecturas inspiradoras 🌟</span>
                {subsubmenuOpen === 7 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/autoayuda.html" className="text-white text-decoration-none">Autoayuda</a></li>
                    <li><a href="/html/autorealizacion.html" className="text-white text-decoration-none">Autorealización</a></li>
                  </ul>
                )}
              </li>
            </ul>
          )}
        </div>
      )}
    </>
  );
}

export default Header;
