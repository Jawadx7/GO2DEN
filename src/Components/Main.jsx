import React from "react";
import codBanner from "../assets/c,banner.jpg";
import ffBanner from "../assets/ff,banner.jpg";
import lBanner from "../assets/l,banner.jpg";
import mBanner from "../assets/m,banner.jpg";
import Mytable from "./Table";
import game1 from "../assets/cod,1.jpg";
import game2 from "../assets/cod,2.jpg";
import game3 from "../assets/cod,3.jpg";
import game5 from "../assets/cod,5.jpg";
import game6 from "../assets/cod,6.jpg";

const Main = () => {
  return (
    <div id="main" className="body_div">
      <div className="relative">
        <img id="banner" src={codBanner} alt="" />
        <div className="absolute h-full w-full top-0 left-0 p-5 flex flex-col justify-between">
          <div>
            <h1 className="text-primary">
              Battle your brains out in one night
            </h1>
            <h1 className="hxl">Battle Royal</h1>
            <div className="bg-primary text-white hmd w-10 h-10 flex justify-center align-center">
              25
            </div>
          </div>

          <div className="btn">Register for event</div>
        </div>
      </div>

      {/* Table */}

      <div className="container my-3">
        <div className="flex justify-between align-center mb-3">
          <span>Tournaments</span>
          {/* <div>Buttons</div> */}
          <div className="btn">Create a Tournament</div>
        </div>

        <Mytable />
      </div>

      <div id="games_scene" className="grid grid-cols-3 gap-3 mt-2">
        <div className="container">
          <img id="game_scene" src={game1} alt="" />
          <div className="text-gray-500 hsm flex justify-between align-center my-2">
            <span>Call Of Duty</span>
            <span>Alpha</span>
          </div>
          <div className="hsm flex justify-between align-center">
            <span>Bandy, Kill the Boss Cup</span>
            <span>$300,000</span>
          </div>
        </div>
        <div className="container">
          <img id="game_scene" src={game2} alt="" />
          <div className="text-gray-500 hsm flex justify-between align-center my-2">
            <span>Call Of Duty</span>
            <span>Alpha</span>
          </div>
          <div className="hsm flex justify-between align-center">
            <span>Bandy, Kill the Boss Cup</span>
            <span>$300,000</span>
          </div>
        </div>
        <div className="container">
          <img id="game_scene" src={game3} alt="" />
          <div className="text-gray-500 hsm flex justify-between align-center my-2">
            <span>Call Of Duty</span>
            <span>Alpha</span>
          </div>
          <div className="hsm flex justify-between align-center">
            <span>Bandy, Kill the Boss Cup</span>
            <span>$300,000</span>
          </div>
        </div>
        <div className="container">
          <img id="game_scene" src={game2} alt="" />
          <div className="text-gray-500 hsm flex justify-between align-center my-2">
            <span>Call Of Duty</span>
            <span>Alpha</span>
          </div>
          <div className="hsm flex justify-between align-center">
            <span>Bandy, Kill the Boss Cup</span>
            <span>$300,000</span>
          </div>
        </div>
        <div className="container">
          <img id="game_scene" src={game5} alt="" />
          <div className="text-gray-500 hsm flex justify-between align-center my-2">
            <span>Call Of Duty</span>
            <span>Alpha</span>
          </div>
          <div className="hsm flex justify-between align-center">
            <span>Bandy, Kill the Boss Cup</span>
            <span>$300,000</span>
          </div>
        </div>
        <div className="container">
          <img id="game_scene" src={game6} alt="" />
          <div className="text-gray-500 hsm flex justify-between align-center my-2">
            <span>Call Of Duty</span>
            <span>Alpha</span>
          </div>
          <div className="hsm flex justify-between align-center">
            <span>Bandy, Kill the Boss Cup</span>
            <span>$300,000</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
