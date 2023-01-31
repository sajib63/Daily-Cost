import { Star } from '@mui/icons-material';
import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AreaCarousel from '../CountryArea/AreaCarousel';

const PerfectHolidayDetails = () => {
    const perfectHolidays=useLoaderData();
    const {address,balance, details, man, name, picture,rating}=perfectHolidays;
    console.log(perfectHolidays);
    return (
        <div className="relative ">
      <img
        src={picture}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 ">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-evenly xl:flex-row py-10">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-6xl font-bold tracking-tight text-white uppercase">
                {name}
              </h2>
              <p className=" mb-4 text-base text-white md:text-lg">
                <span className="font-semibold">Details:</span> {details}
              </p>
              

              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                <span className="font-semibold">Location:</span>  {address} 
              </p>

              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                <span className="font-semibold">Total-people:</span>  {man} people
              </p>

              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                <span className="font-semibold">Price:</span> {balance}
              </p>

              <p className="max-w-xl mb-4 text-base text-white md:text-lg flex gap-2 items-center">
                <span className="font-semibold">Rating:</span>{" "}
                 <Star rating={rating}></Star> 
              </p>

              <div>
               
                 
                    <button className="btn bg-sky-300 w-full text-black hover:bg-sky-300">
                      Book Now
                    </button>
               
            
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
    );
};

export default PerfectHolidayDetails;