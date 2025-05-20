import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";
import BannerBox from './BannerBox';

function AdsBannerSlider(props) {
  return (
    <>
    <div className='py-5 w-full'>
        <Swiper
                    spaceBetween={15}
                    slidesPerView={props.items}
                    navigation={true}
                    loop={true}
                    autoplay={{ delay: 3000, disableOnInteraction: false }}
                    modules={[Navigation, Autoplay]}
                    className="card_btn  "
                  >
                    <SwiperSlide>
                       <BannerBox img={"https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"}
                       Link={"/home"}/>
                  
                    </SwiperSlide>
                    <SwiperSlide>
                       <BannerBox img={"https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg"}
                       Link={"/home"}/>
                  
                    </SwiperSlide>
                    <SwiperSlide>
                       <BannerBox img={"https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"}
                       Link={"/home"}/>
                  
                    </SwiperSlide>
                    <SwiperSlide>
                       <BannerBox img={"https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg"}
                       Link={"/home"}/>
                  
                    </SwiperSlide>
                    <SwiperSlide>
                       <BannerBox img={"https://api.spicezgold.com/download/file_1734525634299_NewProject(2).jpg"}
                       Link={"/home"}/>
                  
                    </SwiperSlide>
                    <SwiperSlide>
                       <BannerBox img={"https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg"}
                       Link={"/home"}/>
                  
                    </SwiperSlide>
                    <SwiperSlide>
                       <BannerBox img={"https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg"}
                       Link={"/home"}/>
                  
                    </SwiperSlide>
                    <SwiperSlide>
                       <BannerBox img={"https://api.spicezgold.com/download/file_1734525653108_NewProject(20).jpg"}
                       Link={"/home"}/>
                  
                    </SwiperSlide>
                  </Swiper>

    </div>
      
    </>
  )
}

export default AdsBannerSlider
