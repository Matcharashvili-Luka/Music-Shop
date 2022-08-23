import React from 'react';
import '../../Styles/Component_Styles/Filter_Style/Guitar_style_filter.css'

function Guitar_Style_filter() {
  return (
    <div className="guitars_filter">
        <input type="checkbox" id='open_detailed_guitar'/>      
        <div className="main_filter">
            <div>      
                <input type="checkbox" id='guitar_check'/>
                <label htmlFor="guitar_check">Guitars</label>
            </div>
            <label htmlFor="open_detailed_guitar" className='arrow_down_guitar'>
                ||||
            </label>
        </div>   
        <div className="guitar_style_filter">
            <div>
                <input type="checkbox" id='s_style'/>
                <label htmlFor="s_style">Stratocaster Style</label>
            </div>
            <div>
                <input type="checkbox" id='t_style'/>
                <label htmlFor="t_style">Telecaster Style</label>
            </div>
            <div>
                <input type="checkbox" id='sc_style'/>
                <label htmlFor="sc_style">Single Cut Guitars</label>
            </div>
            <div>
                <input type="checkbox" id='dc_style'/>
                <label htmlFor="dc_style">Double Cut Guitars</label>
            </div>
            <div>
                <input type="checkbox" id='heavy'/>
                <label htmlFor="heavy">Heavy Guitars</label>
            </div>
        </div>
    </div>
  )
}

export default Guitar_Style_filter