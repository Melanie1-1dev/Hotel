import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className='navbar-container'>

      <div className="navbar">
       <div className="logo-in-nav">
        
          <h1>  <span className='logo-assist'>
          🍽️
        </span>

          <br />Hot💫<span>el</span>1🌟</h1>
       </div>
        
         <ul className="nav-links"> 
            <li><a href="#">Home</a></li>
            <li><a href="#">Experience</a></li>
            <li><a href="#">Menu</a></li>
            <li><a href="#">Chef</a></li>
            <li><a href="#">Contacts</a></li>
          </ul>
      </div>
      
    </div>
  )
}

export default Navbar
