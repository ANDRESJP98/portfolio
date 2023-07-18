import React, { useState, useEffect } from "react";
import background from '../assets/background.svg';
import '../styles/Experience.css';

function Experience() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const data = [
    {
      jobTitle: "Job Title 1",
      companyName: "Company Name 1",
      description: "Job description and responsibilities 1",
      year: "Year 1"
    },
    {
      jobTitle: "Job Title 2",
      companyName: "Company Name 2",
      description: "Job description and responsibilities 2",
      year: "Year 2"
    },
    // Add more data items as needed
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
    }, 5000); // Change the interval time as desired (in milliseconds)

    return () => clearInterval(interval);
  }, [data]);

  return (
    <section id="experience" className="min-h-auto  flex flex-col items-center justify-center">
      <div className="container mx-auto font-family-arial">
        <h1 className="text-3xl font-bold mt-20">Experience</h1>
        <div className="timeline mt-10">
          <div className="timeline-item">
            <div className="timeline-content">
              <h2>{data[currentIndex].jobTitle}</h2>
              <h3>{data[currentIndex].companyName}</h3>
              <p>{data[currentIndex].description}</p>
            </div>
            <div className="timeline-date">{data[currentIndex].year}</div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Experience;