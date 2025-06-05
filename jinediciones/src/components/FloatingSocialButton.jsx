// src/components/FloatingSocialButton.jsx
import React, { useState } from "react";
import "./FloatingSocialButton.css";
import { FaWhatsapp, FaInstagram, FaFacebook, FaShareAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const FloatingSocialButton = () => {
  const [open, setOpen] = useState(false);

  const toggleIcons = () => {
    setOpen(!open);
  };

  return (
    <div className="floating-container">
      {open && (
        <div className="icon-group">
          <a
            href="mailto:tumejorversionbyivy@gmail.com"
            className="social-icon email"
            target="_blank"
            rel="noopener noreferrer"
          >
            <MdEmail />
          </a>
          <a
            href="https://wa.me/5492645065072"
            className="social-icon whatsapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://facebook.com/JINedicionesSJ"
            className="social-icon facebook"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFacebook />
          </a>
          <a
            href="https://instagram.com/tuPerfil"
            className="social-icon instagram"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </div>
      )}
      <button className="main-button" onClick={toggleIcons}>
        <FaShareAlt />
      </button>
    </div>
  );
};

export default FloatingSocialButton;
