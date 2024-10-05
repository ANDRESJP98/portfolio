import { Carousel } from 'react-responsive-carousel';
import React from "react";

const ProjectCarousel = ({ imgSrc }) => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showStatus={false} // Opcional: oculta el estado
      interval={3000} // Cambia la imagen cada 3 segundos
      transitionTime={500} // Tiempo de transición de 0.5 segundos
      emulateTouch // Permite la navegación táctil en dispositivos móviles
      className="rounded-lg shadow-lg" // Añade estilos adicionales
    >
      {imgSrc.map((src, index) => (
        <div key={index}>
          <img
            src={src}
            alt={`Project screenshot ${index + 1}`}
            className="object-cover w-full h-80" // Ajusta la imagen a la altura
          />
        </div>
      ))}
    </Carousel>
  );
};

export default ProjectCarousel;
