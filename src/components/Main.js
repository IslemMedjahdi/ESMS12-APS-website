import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Header";
import Home from "./Home";
import About from "./About";
import Speakers from "./Speakers";
import Agenda from "./Agenda";
import Sponsor from "./Sponsor";
import Error from "./Error";

const Main = () => {
  return (
    <div className="min-h-screen bg-[#3463AD] flex flex-col">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/speakers" element={<Speakers />}></Route>
          <Route path="/agenda" element={<Agenda />}></Route>
          <Route path="/sponsor" element={<Sponsor />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Main;
