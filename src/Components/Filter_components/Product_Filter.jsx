import React from 'react';
import All_elements from './All_elements';
import Drums_filter from './Drums_filter';
import Guitar_Style_filter from './Guitar_Style_filter';
import Key_Style_filter from './Key_Style_filter';
import Other_filter from './Other_filter';
import Price_filter from './Price_filter';

function Product_Filter({
  //check
  all_check, set_all_check, guitars_check, set_guitars_check, strat_guitar_check, set_strat_guitar_check, t_guitar_check , 
  set_t_guitar_check, s_cut_guitar_check, set_s_cut_guitar_check, d_cut_guitar_check, set_d_cut_guitar_check, h_guitar_check,
  set_h_guitar_check,
  //main type
  sort_norm, set_sort_norm, guitars, setGuitars,
  //subtype
  s_style, t_style, s_cut_style, d_cut_style, h_style, set_s_style, set_t_style, set_s_cut_style, set_d_cut_style, set_h_style, 
  //priceSort
  sort_by_incr, set_sort_by_incr, sort_by_decr, set_sort_by_decr, price_filter, set_price_filter,
  //other filter
  is_in_stoct, set_is_in_stoc, is_top_saller, set_is_top_saller,
  //side bar activation
  activate_side_bar
}) {
  return (
    <div className={activate_side_bar ? 'activate_filter_container' : "filter_container"}>
        <h1 className='firs_h1_tag_filter'>Style Filter</h1>
        <div className="product_specification">
          <All_elements 
            //check
            all_check={all_check}
            set_all_check={set_all_check}
            set_guitars_check={set_guitars_check}
            set_strat_guitar_check={set_strat_guitar_check}
            set_t_guitar_check={set_t_guitar_check}
            set_s_cut_guitar_check={set_s_cut_guitar_check}
            set_d_cut_guitar_check={set_d_cut_guitar_check}
            set_h_guitar_check={set_h_guitar_check}
            //main type
            set_sort_norm={set_sort_norm}
            setGuitars={setGuitars}
          />
          <Guitar_Style_filter
            //check 
            set_all_check={set_all_check}
            guitars_check={guitars_check}
            set_guitars_check={set_guitars_check}
            strat_guitar_check={strat_guitar_check}
            set_strat_guitar_check={set_strat_guitar_check}
            t_guitar_check={t_guitar_check}
            set_t_guitar_check={set_t_guitar_check}
            s_cut_guitar_check={s_cut_guitar_check}
            set_s_cut_guitar_check={set_s_cut_guitar_check}
            d_cut_guitar_check={d_cut_guitar_check}
            set_d_cut_guitar_check={set_d_cut_guitar_check}
            h_guitar_check={h_guitar_check}
            set_h_guitar_check={set_h_guitar_check}
            //main type
            set_sort_norm={set_sort_norm}
            setGuitars={setGuitars}
            //subtype
            s_style={s_style}
            set_s_style={set_s_style}
            t_style={t_style}
            set_t_style={set_t_style}
            s_cut_style={s_cut_style}
            set_s_cut_style={set_s_cut_style}
            d_cut_style={d_cut_style}
            set_d_cut_style={set_d_cut_style}
            h_style={h_style}
            set_h_style={set_h_style}
          />
          <Key_Style_filter />
          <Drums_filter />
        </div>
        <div className='product_price_filter'>
          <Price_filter 
            sort_by_incr={sort_by_incr}
            set_sort_by_incr={set_sort_by_incr}
            sort_by_decr={sort_by_decr}
            set_sort_by_decr={set_sort_by_decr}
            price_filter={price_filter}
            set_price_filter={set_price_filter}
          />
        </div>
        <div className='product_Other_filter'>
          <Other_filter 
            is_in_stoct={is_in_stoct}
            set_is_in_stoc={set_is_in_stoc}
            is_top_saller={is_top_saller}
            set_is_top_saller={set_is_top_saller}
          />
        </div>
      </div>
  )
}

export default Product_Filter