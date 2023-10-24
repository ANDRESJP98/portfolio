import React from "react";
import { useParams } from "react-router-dom";
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import projectsData from "../data";
import { Link } from "react-router-dom";

export default function Detail() {
  const { projectId } = useParams();
  const project = projectsData.find((item) => item.id === projectId);

  if (!project) {
    return <div>Project not found.</div>;
  }
  const videoUrl = project.video ? project.video : project.youtubeLink;

  return (
    <div className="container mx-auto font-family-arial text-center">
      <div className="flex flex-wrap ml-2 sm:ml-5 md:ml-8 lg:ml-10">
        <Link to="/">
          <button className="bg-blue-600 py-2 px-4 text-white font-bold text-xs sm:text-sm md:text-base lg:text-lg rounded mt-4 sm:mt-7">
            <h1 className="text-white font-bold">Back to home</h1>
          </button>
        </Link>
      </div>
      <div className="w-full">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-blue-600">
          {project.title}
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row">
        <div className="mt-10 sm:w-full md:w-1/2">
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-black">
            Would you like to see a description of the website?<br />Check my video!
          </p>
          {project.video ? (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '50px' }}>
    <video controls width="420" height="300">
      <source src={project.video} type="video/mp4" />
    </video>
  </div>
) : (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', margin: '70px' }}>
    <a href={videoUrl} target="_blank" rel="noopener noreferrer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/e/ef/Youtube_logo.png"
        alt="YouTube Icon"
        width="160"
        height="160"
      />
    </a>
  </div>
)}
          <div className="flex items-center justify-center -mt-6">
            <h1 className="text-3xl sm:text-3xl md:text-3xl lg:text-4xl font-bold text-black">
              GitHub
            </h1>
            <a
              className="flex flex-col items-end p-5 relative"
              href={project.githubLink}
            >
              <img
                height="30px"
                width="30px"
                src="https://icones.pro/wp-content/uploads/2021/06/icone-github-noir.png"
                alt="GitHub"
              />
            </a>
          </div>
        </div>

        <div className="mt-10 sm:w-full md:w-1/2">
          <p className="text-base sm:text-base md:text-lg lg:text-xl font-bold text-black text-center">
            My Contributions
          </p>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl font-light text-black text-start p-8">
            {project.logros}
          </p>
        </div>
      </div>
    </div>
  );
}