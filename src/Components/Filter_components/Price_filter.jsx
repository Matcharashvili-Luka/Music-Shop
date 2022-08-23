import React from 'react';
import '../../Styles/Component_Styles/Filter_Style/Price_filter.css'

function Price_filter() {
  return (
    <div className='price_filter_container'>
        <h1>Price Filter</h1>
        <div className="main_filter">
            <div className='prices'>      
                <input type="checkbox" id='priceup'/>
                <label htmlFor="priceup">Price: low to high </label>
            </div>
            <div className='prices'>      
                <input type="checkbox" id='pricedown'/>
                <label htmlFor="pricedown">Price: high to low</label>
            </div>
        </div>  
        <div className='price_range'>
            <p>$99</p>
            <input 
                type="range" 
                min={100}
                max={5000}
                step={50}
            />
            <p>$4999</p>
        </div>   
    </div>
  )
}

export default Price_filter