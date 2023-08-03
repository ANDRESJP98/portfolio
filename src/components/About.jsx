import React from "react";
import '../styles/About.css'
function About(){

return (
<section id="about" className="min-h-screen flex items-center">
      <div className="mx-auto w-4/5 font-family-arial flex">
        <div className="flex-grow w-3/5 relative mt-8 pr-6">
          <h1 className="typing-text text-5xl sm:text-5xl md:text-6xl lg:text-7xl; text-black font-bold">
            Hi, I'm <span style={{ color: '#2563EB' }}>Andres</span>
          </h1>
          <h3 className="text-base sm:text-base md:text-lg lg:text-xl mt-5 font-light text-black">
            Passionate Full Stack developer looking for opportunities in the field of technology. I love taking on challenges and finding innovative solutions through code
          </h3>
          <a href="#contact">
            <button className="bg-blue-600 py-2 px-4 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded mt-4 sm:mt-7">
              <h1 className="text-white font-bold">Contact me</h1>
            </button>
          </a>
        </div>
          <img
            className="hidden sm:block sm:w-80 h-80 md:w-80 h-80 lg:w-100 lg:h-100"
            src='https://static.vecteezy.com/system/resources/previews/004/530/751/non_2x/programmer-coder-flat-illustration-software-engineer-professional-developer-isolated-cartoon-character-on-white-background-call-center-it-department-worker-freelancer-outsourcer-vector.jpg'
            alt="Profile"
          />
      </div>
    </section>
);
}
export default About