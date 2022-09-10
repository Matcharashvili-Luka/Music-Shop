import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Styles/Component_Styles/Shopping_cart.css';

function Shopping_cart({ cart, onRemove }) {
    let [showcart, setShowCart] = useState(false);

    let price = 0;
    let in_stock_elemets = [];
    
    for(let i of cart){
        if(i.qtn > 0) in_stock_elemets.push(i)
    }

    for(let i of in_stock_elemets){
        price += i.price
    }

  return (
    <div className='SC_container'>
        <div className='SC_elements' id={showcart ? 'shown_cart' : 'hiddenCart'} >         
            <h1>Your Shopping Basket</h1>
            <div>
                {cart.map((el) => {
                    return (
                        <div 
                            key={el.id} 
                            className='Single_SC_element'
                            style={{ boxShadow: el.qtn > 0 ? '2px 2px 5px grey' : '2px 2px 5px red' }}
                        >
                            <div className="image">
                                <img src={el.pic} alt="" />
                            </div>
                            <div className="info">
                                <p className='brand'>{el.brand}</p>
                                <p className='model'>{el.name}</p>
                                <div>
                                    <p className='price'>Price: ${el.price}</p>
                                    <p className={el.qtn > 0 ? 'InStock' : 'SoldOut'}>
                                        {el.qtn > 0 ? 'In Stock' : 'Sold Out'}
                                    </p>
                                </div>
                            </div>
                            <div className="button">
                                <button onClick={() => onRemove(el)}><h2>REMOVE</h2></button>
                            </div>      
                        </div>
                    )
                })}
            </div>
        </div>
        <div className="price_calculate_cotainer">
            <div 
                className='arrow' 
                onClick={() => setShowCart(!showcart)} 
                id={showcart ? 'rotate_arrow' : '...'}
            >
                <i class="fa-solid fa-circle-arrow-right"></i>
            </div>
            <Link to='/products'>
                <div className='back_to_products'>
                    <button>Bact To Products</button>
                </div>
            </Link>
            <div className="total_cost">
                <p>Basket Cost: ${ price }</p>
            </div>
            <div className="shipping">
                <p>Shipping: + $40</p>
            </div>
            <div className="discount">
                <p>Dicount Over $300: <label>{price >= 300 ? '- $40' : '0'}</label></p>
            </div>
            <div className="total">
                <p>Total: ${price >= 300 ? price : price + 40}</p>
            </div>
            <div className="button">
                <button>To Checkout <i className="fa-solid fa-arrow-right"></i></button>
            </div>
            <div className={cart.length === in_stock_elemets.length ? 'info_tag' : 'info_red_tag'}>
                {cart.length === in_stock_elemets.length ? 
                    <p>All The Products Are In Stock!</p> :
                    <div>
                        <p className='warn'>Not All Products Are in Stock!</p>
                        <p>Prices are calculated for the products</p>
                        <p>that are in stock!</p>
                        <p>(check the basket)</p>
                    </div>
                }
            </div>
        </div>
    </div>
  )
}

export default Shopping_cart