import React from 'react';
import Header from './components/Header/Header';
import { Outlet } from "react-router-dom";
import MainPage from './components/MainPage/MainPage';
import { useLocation } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import './index.css'

function App() {
  const location = useLocation();

  return (
    <div>
      <Header />
      { location.pathname === '/' && <MainPage /> }
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
