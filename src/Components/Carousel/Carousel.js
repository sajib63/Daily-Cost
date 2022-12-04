import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";

import image1 from '../../Assets/carousel/1.gif'
import image2 from '../../Assets/carousel/2.gif'
import image3 from '../../Assets/carousel/3.gif'
import image4 from '../../Assets/carousel/4.gif'
import image5 from '../../Assets/carousel/5.gif'
import image6 from '../../Assets/carousel/6.gif'

import { Link } from 'react-router-dom';


const Carousel = () => {
    return (
        <div>
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}

                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-1/2 hidden md:block'>
                        <div className='w-12 h-12'>

                            <img src={image1} alt="" />
                        </div>
                        <h1 className="text-4xl font-semibold text-orange-600 w-3/4">You Can Save Your Money By Tracking Your Cost</h1>
                        <Link className='btn bg-orange-600 text-white border-0 mt-5'>Save Your Cost</Link>
                    </div>
                    <div>
                        <img src={image1} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-1/2 hidden md:block'>
                        <div className='w-12 h-12'>

                            <img src={image2} alt="" />
                        </div>
                        <h1 className="text-4xl font-semibold text-orange-600 w-3/4">You Can Save Your Money By Tracking Your Cost</h1>
                        <Link className='btn bg-orange-600 text-white border-0 mt-5'>Save Your Cost</Link>
                    </div>
                    <div>
                        <img src={image2} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-1/2 hidden md:block'>
                        <div className='w-12 h-12'>

                            <img src={image3} alt="" />
                        </div>
                        <h1 className="text-4xl font-semibold text-orange-600 w-3/4">You Can Save Your Money By Tracking Your Cost</h1>
                        <Link className='btn bg-orange-600 text-white border-0 mt-5'>Save Your Cost</Link>
                    </div>
                    <div>
                        <img src={image3} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-1/2 hidden md:block'>
                        <div className='w-12 h-12'>

                            <img src={image4} alt="" />
                        </div>
                        <h1 className="text-4xl font-semibold text-orange-600 w-3/4">You Can Save Your Money By Tracking Your Cost</h1>
                        <Link className='btn bg-orange-600 text-white border-0 mt-5'>Save Your Cost</Link>
                    </div>
                    <div>
                        <img src={image4} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-1/2 hidden md:block'>
                        <div className='w-12 h-12'>

                            <img src={image5} alt="" />
                        </div>
                        <h1 className="text-4xl font-semibold text-orange-600 w-3/4">You Can Save Your Money By Tracking Your Cost</h1>
                        <Link className='btn bg-orange-600 text-white border-0 mt-5'>Save Your Cost</Link>
                    </div>
                    <div>
                        <img src={image5} alt="" />

                    </div>
                </SwiperSlide>
                <SwiperSlide className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
                    <div className='w-1/2 hidden md:block'>
                        <div className='w-12 h-12'>

                            <img src={image6} alt="" />
                        </div>
                        <h1 className="text-4xl font-semibold text-orange-600 w-3/4">You Can Save Your Money By Tracking Your Cost</h1>
                        <Link className='btn bg-orange-600 text-white border-0 mt-5'>Save Your Cost</Link>
                    </div>
                    <div>
                        <img src={image6} alt="" />

                    </div>
                </SwiperSlide>



            </Swiper>
        </div>
    );
};

export default Carousel;