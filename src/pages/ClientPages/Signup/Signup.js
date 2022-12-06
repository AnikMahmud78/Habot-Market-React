import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const signupHandler = (data) => {
    fetch(`https://habot.io/accounts/sign-up/`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        full_name: data.full_name,
        email: data.email,
        phone_number: data.phone_number,
        password: data.password,
        password2: data.password,
        is_client: true,
        is_vendor: false,
      }),
    })
      .then((response) => {
        console.log(response.json());
        if (response.ok) {
          alert("Success");
          navigate(`/otp-page`);
        }
      })
      // .then((data) => {
      //   console.log(data);
      //   alert(Object.values(data)[0]);
      // })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(signupHandler)}>
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
              type="button"
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
              Sign up with Google
            </button>
            <div className="d-flex align-items-center justify-content-center mt-4">
              <div className="break"></div>
              <div>
                <h3 className=" mx-2 breakText">or</h3>
              </div>
              <div className="break"></div>
            </div>
            <div className="loginInput">
              <input
                type="text"
                placeholder="Full Name"
                {...register("full_name", { required: true })}
              />
              <input
                type="email"
                placeholder="Email"
                {...register("email", { required: true })}
              />
              <input
                type="text"
                placeholder="Phone Number"
                {...register("phone_number", { required: true })}
              />
              <input
                type="password"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </div>
            {/* <div className="rememberForgot">
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
                to="forgot-password "
                className="text-decoration-underline ms-2 forgotPassword"
              >
                Forgot Password
              </Link>
            </div> */}
            <div className="loginBtnSecondary">
              <button type="submit">Sign up</button>
            </div>
            <div className="signUpFree">
              <Link to="/client-login">Already have an account?</Link>
              <Link
                to="/client-login"
                className="text-decoration-underline ms-2"
              >
                Log in here
              </Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Signup;
