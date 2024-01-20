import "./App.scss";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import Main from "./Components/Main";
import Rightbar from "./Components/Rightbar";
import { useState } from "react";

function App() {
  const [activesidebar, setActivesidebar] = useState("close");
  const [activerightbar, setActiverightbar] = useState("close");

  return (
    <>
      <Navbar
        setActiverightbar={setActiverightbar}
        setActivesidebar={setActivesidebar}
      />
      <div className="body_container">
        <Sidebar
          setActivesidebar={setActivesidebar}
          activesidebar={activesidebar}
        />
        <Main />
        <Rightbar
          setActiverightbar={setActiverightbar}
          activerightbar={activerightbar}
        />
      </div>
    </>
  );
}

export default App;
