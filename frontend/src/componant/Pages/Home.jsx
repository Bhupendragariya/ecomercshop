import React from "react";
import { Link } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper/modules";

function Home() {
  return (
    <>
      <div className="py-4 overflow-x-hidden ">
        <div className="container  ">
          <Swiper
            spaceBetween={15}
            navigation={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            modules={[Navigation, Autoplay]}
            className="mySwiper  !overflow-visible "
          >
            <SwiperSlide>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1745503990603_NewProject(13).jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1745504016576_NewProject.jpg"
                  alt="img"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1745503990603_NewProject(13).jpg"
                  alt="image"
                  className="w-full"
                />
              </div>
            </SwiperSlide>

            <SwiperSlide>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1745504016576_NewProject.jpg"
                  alt="img"
                  className="w-full"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className="rounded-2xl overflow-hidden">
                <img
                  src="https://serviceapi.spicezgold.com/download/1741660881858_NewProject(11).jpg"
                  alt=""
                  className="w-full"
                />
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>

      <div className="py-4  card_min overflow-x-hidden  ">
        <div className="container  ">
          <Swiper
            // slidesPerView={7}
            spaceBetween={15}
            navigation={true}
            modules={[Navigation]}
            className="mySwiper !overflow-visible"
             breakpoints={{
      
      320: {
        slidesPerView: 2,
      },
     
      480: {
        slidesPerView: 3,
      },
      
      768: {
        slidesPerView: 4,
      },
    
      1024: {
        slidesPerView: 5,
      },
    
      1280: {
        slidesPerView: 6,
      },
    
      1536: {
        slidesPerView: 7,
      },
    }}
  
          >
            <SwiperSlide>
              <Link to={"/"}>
             <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" alt="" className="w-[60px] transition-all " />
              <h3 className="text-center text-lg">Fashion</h3>

             </div>
             </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
             <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" alt="" className="w-[60px] transition-all " />
              <h3 className="text-center text-lg">Fashion</h3>

             </div>
             </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
             <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" alt="" className="w-[60px] transition-all " />
              <h3 className="text-center text-lg">Fashion</h3>

             </div>
             </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
             <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" alt="" className="w-[60px] transition-all " />
              <h3 className="text-center text-lg">Fashion</h3>

             </div>
             </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
             <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" alt="" className="w-[60px] transition-all " />
              <h3 className="text-center text-lg">Fashion</h3>

             </div>
             </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
             <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" alt="" className="w-[60px] transition-all " />
              <h3 className="text-center text-lg">Fashion</h3>

             </div>
             </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
             <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" alt="" className="w-[60px] transition-all " />
              <h3 className="text-center text-lg">Fashion</h3>

             </div>
             </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
             <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" alt="" className="w-[60px] transition-all " />
              <h3 className="text-center text-lg">Fashion</h3>

             </div>
             </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
             <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" alt="" className="w-[60px] transition-all " />
              <h3 className="text-center text-lg">Fashion</h3>

             </div>
             </Link>
            </SwiperSlide>
            <SwiperSlide>
              <Link to={"/"}>
             <div className=" item py-6 px-3 bg-white text-center  items-center flex flex-col ">
              <img src="https://serviceapi.spicezgold.com/download/1744509970781_fash.png" alt="" className="w-[60px] transition-transform duration-300 hover:scale-100 " />
              <h3 className="text-center text-lg">Fashion</h3>

             </div>
             </Link>
            </SwiperSlide>
      
           
           
   
          </Swiper>
        </div>
      </div>
    </>
  );
}

export default Home;
