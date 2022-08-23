import React from 'react';
import '../../Styles/Component_Styles/Filter_Style/Drums_filter.css';

function Drums_filter() {
  return (
    <div className='drums_filter'>      
        <div className="main_filter">
            <div>      
                <input type="checkbox" id='drums_check'/>
                <label htmlFor="drums_check">Drums</label>
            </div>
        </div>   
    </div>
  )
}

export default Drums_filter