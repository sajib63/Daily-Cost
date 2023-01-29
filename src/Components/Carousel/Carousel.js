import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";

import SideNav from "../Home/SideNav";
import { FaPlay } from "react-icons/fa";


const Carousel = () => {
  return (
    <div>
      <Swiper
        freeMode={true}
        loop={true}
        loopFillGroupWithBlank={true}
        centeredSlides={true}
        spaceBetween={30}
        grabCursor={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper lg:h-[70vh]"
      >
        <SwiperSlide className="">
        <div className="relative md:h-[400px] lg:h-[700px]">
        <img
          src="https://i.ibb.co/bmdH93t/pexels-gabriel-galvao-9494150.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className=" h-full bg-gray-700 bg-opacity-75 justify-center relative flex items-center">
          <div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-sm md:text-4xl font-bold font-mono">
                Cox's Bazar
                <br />
                Bangladesh
                </h1>

                

              </div>
            </div>
          </div>
        </div>
      </div>
        </SwiperSlide>


        <SwiperSlide className="">
        <div className="relative md:h-[400px] lg:h-[700px]">
        <img
          src="https://i.ibb.co/VCJp7sg/pexels-kimberly-mcneilus-2480626.jpg"
          className="absolute inset-0 object-cover w-full h-full"
          alt=""
        />
        <div className=" h-full bg-gray-700 bg-opacity-75 justify-center relative flex items-center">
          <div>
            <div className="hero-content text-center text-neutral-content ">
              <div className="max-w-md">
                <h1 className="mb-5 text-sm md:text-4xl font-bold font-mono">
                Bali
                <br />
                Indonesia
                </h1>

                

              </div>
            </div>
          </div>
        </div>
      </div>
        </SwiperSlide>

     
      </Swiper>

      <div className="absolute z-50 hidden lg:block ">
        <SideNav></SideNav>
      </div>
    </div>
  );
};

export default Carousel;
