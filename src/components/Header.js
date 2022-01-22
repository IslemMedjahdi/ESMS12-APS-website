import React from "react";
import logo from "../assets/logoPNG.png";
import { NavLink, useNavigate} from "react-router-dom";
import Dropdown from "./Dropdown";

const Header = () => {
  const navigate = useNavigate()
  return (
    <header className="flex z-50 bg-white justify-between items-center p-4 2xl:p-7 text-gray-900">
      <img onClick={() => navigate('/',{replace: true})} className="w-20 2xl:w-24 h-auto cursor-pointer" src={logo} alt="logo" />
      <nav className="flex items-center">
        <ul>
          <li className="hidden sm:flex text-center space-x-5 2xl:space-x-7">
            <NavLink className={(navData) => navData.isActive ? "relative z-20 2xl:text-2xl ml-5 2xl:ml-7  before:w-[102%] before:-z-10 before:h-3 before:bg-[#FBDA63] before:absolute before:inset-0 before:top-3 before:skew-y-2"  : "relative z-20 2xl:text-2xl before:-z-10 before:h-3 before:bg-[#FBDA63] before:absolute before:inset-0 before:top-3 before:skew-y-2 before:scale-x-0 hover:before:scale-x-105 before:transition before:origin-right before:duration-500" } to="/">Home</NavLink>
            <NavLink className={(navData) => navData.isActive ? "relative z-20 2xl:text-2xl  before:w-[102%] before:-z-10 before:h-3 before:bg-[#FBDA63] before:absolute before:inset-0 before:top-3 before:skew-y-2"  : "relative z-20 2xl:text-2xl before:-z-10 before:h-3 before:bg-[#FBDA63] before:absolute before:inset-0 before:top-3 before:skew-y-2 before:scale-x-0 hover:before:scale-x-105 before:transition before:origin-right before:duration-500" }  to="/about">About</NavLink>
            <NavLink className={(navData) => navData.isActive ? "relative z-20 2xl:text-2xl  before:w-[102%] before:-z-10 before:h-3 before:bg-[#FBDA63] before:absolute before:inset-0 before:top-3 before:skew-y-2"  : "relative z-20 2xl:text-2xl before:-z-10 before:h-3 before:bg-[#FBDA63] before:absolute before:inset-0 before:top-3 before:skew-y-2 before:scale-x-0 hover:before:scale-x-105 before:transition before:origin-right before:duration-500" } to="/speakers">Speakers</NavLink>
            <NavLink className={(navData) => navData.isActive ? "relative z-20 2xl:text-2xl  before:w-[102%] before:-z-10 before:h-3 before:bg-[#FBDA63] before:absolute before:inset-0 before:top-3 before:skew-y-2"  : "relative z-20 2xl:text-2xl before:-z-10 before:h-3 before:bg-[#FBDA63] before:absolute before:inset-0 before:top-3 before:skew-y-2 before:scale-x-0 hover:before:scale-x-105 before:transition before:origin-right before:duration-500" }to="/agenda">Agenda</NavLink>
            <NavLink className={(navData) => navData.isActive ? "relative z-20 2xl:text-2xl mr-5 2xl:mr-7  before:w-[102%] before:-z-10 before:h-3 before:bg-[#FBDA63] before:absolute before:inset-0 before:top-3 before:skew-y-2"  : "relative z-20 2xl:text-2xl before:-z-10 before:h-3 before:bg-[#FBDA63] before:absolute before:inset-0 before:top-3 before:skew-y-2 before:scale-x-0 hover:before:scale-x-105 before:transition before:origin-right before:duration-500" } to="/sponsor">Sponsor</NavLink>
          </li>
        </ul>
        <a href="https://form-aps-register.netlify.app/" target="_blank" rel="noreferrer" className="bg-gray-900 text-[#FBDA63] font-bold px-5 2xl:px-7 2xl:text-2xl py-2 2xl:py-4 ml-5 tracking-wide hover:bg-gray-600 active:scale-95 transition">Register</a>
      </nav>
      <Dropdown/>
    </header>
  );
};

export default Header;
