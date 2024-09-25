import { Routes, Route, BrowserRouter, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';


import Home from './pages/Home'
import About from './pages/About'
import Careers from './pages/Careers'
import Products from './pages/Products'
import Support from './pages/Support'
import EbikeDetails from './components/Products/EbikeDetails';


export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/support" element={<Support />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/details/:title" element={<EbikeDetails />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
