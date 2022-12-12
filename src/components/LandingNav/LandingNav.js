import axios from "axios";
import Cookies from "js-cookie";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import "./LandingNav.css";

const LandingNav = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("user")));
  }, [user]);
  const handleLogout = () => {
    const token = Cookies.get("refresh");

    const obj = {
      refresh_token: token,
    };
    // console.log(obj);
    // axios
    //   .post("https://habot.io/accounts/logout", obj)
    //   .then((response) => {
    //     console.log(response.data);
    //      localStorage.removeItem("user");
    // Cookies.remove("refresh");
    // Cookies.remove("access");
    //   })

    //   .catch((err) => console.log(err));
    localStorage.removeItem("user");
    Cookies.remove("refresh");
    Cookies.remove("access");
    toast.success("Log out Successful");
  };
  const loggedUser = JSON.parse(localStorage.getItem("user"));
  console.log(loggedUser?.is_vendor);

  return (
    <div>
      <ToastContainer></ToastContainer>
      <Navbar expand="lg" className="customNavLanding" id="clientNav">
        <Container fluid>
          <div className="landingLogo ">
            {/* <h4>HABOT</h4> */}
            <Link to="/">
              <img
                className=""
                src="https://i.ibb.co/3NBR2Qy/logo-transparent-white-2.png"
                alt=""
              />
            </Link>
          </div>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "150px" }}
              navbarScroll
            ></Nav>
            <div className="navFlexLanding">
              {/* <Link to="" className="navLink">
                How it works ?
              </Link> */}
              {user && (
                <Link
                  to={
                    loggedUser?.is_vendor
                      ? "./vendor-profile-dashboard"
                      : "./profile-dashboard"
                  }
                  className="navLink"
                >
                  Dashboard
                </Link>
              )}
              <a className="navLink" href="#becamePartner">
                Become a partner
              </a>
              <Link to="" className="navLink">
                <svg
                  className="me-2"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 15V3M12 15L8 11M12 15L16 11M2 17L2.621 19.485C2.72915 19.9177 2.97882 20.3018 3.33033 20.5763C3.68184 20.8508 4.11501 20.9999 4.561 21H19.439C19.885 20.9999 20.3182 20.8508 20.6697 20.5763C21.0212 20.3018 21.2708 19.9177 21.379 19.485L22 17"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
                Download App
              </Link>
            </div>
            {user ? (
              <button onClick={handleLogout} className="loginBtn">
                Log out
              </button>
            ) : (
              <Link to="/client-login">
                <button className="loginBtn">Log in / Sign up</button>
              </Link>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default LandingNav;
