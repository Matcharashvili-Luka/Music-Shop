import React from 'react';
import '../../Styles/Component_Styles/Filter_Style/Price_filter.css'

function Price_filter({ sort_by_incr, set_sort_by_incr, sort_by_decr, set_sort_by_decr, price_filter, set_price_filter,}) {
  return (
    <div className='price_filter_container'>
        <h1 className='price_h1_tag'>Price Filter</h1>
        <div className="main_filter">
            <div className='prices'>      
                <input type="checkbox" id='priceup' checked={sort_by_incr} onChange={() => null} />
                <label 
                    htmlFor="priceup" 
                    onClick={() => {
                        set_sort_by_decr(false)
                        set_sort_by_incr(!sort_by_incr)
                    }}
                >Price: low to high </label>
            </div>
            <div className='prices'>      
                <input type="checkbox" id='pricedown' checked={sort_by_decr}onChange={() => null} />
                <label 
                    htmlFor="pricedown" 
                    onClick={() => {
                        set_sort_by_incr(false)
                        set_sort_by_decr(!sort_by_decr)
                    }}
                    >Price: high to low</label>
            </div>
        </div>  
        <div className='price_range'>
            <p className='firs_p'>${price_filter}</p>
            <input 
                type="range" 
                min={99}
                max={5999}
                step={50}
                value={price_filter}
                onChange={(e) => set_price_filter(e.target.value)}
            />
            <p className='second_p'>$5999</p>
        </div>   
    </div>
  )
}

export default Price_filter