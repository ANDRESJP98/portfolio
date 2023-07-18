import React from "react";
import pokemon from '../assets/pokemon.png'
import tessa from '../assets/tessa.png'
import portfolio from '../assets/portfolio (2).png'
import '../styles/Projects.css'
function Projects (){
return (
  <section id="projects" className="min-h-auto flex flex-col items-center ">
  <div className="container mx-auto font-family-arial mt-10 sm:mt-20 text-center">
    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600">PROJECTS</h1>
    <p className="text-lg sm:text-xl md:text-1xl lg:text-2xl font-light mt-2 text-black max-w-xl mx-auto">
      I have utilized the skills mentioned before in all of my projects to ensure an exceptional user experience
    </p>
    <div className="card-container flex flex-col sm:flex flex-col md:flex-row lg:flex items-center">
      <div className="m-4 bg-white border-2 border-black rounded-2xl w-80 h-85 sm:h-85 md:h-96">
        <a href='https://pf-teesa-front.vercel.app/home' className="flex flex-col items-center p-5">
          <img alt="Tessa" className="w-70 h-40 object-cover rounded-lg" src={tessa} />
          <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl font-bold text-black">Teesa S.A.S.</h1>
          <h2 className="text-sm sm:text-sm md:text-md lg:text-base font-light text-black mt-2">Responsive E-commerce website created for Teesa S.A.S., a company dedicated to the commercialization of food equipment</h2>
        </a>
        <div className="flex items-center justify-center -mt-6">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-black">GitHub</h1>
          <a className="flex flex-col items-end p-5 relative" href='https://github.com/LauraCayuelaT/PFTeesa_Front'>
            <img height='30px' width='30px' src='https://icones.pro/wp-content/uploads/2021/06/icone-github-noir.png' alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="m-4 bg-white border-2 border-black rounded-2xl w-80 h-85 sm:h-85 md:h-96">
        <a href='https://pokemon-front-production-ed00.up.railway.app/' className="flex flex-col items-center p-5">
          <img alt="Pokemon" className="w-60 h-40 object-cover rounded-lg" src={portfolio} />
          <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl font-bold text-black">Portfolio</h1>
          <h2 className="text-sm sm:text-sm md:text-md lg:text-base font-light text-black mt-2">Online portfolio responsive to showcase my frontend and backend web development projects. You're here! Thank you for visiting.</h2>
        </a>
        <div className="flex items-center justify-center -mt-6">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-black">GitHub</h1>
          <a className="flex flex-col items-end p-5 relative" href='https://github.com/ANDRESJP98/pokemon-front'>
            <img height='30px' width='30px' src='https://icones.pro/wp-content/uploads/2021/06/icone-github-noir.png' alt="GitHub" />
          </a>
        </div>
      </div>
      <div className="m-4 bg-white  border-2 border-black rounded-2xl w-80 h-85 sm:h-85 md:h-96">
        <a href='https://pokemon-front-production-ed00.up.railway.app/' className="flex flex-col items-center p-5">
          <img alt="Pokemon" className="w-60 h-40 object-cover rounded-lg" src={pokemon} />
          <h1 className="text-3xl sm:text-4xl md:text-2xl lg:text-4xl font-bold text-black">Pokemon</h1>
          <h2 className="text-sm sm:text-sm md:text-md lg:text-base font-light text-black mt-2">My first Website as a full stack developer, using front-end and back-end skills to create, search, filter the pokemon's details</h2>
        </a>
        <div className="flex items-center justify-center -mt-6">
          <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-black">GitHub</h1>
          <a className="flex flex-col items-end p-5 relative" href='https://github.com/ANDRESJP98/pokemon-front'>
            <img height='30px' width='30px' src='https://icones.pro/wp-content/uploads/2021/06/icone-github-noir.png' alt="GitHub" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>
)
}
export default Projects