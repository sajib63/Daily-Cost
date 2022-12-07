import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import "./SliderCarousel.css";

// import required modules
import { Pagination } from "swiper";
import { Link } from 'react-router-dom';


const SliderCarousel = ({ carousels }) => {
    const { address, balance, details, man, name, picture, rating } = carousels;
    return (
        <div>
            <Swiper
                slidesPerView={3}
                centeredSlides={true}
                spaceBetween={30}
                grabCursor={true}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    carousels.map(slide => <SwiperSlide>
                      <div>
                        <Link>
                        <img src={slide.picture} alt="" />
                        </Link>
                        <div>
                        <p>
                            {slide.address}
                        </p>
                        <p></p>
                        </div>

                      </div>
                    </SwiperSlide>)
                }


            </Swiper>
        </div>
    );
};

export default SliderCarousel;