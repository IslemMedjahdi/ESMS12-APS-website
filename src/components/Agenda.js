import React from "react";
import Timer from "./Timer";
const Agenda = () => {
  return (
    <div className="flex grow justify-center flex-col items-center p-5">
      <div className="inline  z-10 relative before:-z-10 before:absolute before:inset-0 before:top-5 before:w-full before:h-full before:bg-[#BF1E1A] before:skew-y-1">
        <h1 className="text-white text-center text-5xl 2xl:text-7xl font-bold">
          Agenda
        </h1>
      </div>
      <div className="flex flex-col sm:flex-row sm:space-x-7">
        <div className="mt-10">
          <p className="text-[#BF1E1A] text-xl 2xl:text-3xl translate-y-2 font-bold text-center">
            Day01
          </p>
          <div className="border-2  border-dashed p-3 2xl:p-10 2xl:text-xl 2xl:space-y-1">
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">8</span>am-
                <span className="text-[#FBDA63]">9</span>am
              </span>{" "}
              Checking
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">9</span>am-
                <span className="text-[#FBDA63]">10</span>am
              </span>{" "}
              Opening Cermony
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">10</span>am-
                <span className="text-[#FBDA63]">1</span>pm
              </span>{" "}
              Workshop01
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">1</span>pm-
                <span className="text-[#FBDA63]">2</span>pm
              </span>{" "}
              Lunch-Break
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">2</span>pm-
                <span className="text-[#FBDA63]">5</span>pm
              </span>{" "}
              Workshop02
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-[#BF1E1A] text-xl 2xl:text-3xl translate-y-2 font-bold text-center">
            Day02
          </p>
          <div className="border-2 border-dashed p-3 2xl:p-10 2xl:text-xl 2xl:space-y-1">
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">8</span>am-
                <span className="text-[#FBDA63]">9</span>am
              </span>{" "}
              Checking
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">9</span>am-
                <span className="text-[#FBDA63]">10</span>am
              </span>{" "}
              Opening Cermony
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">10</span>am-
                <span className="text-[#FBDA63]">1</span>pm
              </span>{" "}
              Workshop01
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">1</span>pm-
                <span className="text-[#FBDA63]">2</span>pm
              </span>{" "}
              Lunch-Break
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">2</span>pm-
                <span className="text-[#FBDA63]">5</span>pm
              </span>{" "}
              Workshop02
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-[#BF1E1A] text-xl 2xl:text-3xl translate-y-2 font-bold text-center">
            Day03
          </p>
          <div className="border-2 border-dashed p-3 2xl:p-10 2xl:text-xl 2xl:space-y-1">
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">8</span>am-
                <span className="text-[#FBDA63]">9</span>am
              </span>{" "}
              Checking
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">9</span>am-
                <span className="text-[#FBDA63]">10</span>am
              </span>{" "}
              Opening Cermony
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">10</span>am-
                <span className="text-[#FBDA63]">1</span>pm
              </span>{" "}
              Workshop01
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">1</span>pm-
                <span className="text-[#FBDA63]">2</span>pm
              </span>{" "}
              Lunch-Break
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">2</span>pm-
                <span className="text-[#FBDA63]">5</span>pm
              </span>{" "}
              Workshop02
            </p>
          </div>
        </div>
      </div>
    <Timer/>
    </div>
  );
};

export default Agenda;
