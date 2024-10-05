import React from "react";
import '../styles/Home.css';
import photo from '../assets/Andres Rubiano.jpeg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faLinkedin } from '@fortawesome/free-brands-svg-icons';

function Home() {
  return (
    <section id="home" style={{ backgroundColor: '#F0F0F0' }} className="min-h-screen flex items-center bg-white">
      <div className="mx-auto w-4/5 flex flex-col md:flex-row items-center">
        {/* Text Section */}
        <div className="flex-grow w-full md:w-3/5 relative mt-8 pr-6">
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold font-montserrat">
            Hi, I'm <span className="typing-text" style={{ color: '#461E7D' }}>Andres</span>
          </h1>
          <h1 className="text-4xl sm:text-4xl md:text-5xl lg:text-6xl text-black font-bold font-montserrat">
          Product Manager 
          </h1>
          <h3 className="text-sm sm:text-sm md:text-base lg:text-lg mt-5 font-light text-black">
          With over 2 years of experience in AI and software development, I specialize in leading cross-functional teams to design and implement innovative, customer-focused solutions. My expertise includes managing MVPs, crafting detailed requirements, and driving product growth through strategic analysis.
          </h3>

          {/* Flex Container for Button and Icons */}
          <div className="flex items-center mt-4 sm:mt-7">
            <a href="#contact">
              <button style={{ backgroundColor: '#461E7D' }} className="py-2 px-4 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded">
                Contact me
              </button>
            </a>
            <a href='https://api.whatsapp.com/send?phone=573502018139&text=¡Hello! ¿How are you Andres?'
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon size='3x' className='ml-8' icon={faWhatsapp} style={{ color: '#461E7D' }} />
            </a>
            <a href='https://www.linkedin.com/in/andresjosepaterninarubiano-productmanager/'
              target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon size='3x' className='m-4' icon={faLinkedin} style={{ color: '#461E7D' }} />
            </a>
          </div>
        </div>

        {/* Image Section */}
        <img
          className="w-80 h-80 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full object-cover shadow-lg mt-8 md:mt-0"
          src={photo}
          alt="Profile"
        />
      </div>
    </section>
  );
}

export default Home;
