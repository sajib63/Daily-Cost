import React from 'react';

import CountUp from 'react-countup';
import './CountDown.modeul.css'


const CountDown = () => {
    return (
        <div className="container mx-auto ">
           <div className='p-10'>
           <div className=" mb-10 md:mx-auto sm:text-center  md:mb-12">
                <div>
                    <p className="inline-block px-3 py-px mb-4 text-3xl font-semibold tracking-wider text-orange-600 uppercase rounded-full bg-teal-accent-400">
                        Save Your Money
                    </p>
                </div>


            </div>
            <div className="grid gap-8 row-gap-8 lg:grid-cols-3 p-8">

                <div className="countDown text-center bg-indigo-50 rounded-full">
                    <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold mx-auto">
                    <CountUp delay={1} end={80} />%
                    </div>
                    
                    <h6 className="mb-2 font-semibold leading-5">Catch Your Cost</h6>

                </div>

                <div className="countDown text-center bg-indigo-50 rounded-full">
                    <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold  text-deep-purple-accent-400  mx-auto">
                    <CountUp delay={1} end={90} />%
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Do your best</h6>

                </div>

                <div className="countDown text-center bg-indigo-50 rounded-full">
                    <div className="flex items-center justify-center w-24 h-24 mb-4 text-5xl font-extrabold  text-deep-purple-accent-400  mx-auto">
                    <CountUp delay={1} end={100} />%
                    </div>
                    <h6 className="mb-2 font-semibold leading-5">Be yourself</h6>

                </div>
            </div>
           </div>
        </div>
    );
};

export default CountDown;