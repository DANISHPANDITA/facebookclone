import React, { useState, useEffect } from "react";
import "./Feeds.css";
import Stories from "./Stories";
import { Icon } from "@iconify/react";
import bxsRightArrowCircle from "@iconify-icons/bx/bxs-right-arrow-circle";
import { Avatar, IconButton } from "@material-ui/core";
import {
  AddToPhotosRounded,
  InsertEmoticonRounded,
  VideoCallRounded,
  SendRounded,
} from "@material-ui/icons";
import firebase from "firebase";
import bxsVideo from "@iconify-icons/bx/bxs-video";
import arrowRightCircle from "@iconify-icons/bi/arrow-right-circle";
import Post from "./Post";
import db, { storage } from "./firebase";
function Feeds() {
  const [input, setinput] = useState("");
  const [video, setvideo] = useState(null);
  const [photo, setphoto] = useState(null);
  const [progress, setprogress] = useState(0);
  const [Posts, setPosts] = useState([]);
  const [roomPeople, setroomPeople] = useState([]);
  const [stories, setstories] = useState([]);

  useEffect(() => {
    db.collection("facebook")
      .doc("111")
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) =>
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            post: doc.data(),
          }))
        )
      );
  }, []);

  useEffect(() => {
    db.collection("facebook")
      .doc("113")
      .collection("RoomPeople")
      .onSnapshot((snapshot) =>
        setroomPeople(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            room: doc.data(),
          }))
        )
      );
  }, []);

  useEffect(() => {
    db.collection("facebook")
      .doc("114")
      .collection("stories")
      .onSnapshot((snapshot) =>
        setstories(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            story: doc.data(),
          }))
        )
      );
  }, []);

  const handlePost = (e) => {
    e.preventDefault();
    if (photo) {
      const uploadTask = storage.ref(`photo/${photo}.name}`).put(photo);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + progress + "% done");
          setprogress(progress);
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
            default:
              console.log("..");
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            db.collection("facebook").doc("111").collection("posts").add({
              postText: input,
              name: "Danish",
              avatar:
                "https://scontent.fixc1-3.fna.fbcdn.net/v/t31.0-8/26678281_2124824987803851_8707096542290141456_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=e5o8hJdtXDMAX-NsImU&_nc_ht=scontent.fixc1-3.fna&oh=19e95387687adf9a518af1b508ee89c1&oe=60115F5C",
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              post: downloadURL,
            });
          });
        }
      );
      setinput("");
    } else if (video) {
      const uploadTask = storage.ref(`video/${video}.name}`).put(video);
      uploadTask.on(
        "state_changed",
        (snapshot) => {
          var progress = Math.floor(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          console.log("Upload is " + progress + "% done");
          setprogress(progress);
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED:
              console.log("Upload is paused");
              break;
            case firebase.storage.TaskState.RUNNING:
              console.log("Upload is running");
              break;
            default:
              console.log("..");
          }
        },
        (error) => {
          console.log(error);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            db.collection("facebook").doc("111").collection("posts").add({
              postText: input,
              name: "Danish Pandita",
              avatar:
                "https://scontent.fixc1-3.fna.fbcdn.net/v/t31.0-8/26678281_2124824987803851_8707096542290141456_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=e5o8hJdtXDMAX-NsImU&_nc_ht=scontent.fixc1-3.fna&oh=19e95387687adf9a518af1b508ee89c1&oe=60115F5C",
              timestamp: firebase.firestore.FieldValue.serverTimestamp(),
              post: downloadURL,
            });
          });
        }
      );
      setinput("");
    }
  };

  function buildVideoSelector() {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("accept", "video/mp4, video/mkv");
    return fileSelector;
  }

  const Selectvideo = (e) => {
    e.preventDefault();
    const fileSelector = buildVideoSelector();
    fileSelector.click();
    fileSelector.addEventListener("change", (event) => {
      const file = event.target.files[0];
      setvideo(file);
    });
  };
  function buildPhotoSelector() {
    const fileSelector = document.createElement("input");
    fileSelector.setAttribute("type", "file");
    fileSelector.setAttribute("accept", "image/jpg, image/png");
    return fileSelector;
  }

  const Selectphoto = (e) => {
    e.preventDefault();
    const fileSelector = buildPhotoSelector();
    fileSelector.click();
    fileSelector.addEventListener("change", (event) => {
      const file = event.target.files[0];
      setphoto(file);
    });
  };

  return (
    <div className="Feeds">
      <div className="feedsPart">
        <div className="stories">
          <Stories own />
          {stories.map(({ story, id }) => (
            <Stories
              key={id}
              avatar={story.avatar}
              storyImage={story.storyImage}
              name={story.name}
            />
          ))}

          <Icon
            className="moreStories"
            height="44px"
            color="white"
            icon={bxsRightArrowCircle}
          />
        </div>
        <div className="facebookWrite">
          <div className="writePart">
            <Avatar
              src="https://scontent.fixc1-3.fna.fbcdn.net/v/t31.0-8/26678281_2124824987803851_8707096542290141456_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=LBgCGKX_f2kAX_b8vbv&_nc_ht=scontent.fixc1-3.fna&oh=a269626d5b8c3f4ab40b6bca73c837be&oe=6009765C"
              alt=""
            />

            <input
              value={input}
              placeholder="What's on your Mind Happening"
              onChange={(e) => setinput(e.target.value)}
            />
            <IconButton>
              <SendRounded onClick={handlePost} />
            </IconButton>
          </div>
          <div className="fileInputs">
            <div className="fileinput">
              <VideoCallRounded className="fileInputIcon" />
              <p onClick={Selectvideo}>Choose Video</p>
            </div>
            <div className="fileinput">
              <AddToPhotosRounded className="fileInputIconPhoto" />
              <p onClick={Selectphoto}>Choose Photo</p>
            </div>
            <div className="fileinput">
              <InsertEmoticonRounded className="fileInputIconActivity" />
              <p>Feeling/Activity</p>
            </div>
          </div>
        </div>
        <div className="rooms">
          <div className="roomIcon">
            <Icon icon={bxsVideo} width="35px" height="30px" color="#AE49AE" />
            <p>Create Room</p>
          </div>
          {roomPeople.map(({ id, room }) => (
            <Avatar key={id} src={room.avatar} alt="" />
          ))}
          <Icon className="moreForRoom" icon={arrowRightCircle} width="40" />
        </div>
        <div className="posts">
          {Posts.map(({ id, post }) => (
            <Post
              className="post"
              key={id}
              post={post.post}
              name={post.name}
              avatar={post.avatar}
              timestamp={post.timestamp}
              postText={post.postText}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Feeds;
