import React from 'react';
import Projects from './components/Projects';
import About from './components/About'
import Experience from './components/Experience';
import Skills from './components/Skills';
import Nav from './components/Nav';
import Contact from './components/Contact'
function App() {

  return (
    <div className="relative  min-h-screen" style={{
      backgroundColor: 'white',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
    }}>
       <Nav/>
      <About/>
      <Projects/>
      <Contact/>
  </div>

  );
}

export default App
