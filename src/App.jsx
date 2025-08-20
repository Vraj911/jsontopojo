import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; 
import Home from './pages/Home';
import Playground from './pages/Playground';
import Register from './pages/Register';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />               
        <Route path="/register" element={<Register />} />   
        <Route path="/login" element={<Login />} />          
        <Route path="/playground" element={<Playground />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;
