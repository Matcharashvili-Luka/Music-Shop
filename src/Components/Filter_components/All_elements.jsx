import React from 'react';
import '../../Styles/Component_Styles/Filter_Style/All_elements.css';

function All_elements({ 
  all_check, set_sort_norm, setGuitars,
  set_all_check, set_guitars_check, set_strat_guitar_check, set_t_guitar_check, set_s_cut_guitar_check, set_d_cut_guitar_check,
  set_h_guitar_check,
}) {
  return (
    <div className='all_elements_filter'>      
        <input type="checkbox" id='ALL' checked={all_check}/>
        <label 
          htmlFor="ALL"
          onClick={() => {
            set_sort_norm(true);
            setGuitars(false);
            set_all_check(true);
            set_guitars_check(false);
            set_strat_guitar_check(false);
            set_t_guitar_check(false);
            set_s_cut_guitar_check(false);
            set_d_cut_guitar_check(false);
            set_h_guitar_check(false);
          }}
        >All Product</label>
    </div>
  )
}

export default All_elements