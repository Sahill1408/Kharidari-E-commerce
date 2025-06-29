import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
  return (
    <div className="flex flex-col sm:flex-row border border-gray-400">
      {/*Hero Left Side*/}
      <div className="w-full sm:w-1/2 flex items-center justify-center py-10 sm:py-0">
        <div className="text-[#414141]">
          <div className="flex items-center gap-2">
            <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
            <p className="font-medium text-sm md:text-base dark:text-gray-400">
              OUR BESTSELLERS
            </p>
          </div>
          <h1 className="text-3xl sm:py-3 lg:text-5xl leading-relaxed prata-regular dark:text-gray-200">
            Latest Arrivals
          </h1>
          <div className="flex items-center gap-2">
            <p className="font-semibold text-sm md:text-base dark:text-gray-400">
              SHOP NOW
            </p>
          </div>
        </div>
      </div>
      {/*Hero Right Side*/}
      <img
        src={assets.hero}
        className="w-full sm:w-1/2"
        alt=""
        loading="lazy"
      />
    </div>
  );
};

export default Hero;
