import './App.css';
import React, { useContext, createContext, useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
  Navigate
} from "react-router-dom";
import Home from './components/home/home';
import Granite from './components/granite/granite'
import Marble from './components/marble/marble'
import Nav from './components/nav/nav';
import { AuthService, Service } from './services';

const authService = new AuthService();
const service = new Service();

export const UserContext = createContext();

const AuthProvider = ({ children }) => {
  const context = {
    authService,
    service
  }

  const [authContext, setAuthContext] = useState(context)

  return (
    <UserContext.Provider value={authContext}>
      { children }
    </UserContext.Provider>
  )
}

const PrivateRoute = ({ children }) => {
  const context = useContext(UserContext)

  if (context.authService.clearance === "User") {
    return <Navigate to="/" replace />;
  }
  return children;
};



function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home/>} />
          <Route path="/granite" element={<Granite />} />
          <Route path="/marble" element={
          <PrivateRoute>
            <Marble />
          </PrivateRoute>} />
        </Route>
      </Routes>
      </AuthProvider>
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
