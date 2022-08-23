import React from 'react';
import '../../Styles/Component_Styles/Filter_Style/Keys_style_filter.css'

function Key_Style_filter() {
  return (
    <div className="keys_filter">
        <input type="checkbox" id='open_detailed_keys'/>      
        <div className="main_filter">
            <div>      
                <input type="checkbox" id='keys_check'/>
                <label htmlFor="keys_check">Keys</label>
            </div>
            <label htmlFor="open_detailed_keys" className='arrow_down_keys'>
                ||||
            </label>
        </div>   
        <div className="keys_style_filter">
            <div>
                <input type="checkbox" id='grand_piano'/>
                <label htmlFor="grand_piano">Grand Piano</label>
            </div>
            <div>
                <input type="checkbox" id='keyboard'/>
                <label htmlFor="keyboard">Keyboard</label>
            </div>
            <div>
                <input type="checkbox" id='piano'/>
                <label htmlFor="piano">Piano</label>
            </div>
        </div>
    </div>
  )
}

export default Key_Style_filter