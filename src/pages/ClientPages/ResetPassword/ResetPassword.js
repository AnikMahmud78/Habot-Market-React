import React from "react";
import { useForm } from "react-hook-form";

const ResetPassword = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const resetPasswordHandler = (data) => {
    fetch(
      `${process.env.REACT_APP_BACKEND}${process.env.REACT_APP_RESET_PASSWORD}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          new_password: data.new_password,
          re_new_password: data.re_new_password,
        }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        alert(Object.values(data)[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit(resetPasswordHandler)}
        className="container border mt-4 "
      >
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
            {...register("new_password", { required: true })}
          />
          <p>
            Confirm Password<span className="text-red-600">*</span>
          </p>
          <input
            className="form-control"
            type="password"
            placeholder="Confirm Password"
            {...register("re_new_password", { required: true })}
          />
          <input
            name="recover-submit"
            class="btn btn-lg btn-primary btn-block my-2 "
            value="Reset Password"
            type="submit"
          />
        </div>
      </form>
    </div>
  );
};

export default ResetPassword;
