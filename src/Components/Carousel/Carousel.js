import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Style.css";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


import SideNav from '../Home/SideNav';
import { useTypewriter } from 'react-simple-typewriter'


const Carousel = () => {
    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],

        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })

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







                <SwiperSlide className=''>


                    <img src="https://i.ibb.co/Dw2rxmg/pexels-asad-photo-maldives-1591370.jpg" alt="" />

                    

                </SwiperSlide>

                <SwiperSlide className=''>

                    <img src="https://i.ibb.co/dpNDbdM/pexels-arist-creathrive-2307635.jpg" alt="" />



                </SwiperSlide>

                <SwiperSlide className=''>

                    <img src="https://i.ibb.co/2Nxydyf/pexels-marek-piwnicki-10050574.jpg" alt="" />



                </SwiperSlide>


                <SwiperSlide className=''>

                    <img src="https://i.ibb.co/PzZrhgH/pexels-pixabay-41004.jpg" alt="" />




                </SwiperSlide>


                <SwiperSlide className=''>

                    <img src="https://i.ibb.co/JdGmZjd/pexels-ibadah-mimpi-3283186.jpg" alt="" />




                </SwiperSlide>


                <SwiperSlide className=''>

                    <img src="https://i.ibb.co/FmYFxbY/pexels-julius-silver-753626.jpg" alt="" />




                </SwiperSlide>


                <SwiperSlide className=''>

                    <img src="https://i.ibb.co/PCGBxy0/pexels-tom-fisk-2213443.jpg" alt="" />





                </SwiperSlide>








            </Swiper>



            <div className='absolute z-50 hidden lg:block '>
                
                <SideNav></SideNav>
            </div>

          
        </div>
    );
};

export default Carousel;