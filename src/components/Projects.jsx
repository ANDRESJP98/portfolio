import React from "react";
import { Link } from "react-router-dom";

import projectsData from "../data";
import '../styles/Projects.css'

function Projects() {

  return (
    <div id="work" style={{ backgroundColor: '#F0F0F0' }} >
    <section  className="min-h-auto ml-3 flex items-center">
      <div className="container mx-auto font-family-arial mt-10 sm:mt-20 text-left">
        <h1 style={{ color: '#461E7D' }} className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">My Work</h1>
        <div  className="card-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-center items-center">
  {projectsData.map((project) => (
    <div  style={{ backgroundColor: '#F0F0F0' }}  key={project.id} className="mt-6 bg-white transform transition-transform hover:scale-105">
      
        <div className="flex flex-col items-left p-5">
          <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-3xl font-bold text-black">{project.title}</h1>
          <img alt={project.title} className="mt-4 w-100 h-40 object-cover" src={project.imgSrc[0]} />
          <h2 className="text-xs sm:text-xs md:text-md lg:text-md font-light text-black mt-1">{project.overview}</h2>
          <Link to={`/${project.id}`}>
          <button className="mt-4 border-2 border-[#461E7D] text-[#461E7D] px-6 py-2 text-sm font-bold uppercase hover:bg-[#461E7D] hover:text-white transition-colors w-full">
                View More
              </button></Link>
        </div>
      
    </div>
  ))}
</div>

      </div>
    </section>
    </div>
  );
}

export default Projects;