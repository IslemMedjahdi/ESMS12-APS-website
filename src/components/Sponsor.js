import React from "react";
import condor from "../assets/Condor.png";
import yassir from "../assets/Yassir.jpg";
import djezzy from "../assets/djezzy.png";

const Sponsor = () => {
  return (
    <div className="flex grow justify-center flex-col items-center p-5">
      <div className="inline z-10 relative before:-z-10 before:absolute before:inset-0 before:top-5 before:w-full before:h-full before:bg-[#BF1E1A] before:skew-y-1">
        <h1 className="text-white text-center text-5xl 2xl:text-7xl font-bold">
          Sponsors
        </h1>
      </div>
      <p className="mt-8 2xl:mt-16 text-center 2xl:text-4xl font-medium text-white text-3xl tracking-wide max-w-2xl">
        Thank You For Spponsorring Us <span className="text-[#BF1E1A]">!</span>
      </p>
      <div className="flex items-center z-10 space-y-12 sm:space-y-0 sm:space-x-12 mt-12 2xl:mt-16 flex-col sm:flex-row">
        <div>
          <a href="https://www.djezzy.dz/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src={djezzy}
              alt="djzzy"
              className="w-48 2xl:w-72 h-auto cursor-pointer hover:scale-105 transition  outline-white outline-offset-4 outline-dashed"
            />
          </a>
        </div>
        <div>
          <a href="https://www.condor.dz/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src={condor}
              alt="condor"
              className="bg-white cursor-pointer hover:scale-105 transition p-4 w-52 2xl:w-80 outline-white outline-offset-4 outline-dashed"
            />
          </a>
        </div>
        <div>
          <a href="https://driver.yassir.com/" target="_blank" rel="noreferrer">
            {" "}
            <img
              src={yassir}
              alt="yassir"
              className="w-48 h-auto 2xl:w-72 cursor-pointer hover:scale-105 transition outline-white outline-offset-4 outline-dashed"
            />{" "}
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sponsor;
