import React, { useState, useEffect } from "react";

export default function Nav() {
  const [activeButton, setActiveButton] = useState("about");
  const [showNav, setShowNav] = useState(false);
  const [clickedButton, setClickedButton] = useState(null);

  const handleClick = (button) => {
    setActiveButton(button);
    setShowNav(false);
    setClickedButton(button);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!clickedButton) {
        const aboutSection = document.getElementById("aboutme");
        const projectsSection = document.getElementById("projects");
        const contactSection = document.getElementById("contact");

        const aboutOffset = aboutSection.offsetTop;
        const projectsOffset = projectsSection.offsetTop;
        const contactOffset = contactSection.offsetTop;
        const scrollPosition = window.scrollY;

        if (scrollPosition >= aboutOffset && scrollPosition < projectsOffset) {
          setActiveButton("about");
        } else if (scrollPosition >= projectsOffset && scrollPosition < contactOffset) {
          setActiveButton("projects");
        } else if (scrollPosition >= contactOffset) {
          setActiveButton("contact");
        }
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [clickedButton]);
  
  return (
    <div className="fixed top-0 left-0 w-full bg-blue-600 z-50 shadow ">
      <div className="flex justify-end items-center">
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