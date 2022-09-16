import React from 'react';
import '../../Styles/Component_Styles/SlideElement.css';
import { Link } from 'react-router-dom';

function SlideElement({ name, img, img2, info }) {
  return (
    <div className='slide_element_container'>
        <div className='slide_element_pic'>
            <img src={img}/>
        </div> 
        <div className='slide_element_pic2'>
            <img src={img2}/>
        </div> 
        <div className='slide_element_text'>
            <h1>{name}</h1>
            <p>{info}</p>
            <Link to='/products'>
              <div className='shop_btn'>
                <button>SHOP NOW</button>
              </div>
            </Link>
        </div>
    </div>
  )
}

export default SlideElement