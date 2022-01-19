import React,{useState} from "react";
import { useTimer } from "react-timer-hook";

const Timer = () => {
  let [end, setEnd] = useState(false);
  const expiryTimestamp = new Date(2022,1,23);
  const {
    seconds,
    minutes,
    hours,
    days,
  } = useTimer({
    expiryTimestamp,
    onExpire: () => setEnd(true),
  });
  return (
    <div className="inline mt-12 2xl:mt-24 z-10 relative before:-z-10 before:absolute before:inset-0 before:top-0 before:w-full before:h-full before:bg-[#BF1E1A] before:skew-y-[0.3deg]">
      <h1 className="text-white leading-[1.1] p-4 2xl:p-5 text-center text-5xl 2xl:text-6xl font-semibold">
          {!end ? 
          <>
            <span>{days} </span>Day <span>{hours} </span> Hour{" "}
            <span>{minutes}</span> Minute <span>{seconds}</span> Second left
        </> :
        <>The Event is occurring now.</>
        }
      </h1>
    </div>
  );
};

export default Timer;
