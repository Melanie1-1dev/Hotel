import React from 'react'
import './Home.css'
const Home = () => {
  return (
    <div className='home-page'>
        <div className="content-in">
            <h1>Welcome to <span>Hotel1 !</span></h1>
            <span>Where culinary artistry meets coastal elegance.
                <br />
                        An unforgettable dining experience awaits.
                        </span>

                        <button className='btn-for-booking'>Reserve your Table</button>


                        <div className="down-arrow-navigating">
                            ∨
                        </div>
        </div>
      
    </div>
  )
}

export default Home
