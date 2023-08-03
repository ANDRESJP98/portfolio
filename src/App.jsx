import React from 'react';
import Home from './components/Home';
import Detail from './components/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/:projectId" element={<Detail />} />
    </Routes>
  </BrowserRouter>
)
  
}

export default App
