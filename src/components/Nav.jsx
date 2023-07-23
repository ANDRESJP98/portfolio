import React, { useState, useEffect } from "react";

export default function Nav() {
  const [activeButton, setActiveButton] = useState("about");
  const [showNav, setShowNav] = useState(false);

  const handleSectionChange = () => {
    const aboutSection = document.getElementById("aboutme");
    const projectsSection = document.getElementById("projects");
    const contactSection = document.getElementById("contact");

    const aboutOffset = aboutSection.getBoundingClientRect().top;
    const projectsOffset = projectsSection.getBoundingClientRect().top;
    const contactOffset = contactSection.getBoundingClientRect().top;

    const scrollPosition = window.scrollY;

    if (scrollPosition >= aboutOffset && scrollPosition < projectsOffset) {
      setActiveButton("about");
    } else if (scrollPosition >= projectsOffset && scrollPosition < contactOffset) {
      setActiveButton("projects");
    } else if (scrollPosition >= contactOffset) {
      setActiveButton("contact");
    }
  };

  useEffect(() => {
    // Handle scroll position changes
    const handleScroll = () => {
      handleSectionChange();
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener when component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  return (
    <div className="fixed top-0 left-0 w-full bg-blue-600 z-50 shadow ">
      <div className="flex justify-end mr-4 items-center">
        <button
          onClick={() => setShowNav(!showNav)}
          className="block sm:hidden bg-blue-600 text-white font-arial font-bold py-4 px-4"
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
        <nav
          className={`${
            showNav ? "block" : "hidden"
          } sm:flex sm:py-4 sm:px-6 md:px-7 lg:px-8 justify-end space-x-3 font-arial font-bold transition-all duration-300`}
        >
          <button
            onClick={() => handleClick("about")}
            className={`${
              activeButton === "about"
                ? "text-black"
                : "bg-blue-600 text-white border-blue-600"
            } text-xs sm:text-sm md:text-base lg:text-lg`}
          >
            <a href="#aboutme">ABOUT</a>
          </button>
          <button
            onClick={() => handleClick("projects")}
            className={`${
              activeButton === "projects"
                ? "text-black"
                : "bg-blue-600 text-white border-blue-600"
            } text-xs sm:text-sm md:text-base lg:text-lg`}
          >
            <a href="#projects">PROJECTS</a>
          </button>
          <button
            onClick={() => handleClick("contact")}
            className={`${
              activeButton === "contact"
                ? "text-black"
                : "bg-blue-600 text-white border-blue-600"
            } text-xs sm:text-sm md:text-base lg:text-lg`}
          >
            <a href="#contact">CONTACT</a>
          </button>
        </nav>
      </div>
      <hr className="border-t-2 md:border-t-4 border-black w-full" />
    </div>
  );
}