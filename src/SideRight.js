import { IconButton } from "@material-ui/core";
import {
  AddRounded,
  MoreHorizRounded,
  RedeemRounded,
  SearchRounded,
  VideoCallRounded,
} from "@material-ui/icons";
import React, { useState, useEffect } from "react";
import Contacts from "./Contacts";
import db from "./firebase";
import "./SideRight.css";
function SideRight() {
  const [contacts, setcontacts] = useState([]);

  useEffect(() => {
    db.collection("facebook")
      .doc("112")
      .collection("contacts")
      .onSnapshot((snapshot) =>
        setcontacts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            contact: doc.data(),
          }))
        )
      );
  }, []);

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
          {contacts.map(({ contact, id }) => (
            <Contacts key={id} image={contact.image} name={contact.name} />
          ))}
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
