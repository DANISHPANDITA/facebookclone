import React from "react";
import "./SideBarOption.css";
import { Icon } from "@iconify/react";
function SideBarOption({ icon, text }) {
  return (
    <div className="SideBarOption">
      <Icon icon={icon} className="optionIcon" color="#1B86E9" height="28px" />
      <h4 className="OptionName">{text}</h4>
    </div>
  );
}

export default SideBarOption;
