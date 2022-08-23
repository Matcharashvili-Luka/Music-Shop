import React from 'react';
import Product_Filter from '../Components/Filter_components/Product_Filter';
import Product_section from '../Components/Product_components/Product_section';
import '../Styles/Page_Styles/Product.css';

function Product() {
  return (
    <div className='product_page_container'>
      <Product_Filter />
      <Product_section />
    </div>
  )
}

export default Product