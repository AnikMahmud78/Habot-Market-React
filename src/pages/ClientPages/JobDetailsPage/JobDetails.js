import React from "react";
import { Link } from "react-router-dom";
import ClientNav from "../../../components/ClientNavbar/ClientNav";
import JobDetailsForm from "../../../components/JobDetailsForm/JobDetailsForm";

import "./JobDetails.css";

const JobDetails = () => {
  return (
    <div>
      <ClientNav />
      <div className="jobDetailsHeader">
        <h1>Give details of the job</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </h2>
      </div>
      <img
        className="mx-auto"
        src="https://i.ibb.co/pzFQYSx/Group-7074.png"
        alt=""
      />
      <JobDetailsForm />
      <div className="text-center">
        <Link to="/job-review">
          <button className="proceedBtn">Proceed</button>
        </Link>
      </div>
    </div>
  );
};

export default JobDetails;
