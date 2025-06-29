import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const Contact = () => {
  return (
    <div>
      <div className="text-center text-2xl pt-10 border-">
        <Title text1={"CONTACT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 ">
        <img
          className="w-full md:max-w-[480px]"
          src={assets.contactus}
          alt=""
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-600 dark:text-gray-200">
            Our Store
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Pune, <br />
            maharashtra, India
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Tel: (91) 9328829393 <br /> Email: admin@kharidari.com
          </p>
          <p className="font-semibold text-xl text-gray-600 dark:text-gray-200">
            Careers at KHARIDARI
          </p>
          <p className="text-gray-500 dark:text-gray-400">
            Learn more about our team and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black dark:hover:bg-white dark:hover:text-black dark:border-gray-300 hover:text-white transition-all duration-500">
            Explore Careers
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;
