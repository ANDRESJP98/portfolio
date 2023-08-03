import React from 'react';
import Projects from '../components/Projects';
import About from '../components/About'
import Nav from '../components/Nav';
import Contact from '../components/Contact'
import Skills from '../components/Skills'
export default function Home(){
    return (
        <div className="relative  min-h-screen" style={{
          backgroundColor: 'white',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}>
           <Nav/>
          <About/>
          <Skills/>
          <Projects/>
          <Contact/>
      </div>
    
      );
}