import React, { useState, useEffect } from "react";

export default function Nav() {
  const [activeButton, setActiveButton] = useState("home");
  const [showNav, setShowNav] = useState(false);

  const handleSectionChange = () => {
    const homeSection = document.getElementById("home");
    const aboutSection = document.getElementById("about");
    const projectsSection = document.getElementById("work");
    const contactSection = document.getElementById("contact");
    const skillsSection = document.getElementById("skills");
    const caseStudiesSection = document.getElementById("case-studies");

    const homeOffset = homeSection.getBoundingClientRect().top;
    const aboutOffset = aboutSection.getBoundingClientRect().top;
    const projectsOffset = projectsSection.getBoundingClientRect().top;
    const contactOffset = contactSection.getBoundingClientRect().top;
    const skillsOffset = skillsSection.getBoundingClientRect().top;
    const caseStudiesOffset = caseStudiesSection.getBoundingClientRect().top;

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= homeOffset && scrollPosition < aboutOffset) {
      setActiveButton("home");
    } else if (scrollPosition >= aboutOffset && scrollPosition < skillsOffset * 3 / 2) {
      setActiveButton("about");
    } else if (scrollPosition >= skillsOffset && scrollPosition < projectsOffset * 3 / 2) {
      setActiveButton("skills");
    } else if (scrollPosition >= projectsOffset && scrollPosition < caseStudiesOffset * 3 / 2) {
      setActiveButton("work");
    } else if (scrollPosition >= caseStudiesOffset && scrollPosition < contactOffset * 3 / 2) {
      setActiveButton("case-studies"); 
    } else if (scrollPosition >= contactOffset + contactSection.offsetHeight - windowHeight) {
      setActiveButton("contact");
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      handleSectionChange();
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = (button) => {
    setActiveButton(button);
    setShowNav(false); // Cierra el menú después de hacer clic en una opción
  };

  return (
    <div style={{ backgroundColor: '#461E7D' }} className="fixed top-0 left-0 w-full z-50 shadow">
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* Nombre */}
        <h1 className="text-white text-xl sm:text-xl md:text-xl lg:text-3xl font-bold font-montserrat">
          Andres Rubiano
        </h1>

        {/* Botón para desplegar lista en móvil (ícono de menú tipo hamburguesa) */}
        <button
          onClick={() => setShowNav(!showNav)}
          className="block sm:hidden text-white font-bold"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>

        {/* Lista desplegable en móvil */}
        <nav
          className={`${
            showNav ? "block" : "hidden"
          } absolute top-full left-0 w-full sm:relative sm:flex sm:w-auto sm:space-x-6 text-base sm:text-sm md:text-lg lg:text-lg font-montserrat font-bold transition-all duration-300 bg-[#461E7D] sm:bg-transparent p-7 py-0 sm:p-0`}
        >
          <button
            onClick={() => handleClick("home")}
            className={`${
              activeButton === "home"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white block text-left sm:inline`}
          >
            <a href="#home">Home</a>
          </button>
          <button
            onClick={() => handleClick("about")}
            className={`${
              activeButton === "about"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white block text-left sm:inline`}
          >
            <a href="#about">About</a>
          </button>
          <button
            onClick={() => handleClick("work")}
            className={`${
              activeButton === "work"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white block text-left sm:inline`}
          >
            <a href="#work">Work</a>
          </button>
          <button
            onClick={() => handleClick("skills")}
            className={`${
              activeButton === "skills"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white block text-left sm:inline`}
          >
            <a href="#skills">Skills</a>
          </button>
          <button
            onClick={() => handleClick("case-studies")}
            className={`${
              activeButton === "case-studies"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white block text-left sm:inline`}
          >
            <a href="#case-studies">Case Studies</a>
          </button>
          <button
            onClick={() => handleClick("contact")}
            className={`${
              activeButton === "contact"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white block text-left sm:inline`}
          >
            <a href="#contact">Contact</a>
          </button>
        </nav>
      </div>
    </div>
  );
}
