import React from 'react'
import './Contacts.css'

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Contacts = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">

        {/* Logo Section */}
        <div className="footer-box">
          <h1 className="logo">Remo</h1>

          <p>
            A culinary destination where Mediterranean flavors meet modern
            elegance. Join us for an unforgettable dining experience.
          </p>
        </div>

        {/* Contact */}
        <div className="footer-box">
          <h2>Contact Us</h2>

          <div className="contact-item">
            <FaPhoneAlt className="icon" />
            <span>+1 (555) 123-4567</span>
          </div>

          <div className="contact-item">
            <FaEnvelope className="icon" />
            <span>reservations@remo.com</span>
          </div>

          <div className="contact-item">
            <FaMapMarkerAlt className="icon" />
            <span>123 Coastal Drive, Seaside, CA 90210</span>
          </div>
        </div>

        {/* Hours */}
        <div className="footer-box">
          <h2>Hours</h2>

          <p>Tuesday - Thursday: 5:30 PM - 10:00 PM</p>
          <p>Friday - Saturday: 5:30 PM - 11:00 PM</p>
          <p>Sunday: 5:00 PM - 9:00 PM</p>
          <p>Closed Mondays</p>
        </div>

        {/* Newsletter */}
        <div className="footer-box">
          <h2>Newsletter</h2>

          <p>
            Stay updated with our latest offerings and events.
          </p>

          <div className="newsletter">
            <input type="email" placeholder="Your email address" />
            <button>Sign Up</button>
          </div>
        </div>

      </div>

      <hr />

      <div className="footer-bottom">
        <p>
          © 2026 Remo Restaurant. All Rights Reserved. Crafted with passion.
        </p>
      </div>
    </div>
  );
};

export default Contacts;
