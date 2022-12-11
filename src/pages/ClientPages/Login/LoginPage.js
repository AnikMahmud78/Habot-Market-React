import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Cookies from "js-cookie";
import { Link, useNavigate } from "react-router-dom";
import "./LoginPage.css";
// import { signInWithPopup } from "firebase/auth";
// import { signInWithSocial } from "../../../firebase/firbase";

const LoginPage = () => {
  const [token, setToken] = useState();

  const Navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const signinHandler = (data) => {
    fetch(`${process.env.REACT_APP_BACKEND}${process.env.REACT_APP_LOGIN}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    })
      .then((response) => response.json())
      .then((data) => {
        setToken(data);

        const user = {
          is_vendor: data.is_vendor,
          is_client: data.is_client,
        };
        console.log(user);
        localStorage.setItem("user", JSON.stringify(user));

        Cookies.set("access", data.access);
        Cookies.set("refresh", data.refresh);

        if (data.is_vendor) {
          // console.log("abc");
          Navigate("/vendor-profile-dashboard");
        }
        if (data.is_client) {
          Navigate("/profile-dashboard");
        }
      })

      .catch((err) => {
        console.log(err);
      });
  };
  console.log(token);

  // const googlePopUpHandler ={
  //   async () => {
  //     const user = await signInWithSocial();

  //     console.log(user);
  //     fetch(
  //       `${process.env.REACT_APP_BACKEND}${process.env.REACT_APP_LOGIN}`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({ email: user.email }),
  //       }
  //     )
  //       .then((response) => response.json())
  //       .then((data) => {
  //         setToken(data);

  //         const user = {
  //           ...data.is_vendor,
  //           ...data.is_client,
  //         };

  //         localStorage.setItem("user", user);

  //         Cookies.set("access", data.access);
  //         Cookies.set("refresh", data.refresh);

  //         if (data.is_vendor) {
  //           // console.log("abc");
  //           Navigate("/vendor-profile-dashboard");
  //         }
  //         if (data.is_client) {
  //           Navigate("/profile-dashboard");
  //         }
  //       })

  //       .catch((err) => {
  //         console.log(err);
  //       });
  //   }
  // }

  return (
    <div>
      <div className="loginForm">
        <div className="loginFormFirstContainer">
          <img
            className="img-fluid"
            src="https://i.ibb.co/p0gFDqD/Rectangle-1.png"
            alt=""
          />
          <div className="floatingText">
            <h1>
              Turn your ideas <br /> into reality
            </h1>
            <p>Start for free and get attractive offers from the community</p>
          </div>
        </div>
        <div className="loginFormSecondContainer">
          <h1>Welcome to Habot !</h1>
          <p>Welcome back! Please enter your details.</p>
          <button
            // onClick={}
            className="d-flex mx-auto loginFormSecondContainerBtn"
          >
            <svg
              className="me-2"
              width="25"
              height="25"
              viewBox="0 0 25 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_47_514)">
                <path
                  d="M24.266 10.148H23.3V10.1H12.5V14.9H19.28C18.29 17.696 15.632 19.7 12.5 19.7C8.522 19.7 5.3 16.478 5.3 12.5C5.3 8.522 8.522 5.3 12.5 5.3C14.336 5.3 16.004 5.99 17.276 7.124L20.672 3.728C18.53 1.73 15.662 0.5 12.5 0.5C5.87 0.5 0.5 5.87 0.5 12.5C0.5 19.13 5.87 24.5 12.5 24.5C19.13 24.5 24.5 19.124 24.5 12.5C24.5 11.696 24.416 10.91 24.266 10.148Z"
                  fill="#FFC107"
                />
                <path
                  d="M1.88599 6.914L5.82799 9.806C6.89599 7.166 9.47599 5.3 12.5 5.3C14.336 5.3 16.004 5.99 17.276 7.124L20.672 3.728C18.53 1.73 15.662 0.5 12.5 0.5C7.89199 0.5 3.89599 3.104 1.88599 6.914Z"
                  fill="#FF3D00"
                />
                <path
                  d="M12.5001 24.5C15.6021 24.5 18.4161 23.312 20.5461 21.386L16.8321 18.242C15.6261 19.154 14.1321 19.7 12.5001 19.7C9.38007 19.7 6.72807 17.708 5.73207 14.93L1.82007 17.948C3.80607 21.836 7.83807 24.5 12.5001 24.5Z"
                  fill="#4CAF50"
                />
                <path
                  d="M24.266 10.148H23.3V10.1H12.5V14.9H19.28C18.806 16.244 17.942 17.402 16.826 18.242L20.54 21.386C20.276 21.626 24.494 18.5 24.494 12.5C24.494 11.696 24.41 10.91 24.26 10.148H24.266Z"
                  fill="#1976D2"
                />
              </g>
              <defs>
                <clipPath id="clip0_47_514">
                  <rect
                    width="24"
                    height="24"
                    fill="white"
                    transform="translate(0.5 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
            Log in with Google
          </button>
          <form onSubmit={handleSubmit(signinHandler)}>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div className="break"></div>
              <div>
                <h3 className=" mx-2 breakText">or</h3>
              </div>
              <div className="break"></div>
            </div>
            <div className="loginInput">
              <input
                className="signin-email"
                type="text"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <input
                className="signin-password"
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            <div className="rememberForgot">
              <div>
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    value=""
                    id="flexCheckDefault"
                  />
                  <label className="form-check-label" for="flexCheckDefault">
                    Remember for 30 days
                  </label>
                </div>
              </div>
              <Link
                to="/forgot-password "
                className="text-decoration-underline ms-2 forgotPassword"
              >
                Forgot Password
              </Link>
            </div>
            <div className="loginBtnSecondary">
              <button type="submit" className="signin-btn-submit">
                Log in
              </button>
            </div>
            <div className="signUpFree">
              <Link to="client-signup">Don’t have an account?</Link>
              <Link
                to="client-signup"
                className="text-decoration-underline ms-2"
              >
                Sign up for free
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
