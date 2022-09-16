import React, { useState } from 'react';
import gibson from '../../Assets/Brands/gibson_logo.png';
import fender from '../../Assets/Brands/fender_logo.png';
import hb from '../../Assets/Brands/hb_logo.jpg';
import epiphone from '../../Assets/Brands/epiphone_logo.png';
import esp from '../../Assets/Brands/esp_logo.jpg';
import jackson from '../../Assets/Brands/Jackson_Logo.jpg';
import '../../Styles/Component_Styles/Home_page_brands.css';

function Home_page_brands() {
    const[showBrands, setShowBrands] = useState(false);

  return (
    <div className="brands">
        <hr />
        <hr />
        <br />
        <div className='brands_header_container'>
            <h1>BRANDS</h1>
            <i 
                class="fa-sharp fa-solid fa-arrow-down"
                id={showBrands ? 'arrow_up' : 'arrow-down'}
                onClick={() => setShowBrands(!showBrands)}
            ></i>
        </div>
        <br />
        <hr />
        <hr />
        <div className='brands_container' id={showBrands ? 'brands_down' : 'brands-up'}>
            <div className="brands_pic_container">
                <img src={gibson} alt="" />
            </div>
            <div className="brands_pic_container fender">
                <img src={fender} alt="" />
            </div>
            <div className="brands_pic_container">
                <img src={epiphone} alt="" />
            </div>
            <div className="brands_pic_container">
                <img src={jackson} alt="" />
            </div>
            <div className="brands_pic_container jck">
                <img src={esp} alt="" />
            </div>
            <div className="brands_pic_container hb">
                <img src={hb} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Home_page_brands