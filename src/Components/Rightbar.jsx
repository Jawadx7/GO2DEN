import AV1 from "../assets/av,1.jpg";
import { Players } from "../Data/Players";
import { Teams } from "../Data/Teams";

const Rightbar = ({ setActiverightbar, activerightbar, getActivePlayer }) => {
  return (
    <div
      id="rightbar"
      className={`body_div ${activerightbar === "open" ? "active" : ""}`}
    >
      <div
        onClick={() => setActiverightbar("closed")}
        className="rightbar_close"
      >
        &times;
      </div>

      {/* Players List */}
      <div className="container">
        <div className="flex justify-between align-center mb-2">
          <span>Players</span>
          <span className="cursor-pointer">view all</span>
        </div>

        <ul>
          {Players.map(({ id, name, tag, img, game_banner, games, count }) => (
            <div
              key={id}
              className="flex justify-between align-center p-2 hover:bg-dark cursor-pointer"
              onClick={() => getActivePlayer(id)}
            >
              <div className="flex space-x-3 align-center">
                <img id="nav_pic" src={img} alt="" />
                <div className="flex flex-col">
                  <small>{name}</small>
                  <small className="text-gray-500">{tag}</small>
                </div>
              </div>
              <span className="bg-gray-700 hsm w-10 h-10 flex justify-center align-center">
                {count}
              </span>
            </div>
          ))}
        </ul>
      </div>

      {/* Teams List */}
      <div className="container my-3">
        <div className="flex justify-between align-center mb-2">
          <span>Teams</span>
          <div className="cursor-pointer space-x-2 flex align-center">
            <small>&#9776;</small>
            <small>filter</small>
          </div>
        </div>

        <ul>
          {Teams.map(({ id, name, img, tag, count }) => (
            <div
              key={id}
              className="flex justify-between align-center p-2 hover:bg-dark cursor-pointer"
            >
              <div className="flex space-x-3 align-center">
                <img id="nav_pic" src={img} alt="" />
                <div className="flex flex-col">
                  <small>{name}</small>
                  <small className="text-gray-500">{tag}</small>
                </div>
              </div>
              <span className="bg-gray-700 hsm w-10 h-10 flex justify-center align-center">
                {count}
              </span>
            </div>
          ))}
        </ul>
      </div>

      {/* Weapons List */}

      <div className="container">
        <div className="flex justify-between align-center mb-2">
          <span>Popular</span>
          <small className="cursor-pointer">Go to market</small>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="p-3 rounded-md bg-dark shadow-lg">
            <div className="flex justify-between align-center">
              <small>Death Mount</small>
              <span className="w-3 h-3 rounded-full  bg-primary"></span>
            </div>
            <img id="gamer_pic" src={AV1} alt="" className="mx-auto my-3" />
            <div className="flex justify-between align-center">
              <small className="text-gray-500">Grade 10</small>
              <span>$900</span>
            </div>
          </div>
          <div className="p-3 rounded-md bg-dark shadow-lg">
            <div className="flex justify-between align-center">
              <small>Bullder</small>
              <span className="w-3 h-3 rounded-full  bg-primary"></span>
            </div>
            <img id="gamer_pic" src={AV1} alt="" className="mx-auto my-3" />
            <div className="flex justify-between align-center">
              <small className="text-gray-500">Grade 15</small>
              <span>$1200</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Rightbar;
