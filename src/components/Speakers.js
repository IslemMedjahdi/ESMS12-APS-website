import React, { useState } from "react";

let speakers = [
  {
    id: 1,
    name: "Riyadh Baghdadi",
    job: "Assistant Professor",
    image:
      "https://ik.imagekit.io/k8qyclrnktl5/tr:w-600,h:600/Riyadh-Baghdadi_OGqwrCeUe.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642627176221",
  },
  {
    id: 2,
    name: "Islem Medjahdi",
    job: "Front End Developer",
    image:
      "https://ik.imagekit.io/k8qyclrnktl5/tr:w-600,h-600/Islem-Medjahdi_hDqk-hGJh.jpg",
  },
  {
    id: 3,
    name: "Nassreddine Fliti",
    job: "Multimedia Responsible",
    image: 'https://ik.imagekit.io/k8qyclrnktl5/tr:w-600,h-600/Nassreddine-Fliti_EpTaW5fo0.jpg?ik-sdk-version=javascript-1.4.3&updatedAt=1642627182656',
  },
  {
    id: 4,
    name: "Abdelkader Zedek",
    job: "ESMS12 Mentor",
    image:
      "https://ik.imagekit.io/k8qyclrnktl5/tr:w-600,h:600/Abdou_GfCFfnh9ShS.jpeg",
  },
];

const Speakers = () => {
  let [speaker, setSpeaker] = useState(0);
  return (
    <div className="flex grow justify-center flex-col items-center p-5">
      <div className="inline z-10 relative before:-z-10 before:absolute before:inset-0 before:top-5 before:w-full before:h-full before:bg-[#BF1E1A] before:skew-y-1">
        <h1 className="inline text-white text-5xl 2xl:text-7xl font-bold">
          Speakers
        </h1>
      </div>
      <p className="mt-8 2xl:mt-12 text-center 2xl:text-4xl font-medium text-white text-2xl tracking-wide max-w-2xl">
        They Are Providing a Rich Content !
      </p>
      <div className="flex items-center sm:space-x-10 2xl:space-x-16 2xl:mt-10">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() =>
            setSpeaker((prev) => (prev === 0 ? 3 : (prev - 1) % 4))
          }
          className="h-12 w-12 active:text-[#FBDA63] 2xl:h-20 2xl:w-20 hidden sm:block text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M15 19l-7-7 7-7"
          />
        </svg>
        <div className="flex flex-col sm:flex-row mt-7 space-y-8 items-center space-x-0 sm:space-x-36">
          <img
            className="w-56 h-56 2xl:w-72 2xl:h-72 outline-2 outline outline-white outline-offset-4  object-cover"
            alt={speakers[speaker].name}
            src={speakers[speaker].image}
          />
          <div className="flex flex-col items-center text-center text-4xl 2xl:text-6xl space-y-3">
            <p className="text-[#FBDA63] font-bold ">
              {speakers[speaker].name}
            </p>
            <p className="text-white font-bold">{speakers[speaker].job}</p>
          </div>
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          onClick={() => setSpeaker((prev) => (prev + 1) % 4)}
          className="h-12 w-12 active:text-[#FBDA63] 2xl:h-20 2xl:w-20 hidden sm:block                                                                                                                                                                                                                                                                                                                                                                                                text-white cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={4}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </div>
      <div className="flex space-x-6 2xl:space-x-7 mt-10 2xl:mt-20">
        <div
          className={`w-5 h-5 2xl:w-8 2xl:h-8 ${
            speaker === 0 ? "bg-[#FBDA63]" : "bg-white"
          } rounded-full cursor-pointer hover:opacity-80`}
          onClick={() => setSpeaker(0)}
        ></div>{" "}
        <div
          className={`w-5 h-5 2xl:w-8 2xl:h-8 ${
            speaker === 1 ? "bg-[#FBDA63]" : "bg-white"
          } rounded-full cursor-pointer hover:opacity-80`}
          onClick={() => setSpeaker(1)}
        ></div>{" "}
        <div
          className={`w-5 h-5 2xl:w-8 2xl:h-8 ${
            speaker === 2 ? "bg-[#FBDA63]" : "bg-white"
          } rounded-full cursor-pointer hover:opacity-80`}
          onClick={() => setSpeaker(2)}
        ></div>{" "}
        <div
          className={`w-5 h-5 2xl:w-8 2xl:h-8 ${
            speaker === 3 ? "bg-[#FBDA63]" : "bg-white"
          } rounded-full cursor-pointer hover:opacity-80`}
          onClick={() => setSpeaker(3)}
        ></div>
      </div>
    </div>
  );
};

export default Speakers;
