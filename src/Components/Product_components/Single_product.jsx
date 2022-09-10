import React from 'react';
import '../../Styles/Component_Styles/Product_style/Single_product_style.css';
import { Link } from 'react-router-dom';

function Single_product({ img, brand, model, first, second, third, price, qtn, topSelling, id, set_el_id }) {
  return (
    <div className='single_product_container'>
        <div className="single_product_img">
            <img src={img} />
        </div>
            <div className="single_product_info" onClick={() => set_el_id(id)}>
                <Link to={`/products/product-${id}`} style={{ textDecoration: 'none', color: 'black' }} >
                <div className='header'>
                    <p className='brand'>{brand}</p>
                    <p className='model'>{model}</p>
                </div>
                </Link>
                <div className="info">
                    <div className='first'>
                        <i class="fa-solid fa-circle-dot"></i>
                        <p>{first}</p>
                    </div>
                    <div className='second'>
                        <i class="fa-solid fa-circle-dot"></i>
                        <p>{second}</p>
                    </div>
                    <div className='third'>       
                        <i class="fa-solid fa-circle-dot"></i>
                        <p>{third}</p>
                    </div>
                </div>
                <div className='stock_info'>
                    <p className={qtn > 5 ? 'green' : qtn > 1 ? 'yellow' : qtn > 0 ? 'red' : 'grey'}>
                        {qtn > 5 ? 'In stock' : qtn > 1 ? 'Few left' : qtn > 0 ? 'Last one' : 'Sold out'}
                    </p>
                </div>
            </div>
        <div className="single_product_buttons">
            <p className={topSelling ? 'top_sale' : 'close_top_sale_badge'}>Top Saller</p>
            <p className='price'>${price}</p>
            <button>Add to Cart</button>
        </div>
    </div>
  )
}

export default Single_product