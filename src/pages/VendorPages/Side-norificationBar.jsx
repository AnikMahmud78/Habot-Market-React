import { NavLink } from "react-router-dom";
import React from "react";
const SideNotificationBar = () => {
  return (
    <>
      <div className="side-bar">
        <div className="title">Notification</div>
        <NavLink to="/notification" className="drop-convo">
          <div className="sender-img"></div>
          <div className="sender-info">
            <p className="note">
              client name has started a conversation for your proposals.
            </p>
            <span className="time">12 minutes ago</span>
          </div>
        </NavLink>
      </div>
    </>
  );
};
export default SideNotificationBar;
