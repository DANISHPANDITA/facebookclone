import { Avatar, IconButton } from "@material-ui/core";
import {
  AddRounded,
  ArrowDropDownRounded,
  Facebook,
  HomeRounded,
  NotificationsRounded,
  OndemandVideoRounded,
  SearchRounded,
  SportsEsportsRounded,
  StorefrontRounded,
  SupervisedUserCircleRounded,
} from "@material-ui/icons";
import React from "react";
import "./NavBar.css";
import { Icon, InlineIcon } from "@iconify/react";
import facebookMessenger from "@iconify-icons/mdi/facebook-messenger";
function NavBar() {
  return (
    <div className="Navbar">
      <div className="navItems">
        <div className="leftItems">
          <Facebook className="fbLogo" />
          <div className="input">
            <SearchRounded className="SearchIcon" />
            <input className="searchInput" placeholder="Search Facebook" />
          </div>
        </div>
        <div className="centerItems">
          <HomeRounded className=" centerItem centerItem--active" />
          <OndemandVideoRounded className="centerItem" />
          <StorefrontRounded className="centerItem" />
          <SupervisedUserCircleRounded className="centerItem" />
          <SportsEsportsRounded className="centerItem" />
        </div>
        <div className="rightItems">
          <Avatar
            src="https://scontent.fixc1-3.fna.fbcdn.net/v/t31.0-8/26678281_2124824987803851_8707096542290141456_o.jpg?_nc_cat=103&ccb=2&_nc_sid=09cbfe&_nc_ohc=LBgCGKX_f2kAX82qr5Z&_nc_ht=scontent.fixc1-3.fna&oh=7cc6a4f85d1474af505e925523336eb3&oe=6009765C"
            alt=""
          />
          <h5 className="UserName">Danish</h5>
          <IconButton>
            <AddRounded />
          </IconButton>

          <IconButton>
            {" "}
            <Icon icon={facebookMessenger} />
          </IconButton>

          <IconButton>
            <NotificationsRounded />
          </IconButton>
          <IconButton>
            <ArrowDropDownRounded />
          </IconButton>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
