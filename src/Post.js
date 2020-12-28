import { Avatar, IconButton } from "@material-ui/core";
import {
  ChatBubbleRounded,
  MoreHorizRounded,
  ShareRounded,
  ThumbUpAltRounded,
} from "@material-ui/icons";
import React from "react";
import "./Post.css";
import ReactPlayer from "react-player";

function Post({ avatar, name, post, timestamp, postText }) {
  if (post.includes("photo")) {
    return (
      <div className="post">
        <div className="postHeader">
          <div className="leftHeader">
            <Avatar className="postAvatar" src={avatar} alt="" />
            <div className="postGiver">
              <h3 className="nameofMan">{name}</h3>
              <p className="timestamp">
                {new Date(timestamp?.toDate()).toTimeString().slice(0, 8)}
                .🌐
              </p>
            </div>
          </div>
          <div className="rightHeader">
            <IconButton>
              <MoreHorizRounded />
            </IconButton>
          </div>
        </div>
        <p className="text">{postText}</p>
        <img src={post} alt="" />
        <div className="postFooter">
          <div className="footerIcon">
            <ThumbUpAltRounded />
            <p>Like</p>
          </div>
          <div className="footerIcon">
            <ChatBubbleRounded />
            <p>Comment</p>
          </div>
          <div className="footerIcon">
            <ShareRounded />
            <p>Share</p>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className="post">
        <div className="postHeader">
          <div className="leftHeader">
            <Avatar className="postAvatar" src={avatar} alt="" />
            <div className="postGiver">
              <h3 className="nameofMan">{name}</h3>
              <p className="timestamp">
                {new Date(timestamp?.toDate()).toTimeString().slice(0, 8)}
                .🌐
              </p>
            </div>
          </div>
          <div className="rightHeader">
            <IconButton>
              <MoreHorizRounded />
            </IconButton>
          </div>
        </div>
        <p className="text">{postText}</p>
        <ReactPlayer controls="true" url={post} />
        <div className="postFooter">
          <div className="footerIcon">
            <ThumbUpAltRounded />
            <p>Like</p>
          </div>
          <div className="footerIcon">
            <ChatBubbleRounded />
            <p>Comment</p>
          </div>
          <div className="footerIcon">
            <ShareRounded />
            <p>Share</p>
          </div>
        </div>
      </div>
    );
  }
}
export default Post;
