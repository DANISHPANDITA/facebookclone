import React from "react";
import "./App.css";
import Feeds from "./Feeds";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import SideRight from "./SideRight";
function App() {
  return (
    <div className="App">
      <div className="header">
        <NavBar />
      </div>
      <div className="mainBody">
        <SideBar />
        <Feeds />
        <SideRight />
      </div>
    </div>
  );
}

export default App;
