import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import projectsData from "../data";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight, faHome } from '@fortawesome/free-solid-svg-icons';

export default function Detail() {
  const { projectId } = useParams();
  const project = projectsData.find((item) => item.id === projectId);

  const [currentSlide, setCurrentSlide] = useState(0);

  if (!project) {
    return <div>Project not found.</div>;
  }

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % project.imgSrc.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + project.imgSrc.length) % project.imgSrc.length);
  };

  return (
    <div className="container mx-auto font-family-arial text-center">
      {/* Back to Home Button */}
      <div className="flex justify-start mt-4 sm:mt-6 ml-4 sm:ml-8 md:ml-12 lg:ml-16">
        <Link to="/" className="group flex items-center space-x-2">
          {/* Icono con Texto */}
          <FontAwesomeIcon 
            icon={faHome} style={{ color: '#461E7D' }}
            className="group-hover:text-gray-300 transition duration-200 ease-in-out" 
            size="2x" 
          />
          <span style={{ color: '#461E7D' }} className=" font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl group-hover:text-gray-300 transition duration-200 ease-in-out">
            Home
          </span>
        </Link>
      </div>

      {/* Project Title */}
      <div className="w-full">
        <h1 style={{ color: '#461E7D' }} className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mt-4">
          {project.title}
        </h1>
      </div>

      {/* Full-width section with background color */}
      <div style={{ backgroundColor: '#461E7D' }} className="w-full mt-8 py-14">
        <div className="max-w-screen mx-auto flex flex-row items-center justify-between">
          {/* Left Arrow */}
          <button onClick={handlePrev} className="m-8 text-white focus:outline-none">
            <FontAwesomeIcon icon={faArrowLeft} size="3x" /> {/* Tamaño más grande */}
          </button>

          {/* Image and Text Section */}
          <div className="flex flex-col sm:flex-row items-center justify-center sm:w-4/5 mx-auto space-x-8">
            {/* Image Section */}
            <div className="w-full sm:w-4/5">
  <img
    src={project.imgSrc[currentSlide]}
    alt={`Slide ${currentSlide}`}
    className="w-[600px] h-[350px] object-cover rounded-lg shadow-2xl" // Fixed size and object-cover to maintain aspect ratio
  />
</div>
            
            {/* Text Section */}
            <div className="sm:w-2/5 text-left">
              <h2 className="text-xl sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-4">
                {project.texts[currentSlide].feature}
              </h2>
              <p className="text-xs sm:text-s md:text-md lg:text-base font-light text-white">
                {project.texts[currentSlide].description}
              </p>
            </div>
          </div>

          {/* Right Arrow */}
          <button onClick={handleNext} className="m-8 text-white focus:outline-none">
            <FontAwesomeIcon icon={faArrowRight} size="3x" />
          </button>
        </div>
      </div>
    </div>
  );
}
