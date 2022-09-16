import React from 'react';
import { store } from '../../../Helper/Store_buildings';
import '../../../Styles/Component_Styles/About/Store_buildings.css';

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation, Autoplay } from "swiper";

function Store() {
  return (
    <div className="store_buildings">
        <Swiper
            modules={[ Navigation, Autoplay ]}
            slidesPerView={1}
            spaceBetween={0}
            slidesPerGroup={1}
            loop={true}
            navigation={false}
            autoplay={{ 
            delay: 6000,
            disableOnInteraction: false
            }}
            className="mySwiper"
            breakpoints={{
            600: { 
                navigation: false,
            },
            }}
        >
            {store.map((el) => {
                return (
                    <SwiperSlide key={el.id}>
                        <div className='store_building_container'>
                            <div className='img_container'>
                                <img src={el.img} />
                            </div>   
                            <div className='text_container'>
                                <p className='header'>{el.location}</p>
                                <p>Lorem ipsum dolor sit amet consectetur, sunt voluptas quas eaque possimus! Minima eaque animi rem, voluptatum quibusdam iure facere corrupti quae eius molestiae quas quos optio. <label>quisquam ut! Eum, temporibus quibusdam. Recusandae accusantium hic expedita eaque perferendis iure officiis voluptatum autem magni, harum tenetur natus repellendus, atque explicabo enim sit quod iste aut cumque ex sequi. Ipsum labore et architecto dolor sit, fugit asperiores veniam, reprehenderit omnis itaque.</label></p>
                            </div>
                        </div>
                    </SwiperSlide>
                )
            })}
        </Swiper>
    </div>
  )
}

export default Store