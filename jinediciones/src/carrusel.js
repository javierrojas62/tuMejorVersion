import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './carrusel.css';


import img1 from './assets/carruselMain/1.png';
import img2 from './assets/carruselMain/2.png';
import img3 from './assets/carruselMain/3.png';
import img4 from './assets/carruselMain/4.png';

function Carrusel() {
  const images = [img1, img2, img3, img4];

  return (
    <Carousel>
      {images.map((img, index) => (
        <Carousel.Item key={index}>
          <img
            className="d-block w-100 carousel img"
            src={img}
            alt={`Imagen ${index + 1}`}
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default Carrusel;
