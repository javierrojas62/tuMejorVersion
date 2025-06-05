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
        <div className="flex-grow-1 d-flex justify-content-center">
          <h1 className="typewriter-title m-0 text-center">Tu Mejor Versión</h1>
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
              <span onClick={() => toggleSubmenu(0)}>🚀 Impulsa tu éxito ➡</span>
            </li>
            <li className="menu-item">
              <span onClick={() => toggleSubmenu(1)}>✍️ Crea tu propia historia ➡</span>
            </li>
            <li className="menu-item">
              <span onClick={() => toggleSubmenu(2)}>📚 Libros digitales ➡</span>
            </li>
          </ul>

          {/* Submenú 1: Impulsa tu éxito */}
          {submenuOpen === 0 && (
            <ul className="submenu-flyout">
              <li>
                <span onClick={() => toggleSubsubmenu(0)}>Talleres de autorealización ➡</span>
                {subsubmenuOpen === 0 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/taller-autoconocimiento.html">Taller de autoconocimiento</a></li>
                    <li><a href="/html/inteligencia-emocional.html">Inteligencia emocional</a></li>
                    <li><a href="/html/taller-autoestima.html">Taller de autoestima</a></li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => toggleSubsubmenu(1)}>Coach y acompañamiento ➡</span>
                {subsubmenuOpen === 1 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/coach-educativo.html">Coach educativo</a></li>
                    <li><a href="/html/realizacion-personal.html">Realización personal</a></li>
                    <li><a href="/html/espacio-mujer.html">Espacio mujer</a></li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => toggleSubsubmenu(2)}>Capacitación permanente ➡</span>
                {subsubmenuOpen === 2 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/curso-perfeccionamiento.html">Curso de perfeccionamiento</a></li>
                    <li><a href="/html/curso-postitulo.html">Curso de postítulo</a></li>
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
                    <li><a href="/html/taller-escritura-creativa.html">Taller de escritura creativa</a></li>
                    <li><a href="/html/taller-escritura-ampliada.html">Taller de escritura ampliada</a></li>
                    <li><a href="/html/escritura-terapeutica.html">Escritura terapéutica</a></li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => toggleSubsubmenu(4)}>Edición de libros ➡</span>
                {subsubmenuOpen === 4 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/correccion.html">Corrección</a></li>
                    <li><a href="/html/maquetacion.html">Maquetación</a></li>
                    <li><a href="/html/registros.html">Registros</a></li>
                  </ul>
                )}
              </li>
            </ul>
          )}

          {/* Submenú 3: Libros digitales */}
          {submenuOpen === 2 && (
            <ul className="submenu-flyout">
              <li>
                <span onClick={() => toggleSubsubmenu(5)}>🎓 Mirada docente ➡</span>
                {subsubmenuOpen === 5 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/libros-educativos.html">Libros educativos</a></li>
                    <li><a href="/html/manuales.html">Manuales</a></li>
                    <li><a href="/html/recursos-descargables.html">Recursos descargables</a></li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => toggleSubsubmenu(6)}>📖 Leer para crecer ➡</span>
                {subsubmenuOpen === 6 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/cuentos-relatos.html">Cuentos y relatos</a></li>
                    <li><a href="/html/poesias.html">Poesías</a></li>
                    <li><a href="/html/ensayos-monografias.html">Ensayos y monografías</a></li>
                  </ul>
                )}
              </li>
              <li>
                <span onClick={() => toggleSubsubmenu(7)}>🌟 Lecturas inspiradoras ➡</span>
                {subsubmenuOpen === 7 && (
                  <ul className="subsubmenu-flyout">
                    <li><a href="/html/autoayuda.html">Autoayuda</a></li>
                    <li><a href="/html/autorealizacion.html">Autorealización</a></li>
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
