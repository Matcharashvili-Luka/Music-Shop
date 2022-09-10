import React from 'react';
import Single_product from './Single_product';
import '../../Styles/Component_Styles/Product_style/Product_section_style.css';

function Product_section({ elements, activate_side_bar, set_activate_side_bar, set_el_id, onAdd }) {
  return (
    <div className="prodcut_container">
        <div className={activate_side_bar ? 'activate_product_cont_header' : 'product_cont_header'} >
          <i 
            className="fa-solid fa-circle-arrow-right"
            onClick={() => set_activate_side_bar(!activate_side_bar)}
          ></i>
          <h1>Product</h1>
        </div>
        {elements.map(el => {
          return (
            <Single_product 
              product={el}
              key={el.id}
              img = {el.pic}
              brand = {el.brand}
              model = {el.name}
              first = {el.first}
              second = {el.second}
              third = {el.third}
              price = {el.price}
              qtn = {el.qtn}
              topSelling = {el.topSelling}
              set_el_id={set_el_id}
              id={el.id}
              onAdd={onAdd}
            />
          )
        })}
    </div>
  )
}

export default Product_section