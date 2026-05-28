import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import ChefPage from './Components/ChefPage/ChefPage'
import ExplorePage from './Components/ExplorePage/ExplorePage'

const App = () => {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />   
        <Route path='/chef' element={<ChefPage />} /> 
        <Route path='/explore' element={<ExplorePage />} />
      </Routes>
      
    </div>
  )
}

export default App
