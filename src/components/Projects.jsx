import React from "react";
import { Link } from "react-router-dom";

import projectsData from "../data";
import '../styles/Projects.css'

function Projects() {

  return (
    <section id="projects" className="min-h-auto flex items-center">
      <div className="container mx-auto font-family-arial mt-10 sm:mt-20 text-center">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600">PROJECTS</h1>
        <p className="text-lg sm:text-xl md:text-1xl lg:text-2xl font-light mt-2 text-black max-w-xl mx-auto">
          I have utilized the skills mentioned before in all of my projects to ensure an exceptional user experience
        </p>
        <div className="card-container grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center items-center">
          {projectsData.map((project) => (
            <div key={project.id} className="mx-auto m-4 bg-white border-2 border-black rounded-2xl w-80 h-85 sm:h-85 md:h-96 transform transition-transform hover:scale-105">
              <Link to={`/${project.id}`}>
                <div  className="flex flex-col items-center p-5">
                  <img alt={project.title} className="w-70 h-40 object-cover rounded-lg" src={project.imgSrc} />
                  <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl font-bold text-black mt-1">{project.title}</h1>
                  <h2 className="text-sm sm:text-sm md:text-md lg:text-base font-light text-black mt-4">{project.description}</h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;