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

import { Players } from "../Data/Players";

const Main = ({ activePlayer }) => {
  const current = Players[activePlayer];
  return (
    <div id="main" className="body_div">
      <div className="relative">
        <img id="banner" src={current.game_banner} alt="" />
        <div className="absolute h-full w-full top-0 left-0 p-5 flex flex-col justify-between">
          <div>
            <h1 className="text-primary">
              Battle your brains out in one night
            </h1>
            <h1 className="hxl">{current.banner_text}</h1>
            <div className="bg-primary text-white hsm2 w-fit h-fit flex justify-center align-center">
              {current.date}
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
        {current.games.map(({ id, img, title, amount }) => (
          <div key={id} className="container">
            <img id="game_scene" src={img} alt="" />
            <div className="text-gray-500 hsm flex justify-between align-center my-2">
              <span>{current.game_name}</span>
              <span>{current.game_tag}</span>
            </div>
            <div className="hsm flex justify-between align-center">
              <span>{title}</span>
              <span>{amount}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Main;
