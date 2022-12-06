import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import React from "react";
import Avatar from "./img/Initials.png";
import Dots from "./img/Vector (1).png";
import "/node_modules/bootstrap/dist/css/bootstrap.min.css";
import "/node_modules/bootstrap/dist/js/bootstrap.bundle.min";
const NotificationPage = () => {
  const [first, setfirst] = useState(true);
  const [second, setsecond] = useState(false);
  const [third, setthird] = useState(false);

  const firstClick = () => {
    setfirst(true);
    setsecond(false);
    setthird(false);
  };
  const secondClick = () => {
    setsecond(true);
    setfirst(false);
    setthird(false);
  };
  const thirdClick = () => {
    setthird(true);
    setsecond(false);
    setfirst(false);
  };

  useEffect(() => {
    function fetchData() {
      fetch(
        `${process.env.REACT_APP_BACKEND}${process.env.REACT_APP_NOTIFICATIONS}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    fetchData();
  }, []);

  return (
    <>
      <div className="notification-card">
        <div className="notification-header">
          <span>Notifications</span>
          <div className="update-btns">
            <button
              className={`Btn ${first ? "active" : "inactive"}`}
              onClick={firstClick}
            >
              Recent
            </button>
            <button
              className={`Btn ${second ? "active" : "inactive"}`}
              onClick={secondClick}
            >
              Read
            </button>
            <button
              className={`Btn ${third ? "active" : "inactive"}`}
              onClick={thirdClick}
            >
              Unread
            </button>
          </div>
        </div>
        <div className="msg-thrown active">
          <div className="left-area">
            <img className="client-img" src={Avatar} alt="Client-img" />
            <div className="msg-bar">
              <p className="detail">
                Client name has started a conversation for your proposal. lorem
                ipsum loem ipsum lorem ipsum loem ipsum
              </p>
              <span className="time">12 minutes ago</span>
            </div>
          </div>
          <div className="right-area">
            <div className="dropdown">
              <img
                className="dropdown-toggle"
                src={Dots}
                alt="click-down"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
              ></img>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="msg-thrown">
          <div className="left-area">
            <img className="client-img" src={Avatar} alt="Client-img" />
            <div className="msg-bar">
              <p className="detail">
                Client name has started a conversation for your proposal. lorem
                ipsum loem ipsum lorem ipsum loem ipsum
              </p>
              <span className="time">12 minutes ago</span>
            </div>
          </div>
          <div className="right-area">
            <div className="dropdown">
              <img
                className="dropdown-toggle"
                src={Dots}
                alt="click-down"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
              ></img>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="msg-thrown">
          <div className="left-area">
            <img className="client-img" src={Avatar} alt="Client-img" />
            <div className="msg-bar">
              <p className="detail">
                Client name has started a conversation for your proposal. lorem
                ipsum loem ipsum lorem ipsum loem ipsum
              </p>
              <span className="time">12 minutes ago</span>
            </div>
          </div>
          <div className="right-area">
            <div className="dropdown">
              <img
                className="dropdown-toggle"
                src={Dots}
                alt="click-down"
                type="button"
                id="dropdownMenuButton1"
                data-bs-toggle="dropdown"
              ></img>
              <ul
                className="dropdown-menu"
                aria-labelledby="dropdownMenuButton1"
              >
                <li>
                  <Link className="dropdown-item" to="/">
                    Action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Another action
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item" to="/">
                    Something else here
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default NotificationPage;
