import React from "react";
import "./Feeds.css";
import Stories from "./Stories";
import { Icon } from "@iconify/react";
import bxsRightArrowCircle from "@iconify-icons/bx/bxs-right-arrow-circle";
import { Avatar } from "@material-ui/core";
import {
  AddToPhotosRounded,
  InsertEmoticonRounded,
  VideoCallRounded,
} from "@material-ui/icons";
import bxsVideo from "@iconify-icons/bx/bxs-video";
import arrowRightCircle from "@iconify-icons/bi/arrow-right-circle";
import Post from "./Post";
function Feeds() {
  return (
    <div className="Feeds">
      <div className="feedsPart">
        <div className="stories">
          <Stories own />
          <Stories
            avatar="https://cdn.spacetelescope.org/archives/images/wallpaper2/heic2007a.jpg"
            storyImage="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
            name="Akshay"
          />
          <Stories
            avatar="https://images.pexels.com/photos/3551498/pexels-photo-3551498.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            storyImage="https://www.sciencenewsforstudents.org/wp-content/uploads/2020/12/121620_eg_covid-mink_feat-1030x580.jpg"
            name="Abhish Mathhew"
          />
          <Stories
            avatar="https://images.ctfassets.net/hrltx12pl8hq/yZsuq5HdBuUmYekaKiuUQ/5093caa3c5d6f00545e528cc4c0dc635/shutterstock_image__47_-min.jpg?fit=fill&w=368&h=207"
            storyImage="https://a0.muscache.com/im/pictures/52dc1c2e-5de9-442e-908f-4a1367f28319.jpg"
            name="Ronald Grecher"
          />
          <Stories
            avatar="https://www.ietravel.com/sites/iet/files/styles/panopoly_image_original/public/amazon-zafiro-sloth.jpg?t=1JTuZ5&itok=eyZbjTQB"
            storyImage="https://cdn.mos.cms.futurecdn.net/bViujGbYx3J4eRTDfPepqL-1200-80.jpg"
            name="Matt Affleck"
          />
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
            <input placeholder="What's on your Mind Happening" />
          </div>
          <div className="fileInputs">
            <div className="fileinput">
              <VideoCallRounded className="fileInputIcon" />
              <p>Live Video</p>
            </div>
            <div className="fileinput">
              <AddToPhotosRounded className="fileInputIconPhoto" />
              <p>Photo/Video</p>
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
          <Avatar
            src="https://cdn.vox-cdn.com/thumbor/GzQa3VMNyAITTPQU7ZYMfOjg6lQ=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19873983/GettyImages_137497593.jpg"
            alt=""
          />
          <Avatar
            src="https://i.insider.com/5f3fe11189aff80028ab71ff?width=700"
            alt=""
          />
          <Avatar
            src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/gettyimages-168504892-1568303467.png?crop=0.754xw:0.911xh;0.191xw,0.0454xh&resize=640:*"
            alt=""
          />
          <Avatar
            src="https://www.peta.org/wp-content/uploads/2017/03/iStock-157381164_freder.jpg"
            alt=""
          />
          <Avatar
            src="https://www.cdc.gov/coronavirus/2019-ncov/images/daily-life-coping/tiger-medium.JPG"
            alt=""
          />
          <Avatar
            src="https://publichealthmdc.com/images/dogpark%20cropped.jpg"
            alt=""
          />
          <Avatar
            src="https://animalequality.org/app/uploads/2015/10/web_header_14-2560x0-c-default.jpg"
            alt=""
          />
          <Avatar
            src="https://res-5.cloudinary.com/the-university-of-melbourne/image/upload/s--_spBNfzE--/c_fill,f_auto,h_600,q_75,w_900/v1/pursuit-uploads/009/ecd/14a/009ecd14a176aadfff8fcb2f8c8cec00e0baf9f7c17172e6ea16a0d8d787.jpg"
            alt=""
          />
          <Icon className="moreForRoom" icon={arrowRightCircle} width="40" />
        </div>
        <div className="posts">
          <Post
            className="post"
            avatar="https://scontent.fixc1-3.fna.fbcdn.net/v/t31.0-8/26678281_2124824987803851_8707096542290141456_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=LBgCGKX_f2kAX_b8vbv&_nc_ht=scontent.fixc1-3.fna&oh=a269626d5b8c3f4ab40b6bca73c837be&oe=6009765C"
            name="Danish Pandita"
            timestamp="3h"
            post="https://aldf.org/wp-content/uploads/2018/07/tiger-bars-911896_1920-1200x605.jpg"
            postText="Tiger Behind a Cage represents anything fierce can be taken down."
          />
          <Post
            className="post"
            avatar="https://scontent.fixc1-3.fna.fbcdn.net/v/t31.0-8/26678281_2124824987803851_8707096542290141456_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=LBgCGKX_f2kAX_b8vbv&_nc_ht=scontent.fixc1-3.fna&oh=a269626d5b8c3f4ab40b6bca73c837be&oe=6009765C"
            name="Danish Pandita"
            timestamp="3h"
            post="https://aldf.org/wp-content/uploads/2018/07/tiger-bars-911896_1920-1200x605.jpg"
            postText="Tiger Behind a Cage represents anything fierce can be taken down."
          />
        </div>
      </div>
    </div>
  );
}

export default Feeds;
