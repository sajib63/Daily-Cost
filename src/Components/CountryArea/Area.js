import React from "react";
import { Link, useLoaderData } from "react-router-dom";

import Star from "../Area/Star";
import AreaCarousel from "./AreaCarousel";

const Area = () => {
  const countryDetails = useLoaderData();

  const {
    locations,
    name,
    day,
    details,
    pictures,
    price,
    rating,
    id,
    picture,
  } = countryDetails;

  return (
    <div className="relative ">
      <img
        src={picture}
        className="absolute inset-0 object-cover w-full h-full"
        alt=""
      />
      <div className="relative bg-gray-900 bg-opacity-75 ">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-evenly xl:flex-row h-screen">
            <div className="w-full max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12">
              <h2 className="max-w-lg mb-6 font-sans text-6xl font-bold tracking-tight text-white uppercase">
                {name}
              </h2>
              <p className=" mb-4 text-base text-white md:text-lg">
                <span className="font-semibold">Details:</span> {details}
              </p>
              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                <span className="font-semibold">Total Location Can Visit:</span>{" "}
                {locations}
              </p>

              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                <span className="font-semibold">Total-Time:</span> {day}days
              </p>

              <p className="max-w-xl mb-4 text-base text-white md:text-lg">
                <span className="font-semibold">Price:</span> ${price}
              </p>

              <p className="max-w-xl mb-4 text-base text-white md:text-lg flex gap-2 items-center">
                <span className="font-semibold">Rating:</span>{" "}
                <Star rating={rating}></Star>
              </p>

              <div>
                <button
                  className="btn bg-sky-300 w-full text-black hover:bg-sky-300"
                  title="Login First"
                >
                  Book Now
                </button>
              </div>
            </div>
            <div className="w-full max-w-xl xl:px-8 xl:w-10/12">
              <AreaCarousel pictures={pictures}></AreaCarousel>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Area;
