import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { certificates, technicalSkills, softSkills } from '../skillsData';

const Carousel = ({ items }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
  };

  const goToPrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? items.length - 1 : prevIndex - 1));
  };

  return (
    <div className="carousel-container relative flex flex-col items-center">
      <div className="carousel-content flex flex-col items-center">
        <img src={items[currentIndex].icon} alt={items[currentIndex].title} className="carousel-icon mb-4 w-24 h-24 object-contain" />
        <h3 className="text-xl font-bold mb-2">{items[currentIndex].title}</h3>
        <p className='text-justify text-xs sm:text-xs md:text-xs lg:text-sm'>{items[currentIndex].description}</p>
        {items[currentIndex].file && (
          <button style={{ backgroundColor: '#461E7D' }} className="mt-4 py-2 px-4 text-white font-bold text-xs sm:text-xs md:text-sm lg:text-base rounded">
            <a href={items[currentIndex].file} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </button>
        )}
      </div>

      {/* Controles del carrusel con flechas */}
      <button onClick={goToPrev} className="carousel-arrow-left absolute left-0 top-1/4 transform -translate-y-1/2">
        <FontAwesomeIcon icon={faArrowLeft} size="2x" />
      </button>
      <button onClick={goToNext} className="carousel-arrow-right absolute right-0 top-1/4 transform -translate-y-1/2">
        <FontAwesomeIcon icon={faArrowRight} size="2x" />
      </button>
    </div>
  );
};

const Skills = () => {
  return (
    <section id="skills" className="min-h-auto flex flex-col items-center py-10" style={{ backgroundColor: '#F8F9FA', color: '#461E7D' }}>
      <div className="container mx-auto  mt-8 sm:mt-15 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-8">Skills</h1>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
          {/* Card de Certificates */}
          <div className="bg-white shadow-lg rounded-lg p-6 relative transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-4">Certificates</h2>
            <Carousel items={certificates} />
          </div>

          {/* Card de Technical Skills */}
          <div className="bg-white shadow-lg rounded-lg p-6 relative transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <Carousel items={technicalSkills} />
          </div>

          {/* Card de Soft Skills */}
          <div className="bg-white shadow-lg rounded-lg p-6 relative transform transition-transform duration-300 hover:scale-105">
            <h2 className="text-3xl font-bold mb-4">Soft Skills</h2>
            <Carousel items={softSkills} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
