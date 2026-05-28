import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import ChefPage from './Components/ChefPage/ChefPage'

const App = () => {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />   
        <Route path='/chef' element={<ChefPage />} /> 
      </Routes>
      
    </div>
  )
}

export default App
