import React from "react";
import { Link } from "react-router-dom";
import image from "../../Assets/italy.jpg";
import image2 from "../../Assets/valencia.jpg";
import image3 from "../../Assets/varadero.jpg";

const Mediterranean = () => {
  return (
    <div className="my-4 md:my-20 container mx-auto">
      <div className="justify-center text-center ">
        <p className="text-2xl text-sky-500 font-mono ">The Unforgettable</p>
        <h1 className="text-5xl font-bold my-3">Mediterranean</h1>
        <p className="w-1/2 mx-auto">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quisquam
          nostrum qui accusamus consequatur modi vero excepturi quos sapiente
          saepe, alias exercitationem.
        </p>
      </div>

      <div className="md:flex gap-4 my-16">
        <div className="mt-2">
          <Link className=" rounded shadow-sm">
            <div className="relative overflow-hidden transition duration-500 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={image}
                alt=""
                className=" w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
              />

              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-500 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                <div className="hiddenText-3  hiddenText flex justify-between  mx-5 ">
                  <div>
                    <h1 className="text-sm lg:text-3xl font-semibold text-white">
                      Valencia
                    </h1>
                  </div>

                  <div>
                    <h1 className="text-sm lg:text-3xl text-white">$2780</h1>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div className="mt-2">
          <Link className=" rounded shadow-sm">
            <div className="relative overflow-hidden transition duration-500 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={image2}
                alt=""
                className=" w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
              />

              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-500 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                <div className="hiddenText-3  hiddenText flex justify-between  mx-5 ">
                  <div>
                    <h1 className="text-sm lg:text-3xl font-semibold text-white">
                      veradero
                    </h1>
                  </div>

                  <div>
                    <h1 className="text-sm lg:text-3xl text-white">$1780</h1>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>


        <div className="mt-2">
          <Link className=" rounded shadow-sm">
            <div className="relative overflow-hidden transition duration-500 transform rounded shadow-lg lg:hover:-translate-y-2 hover:shadow-2xl">
              <img
                src={image3}
                alt=""
                className=" w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 bg-gray-500 aspect-square"
              />

              <div className="absolute inset-0 flex flex-col justify-center px-5 py-4 text-center transition-opacity duration-500 bg-black bg-opacity-10 opacity-0 hover:opacity-100">
                <div className="hiddenText-3  hiddenText flex justify-between  mx-5 ">
                  <div>
                    <h1 className="text-sm lg:text-3xl font-semibold text-white">
                      Italy 
                    </h1>
                  </div>

                  <div>
                    <h1 className="text-sm lg:text-3xl text-white">$3780</h1>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </div>
       
      </div>
    </div>
  );
};

export default Mediterranean;
