import React from 'react';
import Single_product from './Single_product';
import '../../Styles/Component_Styles/Product_style/Product_section_style.css';

function Product_section() {
  return (
    <div className="prodcut_container">
        <h1>Product</h1>
        <Single_product />
    </div>
  )
}

export default Product_section