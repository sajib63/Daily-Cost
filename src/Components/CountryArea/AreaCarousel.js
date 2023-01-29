import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";

import { Autoplay,FreeMode, Navigation, Thumbs } from "swiper";
const AreaCarousel = ({pictures}) => {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  
    return (
        <div>
       <Swiper
        style={{
          "--swiper-navigation-color": "#fff",
          "--swiper-pagination-color": "#fff",
        }}
        loop={true}
        spaceBetween={10}
        navigation={true}
          autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[Autoplay,FreeMode, Navigation, Thumbs]}
        className="mySwiper2"
      >
        {
          pictures.map(picture=><SwiperSlide>
            <img src={picture} />
          </SwiperSlide>)
        }
       
        
      </Swiper>
      

      
    </div>
    );
};

export default AreaCarousel;