import React from 'react'


import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import Productitem from './Productitem';

function ProductSlider(props) {
  return (
    <>
    <div className='productsSlider py-5'>
          <Swiper
            slidesPerView={props.items}
            spaceBetween={5}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper !overflow-visible"
 
  
          >
            <SwiperSlide>
                <Productitem/>
           
            </SwiperSlide>  
   
          </Swiper>

    </div>
      
    </>
  )
}

export default ProductSlider

