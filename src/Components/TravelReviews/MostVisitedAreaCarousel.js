import React from "react";
import HolidayStar from "../Home/HolidayStar";


const MostVisitedAreaCarousel = ({visited}) => {
    const {day, details, name, night, picture, price, rating}=visited
    console.log(visited);
    return (
        <div className="px-4  mx-auto ">
        <div className="">
          <div className="relative p-px overflow-hidden transition duration-300 transform border rounded shadow-sm hover:scale-105 group hover:shadow-xl">
           
            <div className="md:flex lg:items-center">
              <div className=" mr-6 lg:mb-0 w-full">
                <div className=" w-full ">
                  <img src={picture} className="w-full" alt="" />
                </div>
              </div>
              <div className="flex flex-col justify-between flex-grow">
              <div className="p-4">
          <div className=" mb-2 items-center">
            <div className="font-bold text-sm md:text-lg uppercase">{name}</div>

           
          </div>
          <div className="flex items-center gap-2 mb-1">
              <span className="font-semibold ">Rating:</span>
              <HolidayStar rating={rating}></HolidayStar>
            </div>

          <div className="mb-1">
            <p className="">
              <span className="font-bold">Detail:</span> {details.slice(0,80)}.
            </p>
          </div>
          <div>
            <p className="font-semibold">
              <span className="font-bold">Time:</span> {day} Days. And {night}{" "}
              Nights
            </p>
          </div>

          <div className=" flex justify-between w-full items-center bottom-3  my-2"  >
            <p className="mt-1 font-bold text-xl">
              
              <span>Price:</span> ${price}
            </p>

            <button className="px-3 py-2 rounded font-semibold bg-sky-300 border-0 hover:bg-sky-300 text-black" title="Login First">
              Book Now
            </button>
          </div>
        </div>
              </div>
            </div>
          </div>

          
        </div>
      </div>
    );
};

export default MostVisitedAreaCarousel;