
import React, { useEffect, useState } from 'react';
import SliderCarousel from './SliderCarousel/SliderCarousel';

const PerFactHoliday = () => {
    const [carousels, setCarousel]=useState([])
    useEffect(()=>{
        fetch('PerfactHoliday.json')
        .then(res=>res.json())
        .then(data=>setCarousel(data))
    },[])

  

   
    return (
        <div className='hidden md:block'>
            <h1 className="text-sm lg:text-2xl text-center font-mono font-bold text-sky-500">Plan The</h1>
            <h1 className="text-sm lg:text-3xl text-center font-bold">Perfect Holiday</h1>
            <p className="text-sm text-center">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. <br /> Aene an commodo ligula eget dolor. Aenean massa. Cum sociis the</p>

           <div className='my-16 container mx-auto'>
            <SliderCarousel carousels={carousels}></SliderCarousel>
           </div>

        </div>
    );
};

export default PerFactHoliday;