import './App.css';
import LandingPage from '../src/pages/LandingPage/LandingPage'
import Login from '../src/pages/LandingPage/LandingPage'
import Register from '../src/pages/Register/Register'
import React from "react"

import {BrowserRouter, Routes, Route} from "react-router-dom"
// import SideBar from '../src/Components/SideBar/SideBar';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/main/*" element={<SideBar/>} /> */}
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
