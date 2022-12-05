import React from "react";
import SignInForm from "../../components/Forms/SignInForm";
import GlobalLayout from "../../components/Layout/GlobalLayout";

export default function Signin() {
  return (
    <GlobalLayout>
      <div className="pt-[10px] lg:pt-[12px] px-4 md:px-24 lg:px-[50px] pb-[45px] lg:pb-[90px]">
        <div className="w-full max-w-[395px] text-center mx-auto">
          <span className="text-xl md:text-2xl text-title leading-[72px] font-semibold capitalize">
            login to continue
          </span>
        </div>
        <SignInForm />
      </div>
    </GlobalLayout>
  );
}
