import React from 'react';
import Carousel from '../Carousel/Carousel';

import icon from '../../Assets/carousel/cost/2.gif'
import CountDown from './CountDown';
import Customer from './Customer';


const Home = () => {
    return (
        <div className=''>
            <div className='container mx-auto'>

                <Carousel></Carousel>
            </div>

            <div className=' container mx-auto'>

            <div className=' my-16 w-full'>
                <div className='my-16'>
                    <h1 className="text-4xl text-orange-600  font-semibold flex  text-center justify-center items-center"> Cost
                        <span className='w-8 h-8'>
                            <img src={icon} alt="" />
                        </span> Documentation </h1>
                </div>

                <div className="hero w-full">
                    <div className="hero-content flex-col lg:flex-row-reverse w-full">

                        <div className='mx-4'>
                            <h1 className='text-lg'>means a cost package for EPAs costs which consists of applicable: (1) payroll information, consisting of the SCORPIO$ report or an equivalent cost summary, and any time sheets that exist, if requested by AR; (2) indirect cost information, consisting of an overall and an employee-by-employee SCORPIO$ report or equivalent cost summary; (3) travel information, consisting of a SCORPIO$ report or an equivalent cost summary, travel authorizations, and travel vouchers or their equivalent that exist; (4) EPA.</h1>

                        </div>
                        <img src="https://i.ibb.co/r04phfG/pexels-cottonbro-studio-3943726.jpg" alt="dentist chair" className=" lg:w-1/2 rounded-lg shadow-2xl" />


                    </div>

                </div>
            </div>
            </div>

            <div className='mb-36'>
                <CountDown></CountDown>
            </div>

            <div className='my-36 container mx-auto'>
               <Customer></Customer>
            </div>





        </div>
    );
};

export default Home;