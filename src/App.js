import './App.css';
import LandingPage from './Components/LandingPage/LandingPage'
import Login from './Components/Login/Login'
import Register from './Components/Register/Register'
import React from "react"

import {BrowserRouter, Routes, Route} from "react-router-dom"
import Main from './Main';
import FormularioPago from './Components/Send/FormularioPago/FormularioPago';
import RevisarDatos from './Components/Send/RevisarDatos/RevisarDatos';
import ConfirmacionPago from './Components/Send/ConfirmacionPago/ConfirmacionPago';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        <Route path="/main/*" element={<Main/>} />
      </Routes>
    </BrowserRouter>
    
  );
}

export default App;
