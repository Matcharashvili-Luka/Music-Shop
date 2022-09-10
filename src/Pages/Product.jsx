import React, { useState } from 'react';
import Product_Filter from '../Components/Filter_components/Product_Filter';
import Product_section from '../Components/Product_components/Product_section';
import '../Styles/Page_Styles/Product.css';

function Product({ colectData, set_el_id, data, all_elements, onAdd }) { 
  // sidebar activation
  let[activate_side_bar, set_activate_side_bar] = useState(false);

  // sort price
  let[sort_by_incr, set_sort_by_incr] = useState(false);
  let[sort_by_decr, set_sort_by_decr] = useState(false);
  let[price_filter, set_price_filter] = useState(99);

  //other filters
  let[is_in_stoct, set_is_in_stoc] = useState(false);
  let[is_top_saller, set_is_top_saller] = useState(false);

  // checkbox
  let[all_check, set_all_check] = useState(true);
  let[guitars_check, set_guitars_check] = useState(false);
  let[strat_guitar_check, set_strat_guitar_check] = useState(false);
  let[t_guitar_check, set_t_guitar_check] = useState(false);
  let[s_cut_guitar_check, set_s_cut_guitar_check] = useState(false);
  let[d_cut_guitar_check, set_d_cut_guitar_check] = useState(false);
  let[h_guitar_check, set_h_guitar_check] = useState(false);

  // Main Type Selector
  let[sort_norm, set_sort_norm] = useState(true);
  let[guitars, setGuitars] = useState(false);
  let[drums, set_drums] = useState(false);
  let[keys, set_keys] = useState(false);

  // Guitars Selector
  let[s_style, set_s_style] = useState(false);
  let[t_style, set_t_style] = useState(false);
  let[s_cut_style, set_s_cut_style] = useState(false);
  let[d_cut_style, set_d_cut_style] = useState(false);
  let[h_style, set_h_style] = useState(false);

  // Key Selectors


  // checks type. if we mark guitar - data will be filtered and will only return guitar ojbects.
  // by defoult array contains all the elements, and will be changed only if we marked smth.
  let type = all_elements;
  function changeElementsType(){
    if(guitars === true){
      type = colectData(data.guitar)
    }else if(drums === true){
      type = colectData(data.drums)
    }else if(keys === true){
      type = colectData(data.keys)
    }
  }
  changeElementsType();

  // checks subtype. if we mark 'stratocaster type' from guitars, out data will be filtered and will only return strat objects,
  // by default it will be instrument main type -> in this case we considered default fill be all the guitars (elements from previous funtion)
  function changeElementsSubType(){
    let subelement;
    if(s_style === true){
      subelement = colectData(data.guitar.S_Style)
    }else if(t_style === true){
      subelement = colectData(data.guitar.T_Style)
    }else if(s_cut_style === true){
      subelement = colectData(data.guitar.S_Cut)
    }else if(d_cut_style === true){
      subelement = colectData(data.guitar.D_Cut)
    }else if(h_style === true){
      subelement = colectData(data.guitar.Heavy)
    }else{
      subelement = type;
    }
    return subelement;
  }

  // sorts the data by price
  function sortLowToHigh(arr){
    return arr.sort((a,b) => parseFloat(a.price) - parseFloat(b.price));
  }
  function sortHighToLow(arr){
    return arr.sort((a,b) => parseFloat(b.price) - parseFloat(a.price));
  }
  function priceSort(arr){
    if(sort_by_incr === true){
      return sortLowToHigh(arr)
    }else if(sort_by_decr === true){
      return sortHighToLow(arr)
    }else{
      return arr;
    }
  }

  //filter price by input
  function filter_price_by_input(arr){
    return arr.filter((el) => el.price >= price_filter)
  }

  //filter by other filter
  function filter_other_filter(arr){
    if(is_in_stoct === true && is_top_saller === false){
      return arr.filter((el) => el.qtn > 0)
    }else if(is_in_stoct === false && is_top_saller === true){
      return arr.filter((el) => el.topSelling === true)
    }else if(is_in_stoct === true && is_top_saller === true){
      return arr.filter((el) => el.qtn > 0 && el.topSelling === true)
    }else{
      return arr
    }
  }
  
  let elements = filter_other_filter(filter_price_by_input(priceSort(changeElementsSubType())));

  return (
    <div className='product_page_container'>
      <Product_Filter 
        //side bar activation
        activate_side_bar={activate_side_bar}
        //chekc
        all_check={all_check}
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
        sort_norm={sort_norm}
        set_sort_norm={set_sort_norm}
        guitars={guitars}
        setGuitars={setGuitars}
        //subtype
        set_s_style={set_s_style}
        set_t_style={set_t_style}
        set_s_cut_style={set_s_cut_style}
        set_d_cut_style={set_d_cut_style}
        set_h_style={set_h_style}
        //priceSort
        sort_by_incr={sort_by_incr}
        set_sort_by_incr={set_sort_by_incr}
        sort_by_decr={sort_by_decr}
        set_sort_by_decr={set_sort_by_decr}
        price_filter={price_filter}
        set_price_filter={set_price_filter}
        //other filter
        is_in_stoct={is_in_stoct}
        set_is_in_stoc={set_is_in_stoc}
        is_top_saller={is_top_saller}
        set_is_top_saller={set_is_top_saller}
      />
      <Product_section 
        set_el_id={set_el_id}
        elements={elements}
        activate_side_bar={activate_side_bar}
        set_activate_side_bar={set_activate_side_bar}
        onAdd={onAdd}
      />
    </div>
  )
}

export default Product