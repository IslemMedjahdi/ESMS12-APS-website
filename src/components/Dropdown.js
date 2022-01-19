import React,{useEffect, useRef, useState} from "react";
import { useNavigate } from "react-router-dom";

const Dropdown = () => {
  const navigate = useNavigate();
  const [isOpen,setOpen] = useState(false);
  const buttonRef = useRef();
  const handleClickOutside = (e) => {
    if (!buttonRef.current.contains(e.target)){
        setOpen(false);        
    }
  }
  useEffect(() => {
      document.addEventListener('click',handleClickOutside);
      return () => document.removeEventListener('click',handleClickOutside);
  })
  return (
    <div className="relative sm:hidden inline-block text-left z-50">
      <div>
        <button
        aria-label="dropdown"
        ref={buttonRef}
          type="button"
          className="flex items-center justify-center w-full  px-4 py-2 text-sm font-medium text-gray-700  hover:bg-gray-50  "
          id="options-menu"
          onClick={() => setOpen((isOpen) => !isOpen)}
        >
            {
                isOpen ?           <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
              : <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 14" />
            </svg>
            }
        </button>
      </div>
      {
          isOpen ?
      <div className="origin-top-right absolute right-0 mt-4 w-56  shadow-lg bg-white  ring-1 ring-black ring-opacity-5">
        <div
          className="py-1 "
          role="menu"
          aria-orientation="vertical"
          aria-labelledby="options-menu"
        >
          <div
            onClick={() => navigate("/", { replace: true })}
            className="block cursor-pointer px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>Home</span>
            </span>
          </div>
          <div
            onClick={() => navigate("/about", { replace: true })}
            className="block cursor-pointer px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>About</span>
            </span>
          </div>
          <div
            onClick={() => navigate("/speakers", { replace: true })}
            className="block cursor-pointer px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>Speakers</span>
            </span>
          </div>
          <div
            onClick={() => navigate("/agenda", { replace: true })}
            className="block cursor-pointer px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900 "
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>Agenda</span>
            </span>
          </div>
          <div
            onClick={() => navigate("/sponsor", { replace: true })}
            className="block cursor-pointer px-4 py-2 text-md text-gray-700 hover:bg-gray-100 hover:text-gray-900"
            role="menuitem"
          >
            <span className="flex flex-col">
              <span>Sponsor</span>
            </span>
          </div>
        </div>
      </div>
      :null
}
    </div>
  );
};

export default Dropdown;
