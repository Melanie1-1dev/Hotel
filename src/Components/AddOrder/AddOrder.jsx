import React from 'react'
import './AddOrder.css'

const AddOrder = () => {
  return (
    <div className='add-order-container'>
        <div className="content-in-add-">
            <h4>JOIN US</h4>
            <h1>Reserve Your Table</h1>

            <p>Experience the finest in coastal Mediterranean 
                cuisine. We recommend booking in advance.</p>
        </div>

        <div className="form-add-container">

          <div className="form-container">
              <form action="#">

                <div className="date-time-inputs">
                    <span>Date</span>
                <input type="date" />
                <span>Time</span>
                <select name="time" id="time">

                  <option>6:00 PM</option>
                  <option>6:30 PM</option>
                  <option>7:00 PM</option>
                  <option>7:30 PM</option>
                  <option>8:00 PM</option>
                  <option>8:30 PM</option>
                </select>
                </div>
              <div className="personal-info">
                    <span>Guests</span>
                    <select name="guests" id="guests">
                        
                  <option>2 guests</option>
                  <option>3 guests</option>
              <option>4 guests</option>
              <option>5 guests</option>
              <option>6 guests</option>
              <option>Larger party(Contact us)</option>
            </select>
                <span>Name</span>
                <input type="text" placeholder='Your full name'/>
                </div>

                <div className="btn-to-submit">
                    <button type="submit">CONFIRM RESERVATION</button>
                </div>
            </form>
          </div>

        </div>
      
    </div>
  )
}

  export default AddOrder
 


