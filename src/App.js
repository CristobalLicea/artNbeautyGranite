import './App.css';
import React, { useEffect } from 'react';
import {
  Routes,
  Route,
  Outlet,
  useNavigate
} from "react-router-dom";
import Home from './components/home/home';
import Products from './components/products/products';
import Nav from './components/nav/nav';
import GranitePage from './components/granite/granite';
import MarblePage from './components/marble/marble';
import Services from './components/services/services';


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
