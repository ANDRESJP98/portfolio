import React from "react";
import '../styles/Home.css';
import photo from '../assets/Andres Rubiano.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <section
      id="home"
      style={{ backgroundColor: '#F0F0F0' }}
      className="min-h-screen flex items-center bg-white px-4 sm:px-8 lg:px-12"
    >
      <div className="mx-auto w-full sm:w-4/5 flex flex-col md:flex-row items-start md:items-center justify-between">
        
        {/* Sección de Texto */}
        <div className="flex-grow w-full md:w-3/5 relative mt-2 sm:mt-4 md:mt-8 text-left">
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-black font-bold font-montserrat">
          Hi, I'm <span  style={{ color: '#461E7D', display: 'inline-block' }}>Andres</span>
          </h1>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl text-black font-bold font-montserrat">
            Product Manager 
          </h1>
          <h3 className="text-sm sm:text-base md:text-sm lg:text-base mt-5 font-light text-black">
            With over 2 years of experience in AI and software development, I specialize in leading cross-functional teams to design and implement innovative, customer-focused solutions. My expertise includes managing MVPs, crafting detailed requirements, and driving product growth through strategic analysis.
          </h3>

          {/* Contenedor Flex para Botón e Iconos */}
          <div className="flex sm:flex-row flex-wrap items-center sm:items-center justify-start sm:justify-start mt-4 sm:mt-7 space-x-6 space-y-4 sm:space-y-0">
            <a href="#contact">
              <button
                style={{ backgroundColor: '#461E7D' }}
                className="py-2 px-6 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded"
              >
                Contact me
              </button>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=573502018139&text=¡Hello! ¿How are you Andres?"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <FontAwesomeIcon size="2x" className="text-3xl sm:text-4xl md:text-5xl" icon={faWhatsapp} style={{ color: '#461E7D' }} />
            </a>
            <a
              href="https://www.linkedin.com/in/andresjosepaterninarubiano-productmanager/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-center"
            >
              <FontAwesomeIcon size="2x" className="text-3xl sm:text-4xl md:text-5xl" icon={faLinkedin} style={{ color: '#461E7D' }} />
            </a>
          </div>
        </div>

        {/* Sección de Imagen - Oculta en tamaños muy pequeños y pequeños */}
        <img
          className="hidden md:block w-60 h-60 sm:w-60 sm:h-60 md:w-72 md:h-72 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg mt-8 md:mt-0 ml-6"
          src={photo}
          alt="Profile"
        />
      </div>
    </section>
  );
}

export default Home;
