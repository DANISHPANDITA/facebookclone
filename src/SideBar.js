import { Avatar } from "@material-ui/core";
import React from "react";
import "./SideBar.css";
import SideBarOption from "./SideBarOption";
import userFriends from "@iconify-icons/fa-solid/user-friends";
import roundGroups from "@iconify-icons/ic/round-groups";
import storeIcon from "@iconify-icons/dashicons/store";
import squareplayIcon from "@iconify-icons/whh/squareplay";
import calenderIcon from "@iconify-icons/uil/calender";
import clockIcon from "@iconify-icons/grommet-icons/clock";
import bxsBookmark from "@iconify-icons/bx/bxs-bookmark";
import arrowDownAlt2 from "@iconify-icons/dashicons/arrow-down-alt2";
function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarUpper">
        <div className="sidebarItems">
          <div className="avatarItem">
            <Avatar
              src="https://scontent.fixc1-3.fna.fbcdn.net/v/t31.0-8/26678281_2124824987803851_8707096542290141456_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=LBgCGKX_f2kAX82qr5Z&_nc_ht=scontent.fixc1-3.fna&oh=7cc6a4f85d1474af505e925523336eb3&oe=6009765C"
              alt=""
            />
            <h5 className="name">Danish Pandita</h5>
          </div>
        </div>
        <SideBarOption icon={userFriends} text="Friends" />
        <SideBarOption icon={roundGroups} text="Groups" />
        <SideBarOption icon={storeIcon} text="Marketplace" />
        <SideBarOption icon={squareplayIcon} text="Marketplace" />
        <SideBarOption icon={calenderIcon} text="Events" />
        <SideBarOption icon={clockIcon} text="Memories" />
        <SideBarOption icon={bxsBookmark} text="Memories" />
        <SideBarOption icon={arrowDownAlt2} text="More Options" />
      </div>
      <div className="sidebarFooter"></div>
    </div>
  );
}

export default SideBar;
