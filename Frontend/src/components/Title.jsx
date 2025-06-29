import React from "react";

const Title = ({ text1, text2 }) => {
  return (
    <div className="inline-flex gap-2 items-center mb-3">
      <p className="text-gray-500 dark:text-white">
        {text1}
        <span className="text-gray-700 font-medium dark:text-gray-400">
          {text2}
        </span>
      </p>
      <p className="w-8 sm:w-12 h-[2px] bg-gray-500"></p>
    </div>
  );
};

export default Title;
