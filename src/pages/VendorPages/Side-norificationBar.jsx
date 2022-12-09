import { NavLink } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";
const SideNotificationBar = () => {
  const [vendorNotification, setVendorNotification] = useState();
  // console.log(data);
  useEffect(() => {
    axios.get(`https://habot.io/jobs/notifications/`).then(
      (response) => {
        setVendorNotification(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  // console.log(vendorNotification?.results[0].title);
  return (
    <>
      <div className="side-bar">
        <div className="title">Notification</div>
        <NavLink to="/notification" className="drop-convo">
          <div className="sender-img"></div>
          <div className="sender-info">
            <p className="note">{vendorNotification?.results[0].title}</p>
            <span className="time">
              {vendorNotification?.results[0].created}
            </span>
          </div>
        </NavLink>
      </div>
    </>
  );
};
export default SideNotificationBar;
