import { Avatar } from "@material-ui/core";
import React from "react";
import "./Contacts.css";
function Contacts({ image, name }) {
  return (
    <div className="contact">
      <Avatar src={image} alt="" />
      <p>{name}</p>
    </div>
  );
}

export default Contacts;
