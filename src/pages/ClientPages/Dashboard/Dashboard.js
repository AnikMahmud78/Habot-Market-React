import React from "react";
import { Dropdown } from "react-bootstrap";
import "./ClientDashboard.css";

const status = [
  {
    id: "1",
    number: "06",
    tittle: "Total jobs posted",
    img: "https://i.ibb.co/QJDfc4K/Group-1000004438.png",
  },
  {
    id: "2",
    number: "123 AED",
    tittle: "Total amount spend",
    img: "https://i.ibb.co/Z8RxWMS/Group-1000004439.png",
  },
  {
    id: "3",
    number: "123",
    tittle: "Total Vendor contacted",
    img: "https://i.ibb.co/KVK9H8t/Group-1000004440.png",
  },
];
const jobs = [
  {
    id: "123456",
    applicants: "23",
    tittle: "Job Name",
    date: "12/12/2022",
    status: "Active",
  },
  {
    id: "67890",
    applicants: "70",
    tittle: "Job Name",
    date: "12/12/2022",
    status: "Active",
  },
  {
    id: "673901",
    applicants: "90",
    tittle: "Job Name",
    date: "12/12/2022",
    status: "Active",
  },
];
const transaction = [
  {
    img: "https://i.ibb.co/h9JQvG8/Group-2.png",
    title: "Service Name",
    id: "12345678",
    number: "+399",
    button: "Success",
  },
  {
    img: "https://i.ibb.co/Z20YDsH/Group-2-2.png",
    title: "Service Name",
    id: "1234346778",
    number: "+399",
    button: "Failed",
  },
  {
    img: "https://i.ibb.co/h9JQvG8/Group-2.png",
    title: "Service Name",
    id: "123450978",
    number: "+399",
    button: "Success",
  },
  {
    img: "https://i.ibb.co/Z20YDsH/Group-2-2.png",
    title: "Service Name",
    id: "123450978",
    number: "+399",
    button: "Failed",
  },
];
const Dashboard = () => {
  return (
    <div>
      <div className="dashboardContainer">
        <div className="dashboardContainerLeft">
          <div className="dashboardText">
            <h1>Hi,David</h1>
            <p>Welcome Back,</p>
          </div>
          <div className="statusFlex">
            {status.map((status) => (
              <>
                <div className="statusCard">
                  <div className="statusCardContainer">
                    <div className="statusCardText">
                      <h1>{status.number}</h1>
                      <p>{status.tittle}</p>
                    </div>
                    <div className="statusCardImg">
                      <img className="img-fluid" src={status.img} alt="" />
                    </div>
                  </div>
                </div>
              </>
            ))}
          </div>
          <div className="dashboardText">
            <div className="d-flex align-items-center justify-between px-3 my-3 w500">
              <h1>Job Posted</h1>
              <a href="">View All</a>
            </div>
            <div>
              {jobs.map((job) => (
                <>
                  <div className="jobPostedBox">
                    <div className="jobPostedHeader">
                      <h1>{job.tittle}</h1>
                      <p>
                        Job id <span>{job.id}</span>
                      </p>
                    </div>
                    <div className="jobPostedHeader">
                      <p>
                        Applicants <span>{job.applicants} </span>
                      </p>
                      <p>
                        Date Posted <span>{job.date}</span>
                      </p>
                    </div>
                    <div className="jobPostedHeader">
                      <p>
                        <span>Status</span>
                      </p>
                      <h2>{job.status}</h2>
                    </div>
                    <div>
                      <Dropdown>
                        <Dropdown.Toggle
                          className="dropdown"
                          variant=""
                          id="dropdown-basic"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-three-dots-vertical"
                            viewBox="0 0 16 16"
                          >
                            <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z" />
                          </svg>
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="dropdownMenu">
                          <Dropdown.Item href="#/action-1">
                            Action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-2">
                            Another action
                          </Dropdown.Item>
                          <Dropdown.Item href="#/action-3">
                            Something else
                          </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </div>
                  </div>
                </>
              ))}
            </div>
          </div>
        </div>
        <div className="paymentHistory">
          <h1>Payment History</h1>
          <div className="paymentHistoryContainer">
            <div className="transactionBox">
              <div className="d-flex align-items-center justify-between px-3 my-3">
                <h2>Last Transaction</h2>
                <a href="">View all</a>
              </div>
              <div className="transactionContainer">
                {transaction.map((transactions) => (
                  <>
                    <div className="transactionDetails">
                      <div className="d-flex align-items-center">
                        <img
                          className="transactionDetailsImg"
                          src={transactions.img}
                          alt=""
                        />
                        <div className="transactionDetailsText">
                          <h5>{transactions.title}</h5>
                          <p>{transactions.id}</p>
                        </div>
                      </div>
                      <div className="transactionDetailsText">
                        <h6>{transactions.number}</h6>
                        <div
                          className={
                            transactions.button === "Success"
                              ? "successTransaction"
                              : "failedTransaction"
                          }
                        >
                          {transactions.button}
                        </div>
                      </div>
                    </div>
                  </>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
