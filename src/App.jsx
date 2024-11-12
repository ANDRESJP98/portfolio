import React from 'react';
import All from './components/All';
import Detail from './components/Detail';
import DetailCase from './components/DetailCase';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
return (

    <BrowserRouter>
    <Routes>
  <Route path="/" element={<All />} />
  <Route path="/project/:projectId" element={<Detail />} />
  <Route path="/case/:projectCaseId" element={<DetailCase />} />
</Routes>

  </BrowserRouter>
)
  
}

export default App
