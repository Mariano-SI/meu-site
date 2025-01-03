import React from 'react'
import './index.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './General/components/Navbar/Navbar'
import HomePage from './HomePage/pages/HomePage'
import Footer from './General/components/Footer/Footer'
import ScrollToTopButton from './General/components/ScrollToTopButton/ScrollToTopButton'
import { GlobalProvider } from './General/Context/GlobalContext'


function App() {
 
  return (
    <>
      <GlobalProvider>
        <BrowserRouter>
          <Navbar/>
          <div>
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
          </div>
          <Footer/>
          <ScrollToTopButton/>
        </BrowserRouter>
      </GlobalProvider>
    </>
  )
}

export default App
