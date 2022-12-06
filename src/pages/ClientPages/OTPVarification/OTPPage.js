import React from "react";
import { useForm } from "react-hook-form";

const OTPPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({});

  const otpHandler = (data) => {
    fetch(
      `${process.env.REACT_APP_BACKEND}${process.env.REACT_APP_VERIFY_OTP}`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ otp: data.otp }),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // alert(Object.values(data)[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(otpHandler)} className="container  mt-5">
        <div className="container border">
          <div className="text-center my-3">
            <img
              className="mx-auto"
              src="https://i.ibb.co/Bt7rQhS/otp.png"
              alt=""
            />
            <h1 className="text-purple-900 my-3 ">Enter OTP</h1>
            <p className="text-purple-500 mt-1">Check your Email for the OTP</p>
            <input
              type="number"
              className="border-purple-700 border rounded w-auto ps-3 h-7"
              placeholder="Enter your OTP"
              {...register("otp", { required: true })}
            />
            <input
              type="submit"
              className="bg-[#292D55] text-white w-20 h-7 ms-2 rounded"
            />
          </div>
        </div>
      </form>
    </div>
  );
};

export default OTPPage;
