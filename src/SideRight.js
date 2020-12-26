import { IconButton } from "@material-ui/core";
import {
  AddRounded,
  MoreHorizRounded,
  RedeemRounded,
  SearchRounded,
  VideoCallRounded,
} from "@material-ui/icons";
import React from "react";
import Contacts from "./Contacts";
import "./SideRight.css";
function SideRight() {
  return (
    <div className="SideRight">
      <div className="sideRightTop">
        <p className="SideRightHeader">Birthdays</p>
        <div className="Birthdays">
          <RedeemRounded className="birthdayIcon" />
          <p>
            <b>Abhishek</b> and <b>Kartik</b> have their birthdays today.
          </p>
        </div>
      </div>
      <div className="sideRightContacts">
        <div className="contactHeader">
          <p>Contacts</p>
          <div className="contactIcons">
            <IconButton>
              <VideoCallRounded className="ContactIcon" />
            </IconButton>

            <IconButton>
              {" "}
              <SearchRounded className="ContactIcon" />
            </IconButton>

            <IconButton>
              <MoreHorizRounded className="ContactIcon" />
            </IconButton>
          </div>
        </div>
        <div className="contactInfos">
          <Contacts
            image="https://scontent.fixc1-4.fna.fbcdn.net/v/t1.0-9/123140178_1294527260891385_8705693447098395335_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=575d9iAys6kAX_dFjwE&_nc_ht=scontent.fixc1-4.fna&oh=c492f76de7cf70ac8f44fd6253f38e5e&oe=600D6996"
            name="Ashish Bhat"
          />
          <Contacts
            image="https://scontent.fixc1-4.fna.fbcdn.net/v/t1.0-9/123140178_1294527260891385_8705693447098395335_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=575d9iAys6kAX_dFjwE&_nc_ht=scontent.fixc1-4.fna&oh=c492f76de7cf70ac8f44fd6253f38e5e&oe=600D6996"
            name="Ashish Bhat"
          />
          <Contacts
            image="https://scontent.fixc1-4.fna.fbcdn.net/v/t1.0-9/123140178_1294527260891385_8705693447098395335_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=575d9iAys6kAX_dFjwE&_nc_ht=scontent.fixc1-4.fna&oh=c492f76de7cf70ac8f44fd6253f38e5e&oe=600D6996"
            name="Ashish Bhat"
          />
          <Contacts
            image="https://scontent.fixc1-4.fna.fbcdn.net/v/t1.0-9/123140178_1294527260891385_8705693447098395335_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=575d9iAys6kAX_dFjwE&_nc_ht=scontent.fixc1-4.fna&oh=c492f76de7cf70ac8f44fd6253f38e5e&oe=600D6996"
            name="Ashish Bhat"
          />
          <Contacts
            image="https://scontent.fixc1-4.fna.fbcdn.net/v/t1.0-9/123140178_1294527260891385_8705693447098395335_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=575d9iAys6kAX_dFjwE&_nc_ht=scontent.fixc1-4.fna&oh=c492f76de7cf70ac8f44fd6253f38e5e&oe=600D6996"
            name="Ashish Bhat"
          />
          <Contacts
            image="https://scontent.fixc1-4.fna.fbcdn.net/v/t1.0-9/123140178_1294527260891385_8705693447098395335_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=575d9iAys6kAX_dFjwE&_nc_ht=scontent.fixc1-4.fna&oh=c492f76de7cf70ac8f44fd6253f38e5e&oe=600D6996"
            name="Ashish Bhat"
          />
          <Contacts
            image="https://scontent.fixc1-4.fna.fbcdn.net/v/t1.0-9/123140178_1294527260891385_8705693447098395335_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=575d9iAys6kAX_dFjwE&_nc_ht=scontent.fixc1-4.fna&oh=c492f76de7cf70ac8f44fd6253f38e5e&oe=600D6996"
            name="Ashish Bhat"
          />
          <Contacts
            image="https://scontent.fixc1-4.fna.fbcdn.net/v/t1.0-9/123140178_1294527260891385_8705693447098395335_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=575d9iAys6kAX_dFjwE&_nc_ht=scontent.fixc1-4.fna&oh=c492f76de7cf70ac8f44fd6253f38e5e&oe=600D6996"
            name="Ashish Bhat"
          />
          <Contacts
            image="https://scontent.fixc1-4.fna.fbcdn.net/v/t1.0-9/123140178_1294527260891385_8705693447098395335_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=575d9iAys6kAX_dFjwE&_nc_ht=scontent.fixc1-4.fna&oh=c492f76de7cf70ac8f44fd6253f38e5e&oe=600D6996"
            name="Ashish Bhat"
          />
          <Contacts
            image="https://scontent.fixc1-4.fna.fbcdn.net/v/t1.0-9/123140178_1294527260891385_8705693447098395335_o.jpg?_nc_cat=109&ccb=2&_nc_sid=09cbfe&_nc_ohc=575d9iAys6kAX_dFjwE&_nc_ht=scontent.fixc1-4.fna&oh=c492f76de7cf70ac8f44fd6253f38e5e&oe=600D6996"
            name="Ashish Bhat"
          />
        </div>
        <div className="createVideoGroup">
          <p>Group Conversations</p>
          <div className="createnewgroup">
            <IconButton className="newVideoIcon">
              <AddRounded />
            </IconButton>
            <p>Create New Group</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SideRight;
