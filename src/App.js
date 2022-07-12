import './App.css';
import React from 'react';
import {
  Routes,
  Route
} from "react-router-dom";
import Home from './components/home/home';
import Products from './components/products/products';
import Services from './components/services/services';
import { useMediaQuery } from 'react-responsive';


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/products" element={<Products />} />
        <Route path="/services" element={<Services />} />
      </Route>
    </Routes>
  );
} 

export default App;
