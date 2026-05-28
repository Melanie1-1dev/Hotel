import React from 'react'
import './ChefPage.css'
import vegetable1 from '../../assets/vegetable.jpg';

const ChefPage = () => {
  return (
    <div className='chef-page-container'>
        <div className="page-image">
       <div className="box-in"></div>

            <img src={vegetable1} alt="Chef Brenda Pio" />

             <div className="box-in-again">
                    <span>⭐</span>
                     <span>MICHELIN</span>
                </div>

            </div>

        <div className="chef-page-content">
            <h3>A CULINARY VISION</h3>
            <h1>An Innovative Concept from Chef Brenda Pio</h1>
            <p>At Remo, we celebrate the marriage of Mediterranean tradition and contemporary 
                innovation. Chef Brenda Pio brings her Michelin-starred expertise to create
                 an unforgettable dining experience that honors the sea's bounty.</p>

                 <p>"Every plate is a masterpiece, fresh and flavorful, designed to transport you to the sun-drenched coasts of the Mediterranean."

               </p>
               <hr />

               <div className="chef-info">
                <div>BP</div>
            
                <div>
                    <h4>Chef Brenda Pio</h4>
                    <span>Executive Chef & Owner</span>
            
                </div>

               </div>
        </div>
      
    </div>
  )
}

export default ChefPage
