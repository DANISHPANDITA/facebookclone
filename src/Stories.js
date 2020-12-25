import { Avatar } from "@material-ui/core";
import React from "react";
import "./Stories.css";

function Stories({ own, avatar, storyImage, name }) {
  return (
    <div className={`story ${own && "story--own"} `}>
      {own ? (
        <div className="story--own">
          <img
            src="https://scontent.fixc1-3.fna.fbcdn.net/v/t31.0-8/26678281_2124824987803851_8707096542290141456_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=LBgCGKX_f2kAX_b8vbv&_nc_ht=scontent.fixc1-3.fna&oh=a269626d5b8c3f4ab40b6bca73c837be&oe=6009765C"
            alt=""
          />
          <p>Create a Story</p>
        </div>
      ) : (
        <div className="story">
          <Avatar className="storyAvatar" src={avatar} alt="" />
          <img src={storyImage} alt="" />
          <p>{name}</p>
        </div>
      )}
    </div>
  );
}

export default Stories;
