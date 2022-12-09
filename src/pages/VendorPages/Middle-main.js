import "./style-file/style.css";
import { useEffect, useState } from "react";
import VendorContainer from "./Vendor-identity";
import SideNotificationBar from "./Side-norificationBar";
import JobHeadline from "./Job-headline";
import Transaction from "./Transaction";
import filterImg from "./img/filter 1.png";
import React from "react";
import axios from "axios";
// import { useContext } from "react";
// import { AuthContext } from "../../AuthContext/AuthContextProvider";
import ClientNav from "../../components/ClientNavbar/ClientNav";

const MiddleContent = () => {
  // const data = useContext(AuthContext);
  const [clicked, setclicked] = useState(false);
  const [reclick, setreclick] = useState(true);
  const [vendorProfile, setVendorProfile] = useState();
  // console.log(data);
  useEffect(() => {
    axios.get(`https://habot.io/accounts/vendor-profile/`).then(
      (response) => {
        setVendorProfile(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  // console.log(vendorProfile);

  const clickEvent = () => {
    setclicked(true);
    setreclick(false);
  };
  const clickBack = () => {
    setreclick(true);
    setclicked(false);
  };
  return (
    <>
      <ClientNav />
      <div className="parent_content">
        <div className="pad-wrapper">
          <div className="content">
            <div className="Main_card">
              <VendorContainer
                vendorProfile={vendorProfile}
                click={clickEvent}
                clickBack={clickBack}
                clicked={clicked}
                reclick={reclick}
              />
            </div>
            <div className="right-notificationBar">
              <SideNotificationBar />
            </div>
            <div className="linked">
              <div className={`applied-jobs ${reclick ? "d-block" : "d-none"}`}>
                <JobHeadline />
                <JobHeadline />
              </div>
              <div className={`transaction ${clicked ? "d-block" : "d-none"}`}>
                <div className="filter">
                  <span className="filter-text">Filter</span>
                  <img className="filter-img" src={filterImg} alt="img"></img>
                </div>
                <Transaction />
                <Transaction />
                <Transaction />
                <Transaction />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default MiddleContent;
