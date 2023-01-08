import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Autoplay, Pagination, Navigation, FreeMode } from "swiper";

import SideNav from "../Home/SideNav";
import { useTypewriter } from "react-simple-typewriter";

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
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination, Navigation, FreeMode]}
        className="mySwiper h-[70vh]"
      >
        <SwiperSlide className="">
          <img
            src="https://i.ibb.co/Dw2rxmg/pexels-asad-photo-maldives-1591370.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <img
            src="https://i.ibb.co/dpNDbdM/pexels-arist-creathrive-2307635.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <img
            src="https://i.ibb.co/2Nxydyf/pexels-marek-piwnicki-10050574.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <img src="https://i.ibb.co/PzZrhgH/pexels-pixabay-41004.jpg" alt="" />
        </SwiperSlide>

        <SwiperSlide className="">
          <img
            src="https://i.ibb.co/JdGmZjd/pexels-ibadah-mimpi-3283186.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <img
            src="https://i.ibb.co/FmYFxbY/pexels-julius-silver-753626.jpg"
            alt=""
          />
        </SwiperSlide>

        <SwiperSlide className="">
          <img
            src="https://i.ibb.co/PCGBxy0/pexels-tom-fisk-2213443.jpg"
            alt=""
          />
        </SwiperSlide>
      </Swiper>

      <div className="absolute z-50 hidden lg:block ">
        <SideNav></SideNav>
      </div>
    </div>
  );
};

export default Carousel;
