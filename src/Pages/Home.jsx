import React from 'react';
import About from '../Components/Home_page_elements/About/About';
import Home_page_brands from '../Components/Home_page_elements/Home_page_brands';
import Slider from '../Components/Home_page_elements/Slider';

function Home() {
  return (
    <div>
        <Slider />
        <Home_page_brands />
        <About />
    </div>
  )
}

export default Home