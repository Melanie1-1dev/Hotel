import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <div className='navbar-container'>

      <nav className="navbar">
       <div className="logo-in-nav">
        
          <h1>  <span className='logo-assist'>
          🍽️
        </span>

          <br />Hot💫<span>el</span>1🌟</h1>
       </div>
        
         <ul className="nav-links"> 
       <Link to="/"> <li><a>Home</a></li></Link>
       <Link to="/explore"> <li><a>Experience</a></li></Link>
            <li><a href="#">Menu</a></li>
       <Link to="/chef"><li><a>Chef</a></li></Link>
            <li><a href="#">Contacts</a></li>
          </ul>

          <div className="user-account-info">
            R
          </div>
      </nav>
      
    </div>
  )
}

export default Navbar
