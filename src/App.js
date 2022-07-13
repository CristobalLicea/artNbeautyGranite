import './App.css';
import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home/home';
import Products from './components/products/products';
import Services from './components/services/services';
import Work from './components/work/work';
import Reach from './components/reach/reach';
import Granite from './components/granite/granite'


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/granite" element={<Granite />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/reach" element={<Reach />} />
    </Routes>
  );
} 

export default App;
