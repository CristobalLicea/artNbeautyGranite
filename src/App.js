import './App.css';
import React, { useContext, createContext, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,

} from "react-router-dom";
import Home from './components/home/home';
import Granite from './components/granite/granite'
import Marble from './components/marble/marble'
import Nav from './components/nav/nav';



function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/granite" element={<Granite />} />
          <Route path="/marble" element={<Marble />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

function Layout() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
