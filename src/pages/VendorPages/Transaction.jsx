import svg from "./img/checked (4) 1.png";
import React, { useEffect, useState } from "react";
import axios from "axios";
const Transaction = () => {
  const [vendorTransaction, setvendorTransaction] = useState();
  // console.log(data);
  useEffect(() => {
    axios.get(`https://habot.io/payments/payment-history/`).then(
      (response) => {
        setvendorTransaction(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);
  console.log(vendorTransaction);
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
          <span className="date">
            14 NOV 2022
            {/* {vendorTransaction?.results[0].timestamp} */}
          </span>
          <span className="time">
            10:34 AM PAID
            {/* {vendorTransaction?.results[0].timestamp} */}{" "}
          </span>
          <span className="paid-payment">
            20AED
            {/* {vendorTransaction?.results[0].amount} */}{" "}
            {/* {vendorTransaction?.results[0].currency} */}
          </span>
        </div>
      </div>
    </>
  );
};
export default Transaction;
