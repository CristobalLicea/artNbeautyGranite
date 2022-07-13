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
import Marble from './components/marble/marble';
import Mobile from './components/mobile/mobile';
import { useMediaQuery } from 'react-responsive'  



function App() {
  const isMobileDevice = useMediaQuery({
    query: "(min-device-width: 480px)",
  });
  return (

    
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/granite" element={<Granite />} />
      <Route path="/products/marble" element={<Marble />} />
      <Route path="/services" element={<Services />} />
      <Route path="/work" element={<Work />} />
      <Route path="/reach" element={<Reach />} />
      <Route path="/mobile" element={<Mobile />} />
    </Routes>
  );
} 

export default App;
