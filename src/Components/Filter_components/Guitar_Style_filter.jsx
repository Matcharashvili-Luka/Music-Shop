import React from 'react';
import '../../Styles/Component_Styles/Filter_Style/Guitar_style_filter.css'

function Guitar_Style_filter({
    // main 
    guitars, s_style, t_style, s_cut_style, d_cut_style, h_style,
    set_sort_norm, setGuitars, set_s_style, set_t_style, set_s_cut_style, set_d_cut_style, set_h_style, 
    // check
    guitars_check, strat_guitar_check, t_guitar_check, s_cut_guitar_check, d_cut_guitar_check,
    h_guitar_check,
    set_all_check, set_guitars_check, set_strat_guitar_check, set_t_guitar_check, set_s_cut_guitar_check, set_d_cut_guitar_check,
    set_h_guitar_check,
}) {

  return (
    <div className="guitars_filter">
        <input type="checkbox" id='open_detailed_guitar'/>      
        <div className="main_filter">
            <div>      
                <input type="checkbox" id='guitar_check' checked={guitars_check} onChange={() => null} />
                <label 
                    htmlFor="guitar_check"
                    onClick={() => {
                        set_all_check(false);
                        set_guitars_check(true);
                        set_strat_guitar_check(false);
                        set_t_guitar_check(false);
                        set_s_cut_guitar_check(false);
                        set_d_cut_guitar_check(false);
                        set_h_guitar_check(false);

                        setGuitars(!guitars);
                        set_s_style(false);
                        set_t_style(false);
                        set_s_cut_style(false);
                        set_d_cut_style(false);
                        set_h_style(false);
                      }}
                >Guitars</label>
            </div>
            <label htmlFor="open_detailed_guitar" className='arrow_down_guitar'>
                ||||
            </label>
        </div>   
        <div className="guitar_style_filter">
            <div>
                <input type="checkbox" id='s_style' checked={strat_guitar_check} onChange={() => null} />
                <label 
                    htmlFor="s_style"
                    onClick={() => {
                        set_all_check(false);
                        set_guitars_check(false);
                        set_strat_guitar_check(true);
                        set_t_guitar_check(false);
                        set_s_cut_guitar_check(false);
                        set_d_cut_guitar_check(false);
                        set_h_guitar_check(false);

                        setGuitars(true);
                        set_s_style(!s_style);
                        set_t_style(false);
                        set_s_cut_style(false);
                        set_d_cut_style(false);
                        set_h_style(false);
                      }}
                >Stratocaster Style</label>
            </div>
            <div>
                <input type="checkbox" id='t_style' checked={t_guitar_check} onChange={() => null} />
                <label 
                    htmlFor="t_style"
                    onClick={() => {
                        set_all_check(false);
                        set_guitars_check(false);
                        set_strat_guitar_check(false);
                        set_t_guitar_check(true);
                        set_s_cut_guitar_check(false);
                        set_d_cut_guitar_check(false);
                        set_h_guitar_check(false);

                        setGuitars(true);
                        set_s_style(false);
                        set_t_style(!t_style);
                        set_s_cut_style(false);
                        set_d_cut_style(false);
                        set_h_style(false);
                      }}
                >Telecaster Style</label>
            </div>
            <div>
                <input type="checkbox" id='sc_style' checked={s_cut_guitar_check} onChange={() => null} />
                <label 
                    htmlFor="sc_style"
                    onClick={() => {
                        set_all_check(false);
                        set_guitars_check(false);
                        set_strat_guitar_check(false);
                        set_t_guitar_check(false);
                        set_s_cut_guitar_check(true);
                        set_d_cut_guitar_check(false);
                        set_h_guitar_check(false);

                        setGuitars(true);
                        set_s_style(false);
                        set_t_style(false);
                        set_s_cut_style(!s_cut_style);
                        set_d_cut_style(false);
                        set_h_style(false);
                      }}
                >Single Cut Guitars</label>
            </div>
            <div>
                <input type="checkbox" id='dc_style' checked={d_cut_guitar_check} onChange={() => null} />
                <label 
                    htmlFor="dc_style"
                    onClick={() => {
                        set_all_check(false);
                        set_guitars_check(false);
                        set_strat_guitar_check(false);
                        set_t_guitar_check(false);
                        set_s_cut_guitar_check(false);
                        set_d_cut_guitar_check(true);
                        set_h_guitar_check(false);

                        setGuitars(true);
                        set_s_style(false);
                        set_t_style(false);
                        set_s_cut_style(false);
                        set_d_cut_style(!d_cut_style);
                        set_h_style(false);
                      }}
                >Double Cut Guitars</label>
            </div>
            <div>
                <input type="checkbox" id='heavy' checked={h_guitar_check} onChange={() => null} />
                <label 
                    htmlFor="heavy"
                    onClick={() => {
                        set_all_check(false);
                        set_guitars_check(false);
                        set_strat_guitar_check(false);
                        set_t_guitar_check(false);
                        set_s_cut_guitar_check(false);
                        set_d_cut_guitar_check(false);
                        set_h_guitar_check(true);

                        setGuitars(true);
                        set_s_style(false);
                        set_t_style(false);
                        set_s_cut_style(false);
                        set_d_cut_style(false);
                        set_h_style(!h_style);
                      }}
                >Heavy Guitars</label>
            </div>
        </div>
    </div>
  )
}

export default Guitar_Style_filter