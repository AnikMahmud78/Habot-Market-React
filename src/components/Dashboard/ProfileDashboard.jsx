import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import Footer from "../Layout/Footer";
import NavBar from "../ClientNavbar/ClientNav";
import smsIco from "../Dashboard/Asset/sms.png";
import "./Dashboard.css";
import axios from "axios";
const ProfileDashboard = () => {
  const [clientProfile, setClientProfile] = useState();
  const [jobDetails, setJobDetails] = useState();
  useEffect(() => {
    axios.get("https://habot.io/accounts/client-profile/").then(
      (response) => {
        setClientProfile(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  // console.log(clientProfile);
  useEffect(() => {
    axios.get("https://habot.io/jobs/posted-jobs-list/").then(
      (response) => {
        setJobDetails(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  console.log(jobDetails);
  // console.log(jobDetails);
  // const { full_name, phone_number, profile_photo, country, address } =
  //   clientProfile;

  return (
    <div>
      <NavBar />
      {/* ----------job section// 
            -------------------------------------*/}
      <div className="job-profile-container px-md-5 py-5 px-2">
        <div className="job-section me-md-4">
          <p className="fs-4 fw-semibold pb-4">Posted Jobs</p>
          <Card>
            <div className="px-6 pt-3 d-flex justify-content-between">
              <p className="mb-3">
                {jobDetails?.results[0]?.category_info.name}
              </p>
              <small className="post-time">Posted 1 hours ago</small>
            </div>
            <hr className="m-0" />
            <div className="px-4 pt-2">
              <p className="fs-4 fw-semibold m-0">
                {jobDetails?.results[0]?.name}
              </p>
              <p className="w-75 m-0">{jobDetails?.results[0]?.description}</p>
            </div>
            <hr />
            <div className="px-4 d-flex justify-content-between">
              {jobDetails?.results[2]?.is_complete ? (
                <p className="completed">Completed</p>
              ) : (
                <p className="inprogress">In Progress</p>
              )}
              <button className="View-job-button">View Job</button>
            </div>
          </Card>

          <Card className="mt-5">
            <div className="px-4 pt-3 d-flex justify-content-between">
              <p> {jobDetails?.results[1]?.category_info.name}</p>
              <small className="post-time">Posted 1 hours ago</small>
            </div>
            <hr className="m-0" />
            <div className="px-4 pt-2">
              <p className="fs-4 fw-semibold m-0">
                {jobDetails?.results[1]?.name}
              </p>
              <p className="w-75 m-0">{jobDetails?.results[1]?.description}</p>
            </div>
            <hr />
            <div className="px-4 d-flex justify-content-between">
              {jobDetails?.results[1]?.is_complete ? (
                <p className="completed">Completed</p>
              ) : (
                <p className="inprogress">In Progress</p>
              )}
              <button className="View-job-button">View Job</button>
            </div>
          </Card>
        </div>

        {/* -----------------------profile//
                ---------------------------------------------- */}
        <div className="profile-section ms-lg-5 ms-0">
          <Card>
            <div className="profileDash">
              <button className="edit-ico">
                <i class="fa-regular fa-pen-to-square "></i>
              </button>
              <div className="avater"></div>
              <p className="fs-4 fw-semibold mt-4 m-0">
                {clientProfile?.full_name}
              </p>
              <a
                href="mailto:alent@varal.com"
                className="text-dark fw-thin mt-2"
              >
                clent@varal.com
              </a>
              <small className="mt-3 mb-4">{clientProfile?.phone_number}</small>
            </div>
            <hr />
            <div className="pair-btns">
              <NavLink to="/message">
                <button className="pair-btn-message">
                  <img src={smsIco} alt="" /> Messages
                </button>
              </NavLink>
              <NavLink to="/jobPage">
                <button className="pair-btn-postJob">Post Jobs</button>
              </NavLink>
            </div>
            <hr />
            <div className="transaction-history">
              <p className="fs-4 fw-semibold my-2">Transaction History</p>
              <Card className="m-4 ">
                <div className="transaction-card">
                  <i class="fa-solid fa-circle-check check-ico"></i>
                  <div className="">
                    <span className="job-title">Job Title</span> <br />
                    <small className="time-text">3:00 AM 12/12/2022</small>
                  </div>
                  <p className="history-aed">42 AED</p>
                </div>
              </Card>
              <Card className="m-4 ">
                <div className="transaction-card">
                  <i class="fa-solid fa-circle-check check-ico"></i>
                  <div className="">
                    <span className="job-title">Job Title</span> <br />
                    <small className="time-text">3:00 AM 12/12/2022</small>
                  </div>
                  <p className="history-aed">42 AED</p>
                </div>
              </Card>
              <Card className="m-4 ">
                <div className="transaction-card">
                  <i class="fa-solid fa-circle-check check-ico"></i>
                  <div className="">
                    <span className="job-title">Job Title</span> <br />
                    <small className="time-text">3:00 AM 12/12/2022</small>
                  </div>
                  <p className="history-aed">42 AED</p>
                </div>
              </Card>
              <Card className="m-4 ">
                <div className="transaction-card">
                  <i class="fa-solid fa-circle-check check-ico"></i>
                  <div className="">
                    <span className="job-title">Job Title</span> <br />
                    <small className="time-text">3:00 AM 12/12/2022</small>
                  </div>
                  <p className="history-aed">42 AED</p>
                </div>
              </Card>
            </div>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProfileDashboard;
