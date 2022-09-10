import React, { useState } from 'react';
import '../Styles/Component_Styles/NavBar.css';
import Announcement from './Announcement';
import { Link } from 'react-router-dom';

function NavBar() {
  const[navBarClass, setNavBarClass] = useState(false);

  return (
    <div className='nav_bar_container'>
      <div className='not_responsive'>
        <Announcement />
        <div className='nav_bar_wrapper'>
          <div className='left_nav_bar'>
            <div className='nav_bar_search_container'>
              <input className='nav_bar_search_box'/>
              <i className="fa-solid fa-magnifying-glass"></i>
            </div>
          </div>
          <div className='center_nav_bar'>
            <Link to='/' style={{ textDecoration: 'none', color: 'black' }}>
              <h1>M-Shop</h1>
            </Link>
          </div>
          <div className='right_nav_bar'>
            <p>SIGN IN</p>
            <p>REGISTER</p>
            <i className="fa-solid fa-cart-shopping"></i>
          </div>
        </div>
      </div>

      <div className='responsive'>
        <Announcement />
        <div className='responsive_nav_bar_wrapper'>
          <div className='responsive_top_bar'>
            <div className='empty_div'>‎</div>
            <div className='center_nav_bar'>
              <h1>M-Shop</h1>
            </div>
            <div className='top_bar_icons'>
              <i className="fa-solid fa-cart-shopping"></i>
              <i 
                className="fa-solid fa-bars" 
                onClick={() => setNavBarClass(!navBarClass)}
              ></i>
            </div>   
          </div>
          <div className={!navBarClass ? 'responsive_bottom_bar' : 'active_responsive_bottom_bar'}>
            <Link 
              to='/products' 
              style={{ textDecoration: 'none', color: 'black' }} 
              onClick={() => setNavBarClass(false)}
            >
              <p>PRODUCT</p>
            </Link>
            <p>SIGN IN / REGISTER</p>
            <p>CONTACT US</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NavBar;