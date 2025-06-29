import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div>
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        <div>
          <img src={assets.logo_kha} alt="" className="mb-5 w-36 dark:invert" />
          <p className="w-full md:2/3 text-gray-600 dark:text-gray-400">
            Shop Online Anytime! Enjoy a seamless shopping experience from the
            comfort of your home. Browse our latest collections, exclusive
            deals, and more—available 24/7!
          </p>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 dark:text-gray-200">COMPANY</p>
          <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-400">
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
        <div>
          <p className="text-xl font-medium mb-5 dark:text-gray-200">
            GET IN TOUCH
          </p>
          <ul className="flex flex-col gap-1 text-gray-600 dark:text-gray-400">
            <li>+91-9328829393</li>
            <li>Sahildhanavade321@gmail.com</li>
          </ul>
        </div>
      </div>
      <div>
        <hr />
        <p className="py-5 text-center dark:text-gray-400">
          <span className="font-semibold text-gray-600 dark:text-gray-400">
            Copyright &copy; 2024{" "}
          </span>
          <a
            href="https://kharidari.com"
            className="text-blue-400 hover:text-blue-500"
            target="_blank"
            rel="noopener noreferrer"
          >
            kharidari.com {""}
          </a>
          ~ All Rights Reserved
        </p>
        <p className="text-xs text-center mt-1  text-gray-500">
          Powered by Kharidari
        </p>
      </div>
    </div>
  );
};

export default Footer;
