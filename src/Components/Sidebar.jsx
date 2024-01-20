import { useParams } from "react-router-dom";
import AV1 from "../assets/av,1.jpg";
import { Teams } from "../Data/Teams";
import { Players } from "../Data/Players";

const Sidebar = ({ activesidebar, setActivesidebar }) => {
  const { id } = useParams();
  const players = Players.find((player) => player.id.toString() === id);
  4;

  return (
    <div
      id="sidebar"
      className={`block body_div ${activesidebar === "open" ? "active" : ""}`}
    >
      <div onClick={() => setActivesidebar("closed")} className="sidebar_close">
        &times;
      </div>

      <div className="container mb-3">
        <div className="flex space-x-5">
          <img id="gamer_pic" src={AV1} alt="" />
          <div className="flex flex-col">
            <span>Vino_Costa</span>
            <span className="text-gray-500">Game Profile</span>
          </div>
        </div>

        <div className="mt-3 p-0.5 bg-gray-500 relative">
          <div className="bg-primary p-0.5 w-2/3 absolute top-0 left-0"></div>
        </div>
        <small>560/700</small>

        <div className="my-2 p-3 grid grid-cols-2 gap-10">
          <div className="flex justify-between align-center px-3">
            <span className="text-primary">&#9776;</span>
            <span>4,800</span>
          </div>
          <div className="flex justify-between align-center px-3">
            <span className="text-primary">&#9776;</span>
            <span>28,309</span>
          </div>
        </div>

        <div className="btn w-full flex justify-between align-center">
          <div className="flex align-center space-x-3">
            <span>&#9776;</span>
            <span>Messages</span>
          </div>
          <span>&#9776;</span>
        </div>
      </div>

      <div className="container mb-3">
        <div className="mb-2 flex justify-between align-center">
          <span>My Teams</span>
          <div className="btn p-1.5">view all</div>
        </div>

        <ul>
          {Teams.map(({ id, name, img, tag }) => (
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
                &#9776;
              </span>
            </div>
          ))}
        </ul>
      </div>

      <div className="container">
        <div className="flex justify-between align-center mb-2">
          <span>Teammates</span>
          <span className="cursor-pointer">view all</span>
        </div>
        <div className="flex flex-col">
          <span className="mb-0.5">Vibrants</span>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            non? Dolores explicabo doloremque nisi officia tempore at eveniet
            dicta quidem.
          </small>
        </div>
        <div className="flex flex-col my-5">
          <span className="mb-0.5">Vibrants</span>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            non? Dolores explicabo doloremque nisi officia tempore at eveniet
            dicta quidem.
          </small>
        </div>
        <div className="flex flex-col">
          <span className="mb-0.5">Vibrants</span>
          <small>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
            non? Dolores explicabo doloremque nisi officia tempore at eveniet
            dicta quidem.
          </small>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
