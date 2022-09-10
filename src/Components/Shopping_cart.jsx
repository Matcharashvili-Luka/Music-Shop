import React from 'react';
import '../Styles/Component_Styles/Shopping_cart.css';

function Shopping_cart({ cart, onRemove }) {
  return (
    <div className='SC_container'>
        <h1>Shopping Cart</h1>
        <div className='SC_elements'>
            {cart.map((el) => {
                return (
                    <div key={el.id} className='Single_SC_element'>
                        <div className="image">
                            <img src={el.pic} alt="" />
                        </div>
                        <div className="info">
                            <p className='brand'>{el.brand}</p>
                            <p className='model'>{el.name}</p>
                            <p className='price'>Price: ${el.price}</p>
                        </div>
                        <div className="button">
                            <button onClick={() => onRemove(el)}><h2>REMOVE</h2></button>
                        </div>      
                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Shopping_cart