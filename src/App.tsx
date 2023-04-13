import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/navbar/Navbar'
import Home from './paginas/home/Home'
import Footer from './components/footer/Footer'
import Login from './components/login/Login'
import './App.css'

function App() {
  return (
    <BrowserRouter>
        <Navbar />
          <div style={{ minHeight: '100vh' }}>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/login" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </div>
        <Footer />
    </BrowserRouter>
  )
}

export default App