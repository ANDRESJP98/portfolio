import React from 'react';
import All from './components/All';
import Detail from './components/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
return (

    <BrowserRouter>
    <Routes>
      <Route path="/" element={<All />} />
      <Route path="/:projectId" element={<Detail />} />
    </Routes>
  </BrowserRouter>
)
  
}

export default App
