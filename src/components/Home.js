import React from "react";
import background from "../assets/background2.png";

const Home = () => {
  return (
    <div
      className="flex justify-center z-10 flex-col items-center p-5 grow w-full bg-center"
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="flex flex-col items-center">
        <div className="inline mt-7 2xl:mt-20 z-10 relative before:-z-10 before:absolute before:inset-0 before:top-0 before:w-full before:h-full before:bg-[#BF1E1A] before:skew-y-[0.1deg]">
          <h1 className="text-white py-2 px-3 text-center text-5xl 2xl:text-[5rem] font-bold">
            THE ART OF PROBLEM SOLVING
          </h1>
        </div>
        <button className="bg-gray-900 mt-5 active:scale-95 text-[#FBDA63] font-bold px-6 2xl:px-14 2xl:text-2xl py-3 2xl:py-6 tracking-wide hover:bg-gray-800 transition">
          Register
        </button>
      </div>
      <div className="lines -z-10">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
      </div>
    </div>
  );
};

export default Home;
