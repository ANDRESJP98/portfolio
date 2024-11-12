import React from "react";
import Aboutme from '../assets/About me.jpg';

function About() {
  return (
    <section id="about" className="min-h-screen flex items-center bg-white">
      <div className="mx-auto w-5/6 flex flex-col md:flex-row items-center">
        <div className="flex-grow w-full md:w-3/5 relative text-justify ml-12 mr-12">
          <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-black font-bold font-montserrat mb-4">
            About me
          </h2>
          <p className="text-sm sm:text-sm md:text-base base:text-base font-light text-black mt-3">
            I’m a Product Manager with experience in AI and software development. Over the years, I have successfully led cross-functional teams to create innovative, customer-focused solutions. My experience spans MVP management, detailed product requirements, and driving product growth.
          </p>
          <p className="text-sm sm:text-sm md:text-base base:text-base font-light text-black mt-3">
            I’m passionate about using AI and software development to solve real-world problems. I’ve worked on various AI-driven projects, including launching Colombia's first AI-driven chatbot and leading MVP integrations across Latin America, boosting customer satisfaction and operational efficiency.
          </p>
          <p className="text-sm sm:text-sm md:text-base base:text-base font-light text-black mt-3">
            My approach is rooted in user-centric design and data-driven decision-making. I thrive in collaborative environments, consistently delivering scalable, impactful solutions that align with both user needs and business goals. I’m skilled in Python, TensorFlow, machine learning, and agile methodologies, and I regularly leverage tools like Jira, Trello, and Figma to optimize product development.
          </p>
        </div>

        {/* Imagen ocupando la mitad del div */}
        
        </div>
        <div className="w-full md:w-3/5 lg:block hidden h-full">
            <img
              src={Aboutme}
              alt="AI Innovation Icon"
              className="object-cover w-full h-full"  // Ajuste de la imagen
            />
      </div>
    </section>
  );
}

export default About;

