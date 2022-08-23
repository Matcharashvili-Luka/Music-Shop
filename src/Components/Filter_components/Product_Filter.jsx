import React from 'react';
import Drums_filter from './Drums_filter';
import Guitar_Style_filter from './Guitar_Style_filter';
import Key_Style_filter from './Key_Style_filter';
import Price_filter from './Price_filter';

function Product_Filter() {
  return (
    <div className="filter_container">
        <h1>Style Filter</h1>
        <div className="product_specification">
          <Guitar_Style_filter />
          <Key_Style_filter />
          <Drums_filter />
        </div>
        <div className='product_price_filter'>
          <Price_filter />
        </div>
      </div>
  )
}

export default Product_Filter