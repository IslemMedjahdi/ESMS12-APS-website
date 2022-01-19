import React from "react";

const About = () => {
  return (
    <div className="flex grow justify-center flex-col items-center p-5">
      <div className="inline  z-10 relative before:-z-10 before:absolute before:inset-0 before:top-5 before:w-full before:h-full before:bg-[#BF1E1A] before:skew-y-1">
        <h1 className="text-white text-center text-5xl 2xl:text-7xl font-bold">What Is APS ?</h1>
      </div>
      <p className="mt-12 2xl:mt-16 leading-10 2xl:leading-[3.5rem] text-center font-medium text-white text-2xl 2xl:text-4xl tracking-wide max-w-2xl 2xl:max-w-screen-xl">
        APS, is an abbreviation of "<span className="text-[#FBDA63]">Art of Problem Solving</span>" is an annual
        technical event held by the Scientific Club of ESI(<span className="text-[#FBDA63]">CSE</span>), aiming to
        deliver conferences and workshops to students, developers and every
        problem solving enthusiasts in different fields.
      </p>
    </div>
  );
};

export default About;
