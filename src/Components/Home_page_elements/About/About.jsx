import React, { useState } from 'react';
import Inside from './Inside';
import Store from './Store';
import '../../../Styles/Component_Styles/About/About.css';

function About() {
  const[showAbout, setShowAbout] = useState(false);

  return (
    <div className='about_container'>
      <hr />
      <hr />
      <br />
      <div className='about_header_container'>
          <h1>About Us</h1>
          <i 
            class="fa-sharp fa-solid fa-arrow-down"
            id={showAbout ? 'arrow_up' : 'arrow-down'}
            onClick={() => setShowAbout(!showAbout)}
          ></i>
      </div>
      <br />
      <hr />
      <hr />
      <div className='about_body' id={showAbout ? 'show_about' : 'hide_about'}>
        <p className='about_header'>Locations</p>
        <Store />
        <p className='about_header'>Store Interior</p>
        <Inside />
      </div>
    </div>
  )
}

export default About