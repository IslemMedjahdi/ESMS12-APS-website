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
      <div className="flex flex-col font-mono sm:flex-row sm:space-x-7">
        <div className="mt-10">
          <p className="text-[#BF1E1A] text-xl 2xl:text-3xl translate-y-2 font-bold text-center">
            Day01
          </p>
          <div className="border-2 space-y-[0.1rem]  border-dashed p-3 2xl:p-10 2xl:text-xl 2xl:space-y-1">
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">08:30</span>am-
                <span className="text-[#FBDA63]">09:30</span>am
              </span>{" "}
              Check-In
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">09:30</span>am-
                <span className="text-[#FBDA63]">10:00</span>am
              </span>{" "}
              Opening Cermony
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">10:00</span>am-
                <span className="text-[#FBDA63]">12:00</span>pm
              </span>{" "}
              First Conference
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">12:00</span>pm-
                <span className="text-[#FBDA63]">01:00</span>pm
              </span>{" "}
              Lunch-Break
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">01:00</span>pm-
                <span className="text-[#FBDA63]">03:00</span>pm
              </span>{" "}
              Activities for Fun
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">03:00</span>pm-
                <span className="text-[#FBDA63]">03.30</span>pm
              </span>{" "}
              Coffee-Break
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">03:30</span>pm-
                <span className="text-[#FBDA63]">05.30</span>pm
              </span>{" "}
              Graph Theory Workshop
            </p>
          </div>
        </div>
        <div className="mt-10">
          <p className="text-[#BF1E1A] text-xl 2xl:text-3xl translate-y-2 font-bold text-center">
            Day02
          </p>
          <div className="border-2 space-y-[0.1rem]  border-dashed p-3 2xl:p-10 2xl:text-xl 2xl:space-y-1">
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">09:00</span>am-
                <span className="text-[#FBDA63]">10:30</span>am
              </span>{" "}
              Second Conference
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">10:30</span>am-
                <span className="text-[#FBDA63]">12:30</span>pm
              </span>{" "}
              Dynamic Programming WorkShop
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">12:30</span>pm-
                <span className="text-[#FBDA63]">01:30</span>pm
              </span>{" "}
              Lunch-Break
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">01:30</span>pm-
                <span className="text-[#FBDA63]">03:30</span>pm
              </span>{" "}
              Python WorkShop
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">03:30</span>pm-
                <span className="text-[#FBDA63]">04:00</span>pm
              </span>{" "}
              Coffee-Break
            </p>
            <p className="text-white">
              <span className="mr-2">
                <span className="text-[#FBDA63]">04:00</span>pm-
                <span className="text-[#FBDA63]">05.00</span>pm
              </span>{" "}
              Closing Cermony
            </p>
            <p className="block text-white">
              &nbsp;
            </p>
          </div>
        </div>
      </div>
      <Timer />
    </div>
  );
};

export default Agenda;
