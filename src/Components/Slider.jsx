import React, { useRef, useState } from "react";
import '../Styles/Component_Styles/Slider.css'
import { Slider_data } from '../Helper/Slider_Data';
import SlideElement from "./SlideElement";
import '../Styles/Component_Styles/SlideElement.css'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";

export default function App() {
  return (
    <div className="slider_container">
        <Swiper
            modules={[ Navigation, Autoplay]}
            slidesPerView={1}
            spaceBetween={0}
            slidesPerGroup={1}
            loop={true}
            navigation={true}
            autoplay={{ 
            delay: 5000,
            disableOnInteraction: false
            }}
            className="mySwiper"
        >
        {Slider_data.map((el) => {
            return (
                <SwiperSlide key={el.id}>
                    <SlideElement 
                        name = {el.title}
                        info = {el.info}
                        img = {el.img}
                    />
                </SwiperSlide>
            )
        })}
      </Swiper>
    </div>
  );
}
