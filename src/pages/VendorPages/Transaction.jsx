import svg from "./img/checked (4) 1.png";
import React from "react";
const Transaction = () => {
  return (
    <>
      <div className="transaction-area">
        <div className="left-area">
          <span className="checked">
            <img src={svg} alt="check"></img>
          </span>
          <div className="checked-details">
            <div className="job-title">Job Headline Demo</div>
            <div className="mute-text">Client Name</div>
          </div>
        </div>
        <div className="right-area">
          <span className="date">14 NOV 2022</span>
          <span className="time">10:34 AM PAID</span>
          <span className="paid-payment">3 AED</span>
        </div>
      </div>
    </>
  );
};
export default Transaction;
