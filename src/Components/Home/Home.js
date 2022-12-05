import { Button } from '@mui/material';
import React from 'react';
import './Home.css'

import icon from '../../Assets/carousel/cost/2.gif'
import Carousel from '../Carousel/Carousel';
import { FaCarSide } from 'react-icons/fa';
import { Link } from 'react-router-dom';






const Home = () => {
    const date = new Date();
    return (
        <div className=''>




            <div className=' block'>

                <Carousel></Carousel>
                {/* <div className='container mx-auto searchBar flex bg-white shadow-2xl p-7 justify-center -mt-7 z-50 absolute ml-0 md:ml-0 lg:ml-0 xl:ml-20 '>
                    <form >
                        <input className='border-0' type="text" name="" placeholder='Type Where Your Place.....' id="" />
                        <input type="submit" value="Search" className='btn bg-orange-500 border-0 mx-2' />
                    </form>


                </div> */}

                <div className='container mx-auto bg-white shadow-2xl flex justify-center mt-5 p-5 z-50 overflow-auto'>
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


            <div className='container mx-auto mt-16 mb-16'>
                <div>
                    <section className="py-6  text-gray-50">
                        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
                            <Link className='col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1'>
                                <img src="https://source.unsplash.com/random/301x301/" alt="" className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square" />
                            </Link>

                          

                            <Link className='aspect-square'>

                                <img alt="" className="w-full  rounded-full h-full  shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?0" />
                            </Link>

                            <Link>
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?1" />
                            </Link>


                            <Link>
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?2" />
                            </Link>

                            <Link>
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?3" />
                            </Link>

                            <Link>
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?4" />
                            </Link>

                            <Link>
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?5" />
                            </Link>

                            <Link>
                                <img alt="" className="w-full h-full rounded shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?6" />
                            </Link>


                            <Link>
                                <img alt="" className="w-full h-full rounded-full shadow-sm min-h-48 bg-gray-500 aspect-square" src="https://source.unsplash.com/random/200x200/?7" />
                            </Link>


                            <Link className='col-span-2 row-span-2 md:col-start-1 md:row-start-3'>
                                <img src="https://source.unsplash.com/random/302x302/" alt="" className="w-full h-full  rounded shadow-sm min-h-96  bg-gray-500 aspect-square" />
                            </Link>

                        </div>
                    </section>
                </div>

            </div>

            <div className='my-36 '>
                <p>hello</p>
            </div>

        </div>
    );
};

export default Home;