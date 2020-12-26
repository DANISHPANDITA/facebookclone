import { IconButton } from "@material-ui/core";
import { EditRounded } from "@material-ui/icons";
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
      <div className="addMessageBtn">
        <IconButton className="addmessage">
          <EditRounded className="addMessage" />
        </IconButton>
      </div>
    </div>
  );
}

export default App;
