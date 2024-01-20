import React, { useState } from "react";
import AV1 from "../assets/av,1.jpg";

const Navbar = ({ setActivesidebar, setActiverightbar }) => {
  const [active, setActive] = useState("home");

  return (
    <header className="fixed top-0 left-0 px-10 w-full z-10 flex justify-between align-center shadow-lg bg-dark">
      <div onClick={() => setActiverightbar("open")} className="rightbar_menu">
        &#9776;
      </div>

      <div className="text-primary font-bold">
        GO2<span className="text-secondary">DEN</span>
      </div>

      <div className="nav_menu">&#9776;</div>

      <ul id="nav_bar" className="flex align-center space-x-5">
        <li
          onClick={() => setActive("home")}
          className={`p-4 border-transparent border-2 cursor-pointer ${
            active === "home" ? "border-b-red-500" : ""
          }`}
        >
          Home
        </li>
        <li
          onClick={() => setActive("pcw")}
          className={`p-4 border-transparent border-2 cursor-pointer ${
            active === "pcw" ? "border-b-red-500" : ""
          }`}
        >
          PCW
        </li>
        <li
          onClick={() => setActive("Tournaments")}
          className={`p-4 border-transparent border-2 cursor-pointer ${
            active === "Tournaments" ? "border-b-red-500" : ""
          }`}
        >
          Tournaments
        </li>
        <li
          onClick={() => setActive("Teammatches")}
          className={`p-4 border-transparent border-2 cursor-pointer ${
            active === "Teammatches" ? "border-b-red-500" : ""
          }`}
        >
          Teammatches
        </li>
        <li
          onClick={() => setActive("Ratings")}
          className={`p-4 border-transparent border-2 cursor-pointer ${
            active === "Ratings" ? "border-b-red-500" : ""
          }`}
        >
          Ratings
        </li>
      </ul>

      <ul id="nav_2" className="flex align-center space-x-5">
        <li className="flex align-center space-x-2">
          <span className="text-primary">&#9776;</span>
          <span>30,209</span>
        </li>
        <small className="text-primary">Qualify</small>
        <select className="outline-none bg-dark">
          <option value="USA">USA</option>
          <option value="USA">UK</option>
          <option value="USA">China</option>
          <option value="USA">Ghana</option>
        </select>
        <span>&#9776;</span>
        <span>&#9776;</span>
        <span>&#9776;</span>
        <span>&#9776;</span>
      </ul>

      <div
        onClick={() => setActivesidebar("open")}
        className="flex align-center space-x-2"
      >
        <img id="nav_pic" src={AV1} alt="" />
        <div className="flex flex-col">
          <span className="hsm">Vino_Costa</span>
          <small>4,800, 28,309</small>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
