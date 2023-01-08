
import React from "react";
import "./Home.css";
import Carousel from "../Carousel/Carousel";
import {  FaPlay} from "react-icons/fa";
import VideoModal from "./VideoModal";
import FourIconCards from "./FourIconCards";
import PerFactHoliday from "./PerFactHoliday";
import "aos/dist/aos.css";
import ChoseYourPerfectHoliday from "./ChoseYourPerfectHoliday";
import SerachBox from "./SerachBox";
import Review from "./Review/Review";
import Mediterranean from "../Mediterranean/Mediterranean";
import TravelReviews from "../TravelReviews/TravelReviews";

const Home = () => {


  return (
    <div className="">
      <div className=" block">
        <Carousel></Carousel>

       <SerachBox></SerachBox>
      </div>

      {/* for show searching data  */}
      <div></div>

      {/* all data start  */}

      <div className="container mx-auto justify-center items-center text-center mt-10">
        <h1 className="font-mono font-bold text-3xl text-sky-500 ">
          Choose Your
        </h1>
        <h1 className="font-mono font-bold text-5xl my-3 text-sky-500 ">
          Perfect Holiday
        </h1>
      </div>

      <ChoseYourPerfectHoliday></ChoseYourPerfectHoliday>

      {/* video section start  */}

      <div
        className="hero md:h-[400px] lg:h-[700px]"
        data-aos="fade-up"
        style={{
          backgroundImage: `url("https://i.ibb.co/PzZrhgH/pexels-pixabay-41004.jpg")`,
        }}
      >
        <div>
          <div className="hero-content text-center text-neutral-content ">
            <div className="max-w-md">
              <h1 className="mb-5 text-sm md:text-4xl font-bold font-mono">
                Go & Discover
              </h1>

              <p className="mb-5 text-sm md:text-5xl">Breathtaking Cities</p>

              <label
                htmlFor="VideoModal"
                className="btn bg-sky-500 border-0 hover:bg-sky-400 text-3xl"
              >
                <FaPlay></FaPlay>
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="w-[1200px]" data-aos="fade-up">
        <VideoModal></VideoModal>
      </div>

      <div className="container mx-auto  my-16" data-aos="fade-up">
        <FourIconCards></FourIconCards>
      </div>

      <div className="bg-gray-100 p-2">
        <PerFactHoliday></PerFactHoliday>
      </div>

      <div className="container mx-auto my-16 ">
        <Review></Review>
      </div>


      <div className=" my-16">
        <Mediterranean ></Mediterranean>
      </div>



      <div className=" my-16">
        <TravelReviews></TravelReviews>
      </div>
    </div>
  );
};

export default Home;
