import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Inicio from './pages/Inicio';
import ComoFunciona from './pages/ComoFunciona';
import Bolos from './pages/Bolos';
import Anunciar from './pages/Anunciar';
import './App.css';

export default function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/como-funciona" element={<ComoFunciona />} />
        <Route path="/bolos" element={<Bolos />} />
        <Route path="/anunciar" element={<Anunciar />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
