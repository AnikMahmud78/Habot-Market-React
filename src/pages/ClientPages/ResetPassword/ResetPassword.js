import React from "react";

const ResetPassword = () => {
  return (
    <div>
      <div className="container border mt-4 ">
        <h3 className="text-center">
          <i class="fa fa-lock fa-4x"></i>
        </h3>
        <h1 className="text-center text-primaryDark">Reset Password</h1>
        <p className="text-center text-purple-600">Reset Your Password</p>
        <div className="">
          <p>
            Enter New Password <span className="text-red-600">*</span>
          </p>
          <input
            className="form-control"
            type="password"
            placeholder="New Password"
            required
          />
          <p>
            Confirm Password<span className="text-red-600">*</span>
          </p>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            required
          />
          <input
            name="recover-submit"
            class="btn btn-lg btn-primary btn-block my-2 "
            value="Reset Password"
            type="submit"
          />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
