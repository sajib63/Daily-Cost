import { Button } from '@mui/material';
import React, { useState } from 'react';
import './Home.css'

import icon from '../../Assets/carousel/cost/2.gif'
import Carousel from '../Carousel/Carousel';
import { FaCarSide, FaPlay, FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from 'react-simple-typewriter'
import image from '../../Assets/greeting from paris.png'
import VideoModal from './VideoModal';
import FourIconCards from './FourIconCards';
import PerFactHoliday from './PerFactHoliday';






const Home = () => {
    const date = new Date();

    const [text] = useTypewriter({
        words: ['Hello', 'From', 'Typewriter', 'Hook!'],

        loop: Infinity,
        onLoopDone: () => console.log(`loop completed after 3 runs.`)
    })
    return (
        <div className=''>




            <div className=' block'>

                <Carousel></Carousel>


                <div className='container mx-auto bg-white shadow-2xl flex justify-center mt-5 p-5 z-50 overflow-auto '>
                    <form className='grid grid-cols-1 md:grid-cols-4 gap-4 ' >
                        <input type="text" className='border-0' disabled name="" value={date} id="" />
                        <div className='mx-2'>
                            <select className="select w-full border-black">

                                <option disabled selected>Month</option>
                                <option>January</option>
                                <option>February</option>
                                <option>March</option>
                                <option>April</option>
                                <option>May</option>
                                <option>June</option>
                                <option>July</option>
                                <option>August</option>
                                <option>September</option>
                                <option>October</option>
                                <option>November</option>
                                <option>December</option>

                            </select>
                        </div>
                        <div>
                            <select className="select w-full border-black">
                                <option disabled selected>Travel Type</option>
                                <option>Sea</option>
                                <option>Wild</option>
                                <option>River</option>
                                <option>Guard</option>
                                <option>City</option>
                            </select>
                        </div>
                        <input type="submit" value="Search" className='btn bg-sky-500 border-0 mx-2' />
                    </form>


                </div>
            </div>

            {/* for show searching data  */}
            <div>

            </div>

            {/* all data start  */}

            <div className='container mx-auto justify-center items-center text-center mt-10'>
                <h1 className='font-mono font-bold text-3xl text-sky-500 '>Choose Your</h1>
                <h1 className='font-mono font-bold text-5xl my-3 text-sky-500 '>Perfect Holiday</h1>
            </div>


            <div className='container mx-auto gallery mt-16 mb-16'>
                <div>
                    <section className="py-6  text-gray-50">
                        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">

                            <Link className='col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1'>


                                <div className="relative overflow-hidden transition duration-300 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">

                                    <img src="https://i.ibb.co/Dw2rxmg/pexels-asad-photo-maldives-1591370.jpg" alt="" className=" w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />

                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">


                                        <div className='  hiddenText flex justify-between  mx-5 '>
                                            <div>
                                                <h1 className="text-sm lg:text-3xl font-semibold text-white">Spain</h1>

                                            </div>

                                            <div>
                                                <h1 className="text-sm lg:text-3xl text-white">$2780</h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </Link>



                            <Link className='aspect-square'>



                                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl rounded-full">

                                    <img alt="" className="w-full  rounded-full h-full  shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/McyWGNc/tarragona.jpg" />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">


                                        <div className=' hiddenText-2 flex justify-between mx-5 gap-3'>
                                            <div className='mx-2'>
                                                <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">Tarragona</h1>

                                            </div>

                                            <div>
                                                <h1 className="text-sm md:text-sm lg:text-2xl text-white">$1980</h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </Link>

                            <Link>


                                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">

                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/2Nxydyf/pexels-marek-piwnicki-10050574.jpg" />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">


                                        <div className=' hiddenText-3 flex justify-between mx-5 gap-3'>
                                            <div >
                                                <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">Madrid</h1>

                                            </div>

                                            <div>
                                                <h1 className="text-sm md:text-sm lg:text-2xl text-white">$1680</h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </Link>


                            <Link>

                                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">

                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/PzZrhgH/pexels-pixabay-41004.jpg" />
                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">


                                        <div className=' hiddenText-3 flex justify-between mx-5 gap-3'>
                                            <div >
                                                <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">Barcelona</h1>

                                            </div>

                                            <div>
                                                <h1 className="text-sm md:text-sm lg:text-2xl text-white">$3780</h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </Link>

                            <Link>
                                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/JdGmZjd/pexels-ibadah-mimpi-3283186.jpg" />


                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">


                                        <div className=' hiddenText-3 flex justify-between mx-5 gap-3'>
                                            <div >
                                                <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">Tainan</h1>

                                            </div>

                                            <div>
                                                <h1 className="text-sm md:text-sm lg:text-2xl text-white">$1880</h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>

                            </Link>

                            <Link>
                                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/FmYFxbY/pexels-julius-silver-753626.jpg" />


                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">


                                        <div className=' hiddenText-3 flex justify-between mx-5 gap-3'>
                                            <div >
                                                <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">Taiwan</h1>

                                            </div>

                                            <div>
                                                <h1 className="text-sm md:text-sm lg:text-2xl text-white">$1280</h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </Link>

                            <Link>
                                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/PCGBxy0/pexels-tom-fisk-2213443.jpg" />


                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">


                                        <div className=' hiddenText-3 flex justify-between mx-5 gap-3'>
                                            <div >
                                                <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">Kaohsiung</h1>

                                            </div>

                                            <div>
                                                <h1 className="text-sm md:text-sm lg:text-2xl text-white">$1380</h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </Link>

                            <Link>
                                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                                    <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/6017chs/pexels-francesco-ungaro-409127.jpg" />


                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">


                                        <div className=' hiddenText-3 flex justify-between mx-5 gap-3'>
                                            <div >
                                                <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">Taipei</h1>

                                            </div>

                                            <div>
                                                <h1 className="text-sm md:text-sm lg:text-2xl text-white">$1200</h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </Link>


                            <Link>
                                <div className="relative overflow-hidden rounded-full transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                                    <img alt="" className="w-full h-full  shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://i.ibb.co/4WRxdPM/pexels-pixabay-315191.jpg" />


                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">


                                        <div className=' hiddenText-2 flex justify-between mx-5 gap-3'>
                                            <div className='mx-2'>
                                                <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">Bali</h1>

                                            </div>

                                            <div>
                                                <h1 className="text-sm md:text-sm lg:text-2xl text-white">$4780</h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </Link>


                            <Link className='col-span-2 row-span-2 md:col-start-1 md:row-start-3'>
                                <div className="relative overflow-hidden transition duration-300 transform  shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl ">
                                    <img src="https://i.ibb.co/DtP7xmm/pexels-pixabay-219692.jpg" alt="" className="w-full h-full  rounded shadow-sm min-h-96  bg-gray-500 aspect-square" />


                                    <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-300 bg-black bg-opacity-10 opacity-0 hover:opacity-100">


                                        <div className=' hiddenText flex justify-between mx-5 gap-3'>
                                            <div >
                                                <h1 className="text-sm md:text-sm lg:text-2xl font-semibold text-white">Ubud</h1>

                                            </div>

                                            <div>
                                                <h1 className="text-sm md:text-sm lg:text-2xl text-white">$6780</h1>
                                            </div>
                                        </div>


                                    </div>
                                </div>
                            </Link>

                        </div>
                    </section>
                </div>

            </div>

            {/* paris img  */}
            <div className='my-6 justify-center items-center text-center flex '>

                <img src={image} alt="" />

            </div>

            {/* video section start  */}


            <div className="hero md:h-[400px] lg:h-[700px]" style={{ backgroundImage: `url("https://i.ibb.co/PzZrhgH/pexels-pixabay-41004.jpg")` }}>
                <div>

                    <div className="hero-content text-center text-neutral-content ">
                        <div className="max-w-md">
                            <h1 className="mb-5 text-sm md:text-4xl font-bold font-mono">Go & Discover</h1>

                            <p className="mb-5 text-sm md:text-5xl">Breathtaking Cities</p>

                            <label htmlFor="VideoModal" className='btn bg-sky-500 border-0 hover:bg-sky-400 text-3xl'><FaPlay></FaPlay></label>

                        </div>
                    </div>
                </div>

            </div>


            <div className='w-[1200px]'>
                <VideoModal></VideoModal>
            </div>




            <div className='container mx-auto  my-16'>
                <FourIconCards></FourIconCards>
            </div>


            <div>
                <PerFactHoliday></PerFactHoliday>
            </div>
        </div>
    );
};

export default Home;