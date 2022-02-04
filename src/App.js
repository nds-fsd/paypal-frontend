import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import LandingPage from '../src/pages/LandingPage/LandingPage'
import Login from '../src/pages/Login/Login'
import Register from '../src/pages/Register/RegisterPart1/RegisterPart1'
import React from "react"
import SideBar from '../src/Components/SideBar/SideBar';
import About from './pages/about/about';
import Princing from './pages/pricing/Princing';
import Contact from './pages/contact/contact';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/pricing" element={<Princing />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/main/*" element={<SideBar />} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
