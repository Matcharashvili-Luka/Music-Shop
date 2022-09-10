import React from 'react';
import '../../Styles/Component_Styles/Filter_Style/Other_filter.css';

function Other_filter({ is_in_stoct, set_is_in_stoc, is_top_saller, set_is_top_saller, }) {
  return (
    <div className='other_filter_container'> 
        <h1 className='other_h1_tag'>Other Filter</h1>     
        <div className="other_filter">
            <div>      
                <input type="checkbox" id='in_stock_check' checked={is_in_stoct} onChange={() => null} />
                <label 
                    htmlFor="in_stock_check"
                    onClick={() => {set_is_in_stoc(!is_in_stoct)}}
                >In Stock</label>
            </div>
        </div>  
        <div className="other_filter">
            <div>      
                <input type="checkbox" id='top_selling_check' checked={is_top_saller} onChange={() => null} />
                <label 
                    htmlFor="top_selling_check"
                    onClick={() => {set_is_top_saller(!is_top_saller)}}
                >Top Saller</label>
            </div>
        </div>  
    </div>
  )
}

export default Other_filter