import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Homepage from './pages/homepage';
import Navbar from './components/Navbar'
import Excuse from './pages/excuse';
import Advice from './pages/advice';
import Therapy from './pages/therapy';
import './App.css'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Homepage/>}/>
        <Route path='/excuse' element={<Excuse/>}/>
        <Route path='/advice' element={<Advice/>}/>
        <Route path='/therapy' element={<Therapy/>}/>
      </Routes>
    </Router>
    </>
  )
}
 
export default App
