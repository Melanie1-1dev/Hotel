import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <div className='footer-in'>
        <div className="first-in">
            <h3>Hotel</h3>
            <p>A culinary destination where Mediterranean flavors meet modern elegance.
                 Join us for an unforgettable dining experience.</p>
        </div>

        <div className="second-in">
            <h3>Contact Us</h3>
        <p>📞+250756345622</p>
        <p>✉️</p>
        <p>123 Coastal Drive, Seaside, CA 90210</p>
        </div>

        <div className='third-in'>
            <h3>Hours</h3>    
            <p>Tuesday - Thursday: 5:30 PM - 10:00 PM

           </p>        
            <p>Friday - Saturday: 5:30 PM - 11:00 PM</p>
            <p>Sunday: 5:00 PM - 9:00 PM</p>
            <p>Closed Mondays</p>

        </div>

        <div className="fouth-in">
            <h3>Newsletter</h3>
            <p>Stay updated with our latest offerings and events.</p>
            <input type="text" placeholder='Your email address'/>
        </div>

        <div className="fifth">
            <hr />

            &copy; 2026 Hotel Restaurant. All Rights Reserved. Crafted with passion.

        </div>
      
    </div>
  )
}

export default Footer
