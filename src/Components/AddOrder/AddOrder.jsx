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

        <div className="form-add-in">

            <form action="#">

                <span>Date</span>
                <input type="date" />
                <span>Time</span>
                <input type="time" />
                <span>Guests</span>
                <input type="text" />
                <select name="" id=""></select>
                <span>Name</span>
                <input type="text" placeholder='Your full name'/>
                <div className="btn-to-submit">
                    <button>CONFIRM RESERVATION</button>
                </div>
            </form>

        </div>
      
    </div>
  )
}

  export default AddOrder
 


