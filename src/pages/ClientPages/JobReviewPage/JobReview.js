import React from "react";
import { Link } from "react-router-dom";
import JobReviewDetails from "../../../components/JobReviewDetails/JobReviewDetails";
import "./JobReview.css";

const JobReview = () => {
  return (
    <div>
      <div className="jobDetailsHeader">
        <h1>Review Page</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </h2>
      </div>

      <img
        className="mx-auto"
        src="https://i.ibb.co/R0VphFb/Group-7072.png"
        alt=""
      />
      <JobReviewDetails />
      <div className="backBtnBox">
        <Link to="/job-details">
          <div className="backBtn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 22L0 12L10 2L11.4 3.425L2.825 12L11.4 20.575L10 22Z"
                fill="black"
              />
            </svg>
            <h1>Back to previous page</h1>
          </div>
        </Link>
        <Link to="/job-post-success">
          <button className="proceedBtn">Pay & Post Job</button>
        </Link>
      </div>
    </div>
  );
};

export default JobReview;
