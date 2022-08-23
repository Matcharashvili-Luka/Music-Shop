import React from 'react';
import '../../Styles/Component_Styles/Product_style/Single_product_style.css';
import img from '../../Assets/Product/Guitars/S_Cut_Style/g17.jpg'

function Single_product() {
  return (
    <>
    <div className='single_product_container'>
        <div className="single_product_img">
            <img src={img} />
        </div>
        <div className="single_product_info">
            info
        </div>
        <div className="single_product_buttons">
            <p>$199</p>
            <button>Add to Cart</button>
        </div>
    </div>
    <div className='single_product_container'>
        <div className="single_product_img">
            img
        </div>
        <div className="single_product_info">
            info
        </div>
        <div className="single_product_buttons">
            <p>$199</p>
            <button>Add to Cart</button>
        </div>
    </div>
    <div className='single_product_container'>
        <div className="single_product_img">
            img
        </div>
        <div className="single_product_info">
            info
        </div>
        <div className="single_product_buttons">
            <p>$199</p>
            <button>Add to Cart</button>
        </div>
    </div>
    <div className='single_product_container'>
        <div className="single_product_img">
            img
        </div>
        <div className="single_product_info">
            info
        </div>
        <div className="single_product_buttons">
            <p>$199</p>
            <button>Add to Cart</button>
        </div>
    </div>
    <div className='single_product_container'>
        <div className="single_product_img">
            img
        </div>
        <div className="single_product_info">
            info
        </div>
        <div className="single_product_buttons">
            <p>$199</p>
            <button>Add to Cart</button>
        </div>
    </div>
    <div className='single_product_container'>
        <div className="single_product_img">
            img
        </div>
        <div className="single_product_info">
            info
        </div>
        <div className="single_product_buttons">
            <p>$199</p>
            <button>Add to Cart</button>
        </div>
    </div>
    </>
  )
}

export default Single_product