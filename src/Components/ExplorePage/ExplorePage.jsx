import React from 'react'
import './Explore.css'
import { Link } from 'react-router-dom';

const ExplorePage = () => {
  return (
    <div className='explore-page'>

        <div className="explore-content-in">
            <h3>Explore Our Menu</h3>
            <h1>The Experience</h1>

            <p>
                Immerse yourself in a culinary journey that celebrates the finest ingredients, 
                artisanal craftsmanship, and an ambiance of sophisticated warmth.
            </p>
        </div>

        <div className="explore-testimonials">
            <div className="testimonies">
                <span>🪴</span>
                <span>Fresh Ingredients</span>
               Sourced daily for unparalleled freshness and quality.
            </div>
            <div className="testimonies">
                <span>🎨</span>
                <span>Artisanal Plates</span>
                Every dish crafted with meticulous attention 
                and creative flair.
            </div>
            <div className="testimonies">
                <span>🌟</span>
               <span> Elegant Ambiance</span>
Sophisticated dining in a warm, welcoming coastal setting.
            </div>
            <div className="testimonies">
                <span>🥂</span>
                <span>Impeccable Service</span>
Attentive care that anticipates your every need.
            </div>
        </div>

      
    </div>
  )
}

export default ExplorePage
