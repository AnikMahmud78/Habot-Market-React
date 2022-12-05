import React from "react";
import SignupForm from "../../components/Forms/SignupForm";
import GlobalLayout from "../../components/Layout/GlobalLayout";

export default function Signup() {
  return (
    <GlobalLayout>
      <div className="lg:pt-[10px] pb-[40px] lg:pb-[76px] px-4 md:px-24 lg:px-[50px]">
        <div className="block lg:flex justify-between w-full max-w-[1241px] gap-5 mx-auto">
          <div className="w-full mx-auto lg:mx-0 max-w-[608px] pt-[60px] lg:pt-[129px]">
            <img
              className="mx-auto lg:mx-0"
              alt="gif"
              src="images/sign-up.png"
              width={424}
              height={424}
            />
            <div className="block -mt-[35px]">
              <span className="text-title text-3xl md:text-[45px] md:leading-[75px] font-bold">
                Lorem ipsum dolor sit
              </span>
              <span className="block pt-5 text-xl md:text-2xl text-subtitle">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut
              </span>
              <div className="mt-[18px] w-[146px] h-[8px] lg:h-[11px] bg-graySecondary"></div>
            </div>
          </div>
          <div>
            <div className="w-full text-center mt-8">
              <span className="text-title text-2xl lg:text-[35px] leading-[72px] font-light">
                Create an Account
              </span>
            </div>
            <SignupForm />
          </div>
        </div>
      </div>
    </GlobalLayout>
  );
}
