import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Login from "./Login"
import ProductCatalog from './ProductCatalog'
import './App.css'

function App() {
  
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/products" element={<ProductCatalog />} />
      </Routes>
    </Router>

  )
}

export default App
