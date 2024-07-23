import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './General/components/Navbar/Navbar'
import HomePage from './HomePage/pages/HomePage'


function App() {
 
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <div className='contentArea'>
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  )
}

export default App
