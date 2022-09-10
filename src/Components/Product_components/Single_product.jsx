import React from 'react';
import '../../Styles/Component_Styles/Product_style/Single_product_style.css';
import { Link } from 'react-router-dom';

function Single_product({ product, set_el_id, onAdd }) {
    return (
    <div className='single_product_container'>
        <div className="single_product_img">
            <img src={product.pic} />
        </div>
            <div className="single_product_info" onClick={() => set_el_id(product.id)}>
                <Link to={`/products/product-${product.id}`} style={{ textDecoration: 'none', color: 'black' }} >
                    <div className='header'>
                        <p className='brand'>{product.brand}</p>
                        <p className='model'>{product.model}</p>
                    </div>    
                    <div className="info">
                        <div className='first'>
                            <i className="fa-solid fa-circle-dot"></i>
                            <p>{product.first}</p>
                        </div>
                        <div className='second'>
                            <i className="fa-solid fa-circle-dot"></i>
                            <p>{product.second}</p>
                        </div>
                        <div className='third'>       
                            <i className="fa-solid fa-circle-dot"></i>
                            <p>{product.third}</p>
                        </div>
                    </div>
                </Link>
                <div className='stock_info'>
                    <p className={product.qtn > 5 ? 'green' : product.qtn > 1 ? 'yellow' : product.qtn > 0 ? 'red' : 'grey'}>
                        {product.qtn > 5 ? 'In stock' : product.qtn > 1 ? 'Few left' : product.qtn > 0 ? 'Last one' : 'Sold out'}
                    </p>
                </div>
            </div>
        <div className="single_product_buttons">
            <p className={product.topSelling ? 'top_sale' : 'close_top_sale_badge'}>Top Saller</p>
            <p className='price'>${product.price}</p>
            <button onClick={() => onAdd(product)}>Add to Cart</button>
        </div>
    </div>
  )
}

export default Single_product