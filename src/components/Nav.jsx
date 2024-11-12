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
   /*  const caseStudiesSection = document.getElementById("case-studies"); */

    const homeOffset = homeSection.getBoundingClientRect().top;
    const aboutOffset = aboutSection.getBoundingClientRect().top;
    const projectsOffset = projectsSection.getBoundingClientRect().top;
    const contactOffset = contactSection.getBoundingClientRect().top;
    const skillsOffset = skillsSection.getBoundingClientRect().top;
   /*  const caseStudiesOffset = caseStudiesSection.getBoundingClientRect().top; */

    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;

    if (scrollPosition >= homeOffset && scrollPosition < aboutOffset) {
      setActiveButton("home");
    } else if (scrollPosition >= aboutOffset && scrollPosition < skillsOffset * 3 / 2) {
      setActiveButton("about");
    } else if (scrollPosition >= skillsOffset && scrollPosition < projectsOffset * 3 / 2) {
      setActiveButton("skills");
    } else if (scrollPosition >= projectsOffset && scrollPosition < caseStudiesOffset* 3 / 2) {
      setActiveButton("work");
    }else if (scrollPosition >= caseStudiesOffset && scrollPosition < contactOffset * 3 / 2) {
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
    setShowNav(false); // Close the navigation menu after clicking a button
  };

  return (
    <div style={{ backgroundColor: '#461E7D' }} className="fixed top-0 left-0 w-full z-50 shadow">
      
      <div className="flex justify-between items-center px-6 py-4">
        
        {/* Left Section with Name */}
        <h1 className="text-white text-2xl md:text-3xl font-bold font-montserrat">
          Andres Rubiano
        </h1>

        {/* Hamburger Menu (for mobile) */}
        <button
          onClick={() => setShowNav(!showNav)}
          className="block sm:hidden bg-white text-white font-bold py-4 px-4"
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

        {/* Navigation Links */}
        <nav
          className={`${
            showNav ? "block" : "hidden"
          } sm:flex space-x-6 text-lg font-montserrat font-bold transition-all duration-300`}
        >
          <button
            onClick={() => handleClick("home")}
            className={`${
              activeButton === "home"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white`}
          >
            <a href="#home">Home</a>
          </button>
          <button
            onClick={() => handleClick("about")}
            className={`${
              activeButton === "about"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white`}
          >
            <a href="#about">About</a>
          </button>
          <button
            onClick={() => handleClick("work")}
            className={`${
              activeButton === "work"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white`}
          >
            <a href="#work">Work</a>
          </button>
          <button
            onClick={() => handleClick("skills")}
            className={`${
              activeButton === "skills"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white`}
          >
            <a href="#skills">Skills</a>
          </button>
          <button
            onClick={() => handleClick("case-studies")}
            className={`${
              activeButton === "case-studies"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white`}
          >
            <a href="#case-studies">Case Studies</a>
          </button>

          <button
            onClick={() => handleClick("contact")}
            className={`${
              activeButton === "contact"
                ? "text-white"
                : "text-gray-300"
            } hover:text-white`}
          >
            <a href="#contact">Contact</a>
          </button>
        </nav>
      </div>
    </div>
  );
}
