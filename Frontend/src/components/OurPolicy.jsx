import React from "react";
import { assets } from "../assets/assets";

const OurPolicy = () => {
  return (
    <div className="flex flex-col sm:flex-row justify-around gap-12 sm:gap-2 text-center py-20 text-xs sm:text-sm md:text-base text-gray-700">
      <div>
        <img
          src={assets.exchange_icon}
          className="w-12 m-auto mb-5 dark:invert"
          alt="Easy Exchange"
          width="48"
          height="48"
        />
        <p className="font-semibold dark:text-gray-300">Easy Exchange</p>
        <p className="text-gray-400">
          We offer hassle-free Exchange Policy for our customers
        </p>
      </div>

      <div>
        <img
          src={assets.quality_icon}
          className="w-12 m-auto mb-5 dark:invert"
          alt="15 Days Return Policy"
          width="48"
          height="48"
        />
        <p className="font-semibold dark:text-gray-300">
          15 Days Return Policy
        </p>
        <p className="text-gray-400">We provide 15 days return Policy</p>
      </div>

      <div>
        <img
          src={assets.support_img}
          className="w-12 m-auto mb-5 dark:invert"
          alt="Best Customer Support"
          width="48"
          height="48"
        />
        <p className="font-semibold dark:text-gray-300">
          Best Customer Support
        </p>
        <p className="text-gray-400">We provide 24/7 Customer Support</p>
      </div>
    </div>
  );
};

export default OurPolicy;
