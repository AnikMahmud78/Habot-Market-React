import React from "react";

const OTPPage = () => {
  return (
    <div>
      <div className="container  mt-5">
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
              required
            />
            <input
              type="submit"
              className="bg-[#292D55] text-white w-20 h-7 ms-2 rounded"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OTPPage;
