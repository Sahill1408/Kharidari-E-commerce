import React from "react";
import { toast } from "react-toastify";

const NewsLetterBox = () => {
  const onSubmitHandler = (event) => {
    event.preventDefault();
    event.target.reset();
    toast("Thank you for subscribing!");
  };

  return (
    <div className="text-center">
      <p className="text-2xl font-medium text-gray-800 dark:text-gray-200">
        Subscribe Now for Instant Notifications!
      </p>
      <p className="text-gray-600 dark:text-gray-400 mt-3">
        Stay ahead of the game with our subscription service—get fast
        notifications on new arrivals, exclusive deals, and special events
        delivered straight to your inbox. Don't miss out on the latest trends
        and offers! Sign up today and be the first to know!
      </p>
      <form
        onSubmit={onSubmitHandler}
        className="w-full sm:w-1/2 flex items-center gap-3 my-6 mx-auto border border-gray-300 dark:border-gray-700 pl-3"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full sm:flex-1 outline-none bg-transparent dark:text-white"
          required
        />
        <button
          type="submit"
          className="bg-black dark:bg-[#333] text-white dark:text-white text-xs px-10 py-4 hover:bg-[#333] dark:hover:bg-[#444]  font-medium transition-colors duration-200"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default NewsLetterBox;
