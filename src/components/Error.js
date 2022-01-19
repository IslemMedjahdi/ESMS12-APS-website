import React from "react";
import pagenotfound from "../assets/pagenotfound.svg";
const Error = () => {
  return (
    <div className="flex sm:space-x-16  sm:space-y-0 grow flex-col sm:flex-row justify-center items-center p-5">
      <img
        className="object-cover w-96 2xl:w-[30rem] h-full order-2 sm:order-1 sm:mt-0 mt-10"
        src={pagenotfound}
        alt="pagenotfound"
      />
      <p className="text-5xl text-center 2xl:text-7xl font-bold text-white order-1 sm:order-2">
        Page Not found !
      </p>
    </div>
  );
};

export default Error;
