import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsLetterBox from "../components/NewsLetterBox";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={" US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img src={assets.about_img} className="w-full md:w-[450px]" alt="" />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p className="dark:text-gray-300">
            Welcome to Kharidari, where fashion meets individuality! We're
            passionate about helping you express your unique style through our
            carefully curated collection of clothing. Our mission is to provide
            high-quality, on-trend apparel that empowers you to feel confident
            and comfortable in your own skin.
          </p>
          <p className="dark:text-gray-300">
            We prioritize sustainability and ethical practices, working with
            brands that share our commitment to quality and responsible fashion.
            When you shop with us, you're not just updating your wardrobe—you're
            supporting a community that values integrity and style.
          </p>
          <b className="text-gray-700 dark:text-gray-200">Our Mission</b>
          <p className="dark:text-gray-300">
            {" "}
            Our mission at Kharidari is to empower individuals through fashion.
            We strive to provide a diverse range of high-quality clothing that
            not only enhances personal style but also fosters confidence and
            self-expression. We believe that everyone deserves to feel good in
            what they wear, and our curated collections are designed to
            celebrate uniqueness in every form.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={" CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600 dark:text-gray-300">
            We believe that quality is the cornerstone of great fashion. Our
            commitment to providing exceptional clothing starts with meticulous
            sourcing and a thorough selection process.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600 dark:text-gray-300">
            We understand that your time is valuable, which is why we prioritize
            convenience in every aspect of your shopping experience. Our
            user-friendly website is designed to make browsing and purchasing
            your favorite styles as seamless as possible.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Service</b>
          <p className="text-gray-600 dark:text-gray-300">
            Our dedicated team is here to ensure that your shopping experience
            is enjoyable, hassle-free, and personalized to meet your needs.
            Whether you have questions about sizing, need style advice, or
            require assistance with your order, we are just a message away.
          </p>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default About;
