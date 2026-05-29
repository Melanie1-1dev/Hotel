import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './Components/Navbar/Navbar'
import Home from './Components/Home/Home'
import ChefPage from './Components/ChefPage/ChefPage'
import ExplorePage from './Components/ExplorePage/ExplorePage'
import AddOrder from './Components/AddOrder/AddOrder'
import Footer from './Components/Footer/Footer'


const App = () => {
  return (
    <div>

      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />   
        <Route path='/chef' element={<ChefPage />} /> 
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/add-order' element={<AddOrder />} />
        <Route path='/footer' element={<Footer />} />
      </Routes>
      
    </div>
  )
}

export default App
