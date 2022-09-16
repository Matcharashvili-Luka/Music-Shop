import React from 'react';
import { Shop_inside } from '../../../Helper/Shop_inside';
import '../../../Styles/Component_Styles/About/Store_interior.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";

function Inside() {
  return (
    <div className='shop_interior'>
        <Swiper
            modules={[ Navigation, Autoplay ]}
            slidesPerView={1}
            spaceBetween={0}
            slidesPerGroup={1}
            loop={true}
            navigation={false}
            autoplay={{ 
            delay: 3000,
            disableOnInteraction: false
            }}
            className="mySwiper"
            breakpoints={{
            600: { 
                navigation: false,
            },
            }}
        >
            {Shop_inside.map((el) => {
                return (
                    <SwiperSlide key={el.id}>
                        <div className='store_interior_container'>
                            <div className='img_container'>
                                <img src={el.img} />
                            </div>
                            <div className='text_container'>
                                <p className='header'>{el.header}</p>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Id recusandae error delectus fugit soluta iste suscipit pariatur amet ducimus qui animi, <label> totam voluptas veritatis eos blanditiis quasi provident ipsam assumenda?!</label></p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Inside