import React from 'react';
import Projects from '../components/Projects';
import Home from '../components/Home'
import About from '../components/About'
import Nav from '../components/Nav';
import Contact from '../components/Contact'
import Skills from '../components/Skills'
import CaseStudies from '../components/CaseStudies'
export default function All(){
    return (
        <div className="relative  min-h-screen" style={{
          backgroundColor: 'white',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
          <Nav/>
          <Home/>
          <About/>
          <Projects/>
          <Skills/>
          {/* <CaseStudies/> */}
          <Contact/>
      </div>
    
      );
}