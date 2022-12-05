import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import Button from "../Global/Button";
import SocialButton from "../Global/SocialButton";

export default function SignInForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signinSubmitHandler = (data) => {
    console.log(data);
  };

  return (
    <form
      onSubmit={handleSubmit(signinSubmitHandler)}
      className="w-full lg:w-[716px] mx-auto text-center border border-gray rounded-[20px] px-4 lg:px-[56px] pt-6 lg:pt-[85px] pb-10 lg:pb-[102px] mt-[14px]"
    >
      <div className="w-full max-w-[420px] mx-auto">
        <div className="text-left">
          <label
            className="text-xs md:text-sm text-black leading-5 font-bold"
            htmlFor="email"
          >
            Email address or username
          </label>
          <input
            type="email"
            id="email"
            className="block w-full mt-[9px] shadow-input rounded-[4px] p-[12px] md:p-[14px] placeholder:text-sm md:placeholder:text-base placeholder:text-grayDark"
            placeholder="Email address or username"
            {...register("email", { required: true })}
          />
          {errors.email && (
            <span className="text-xs leading-5 text-[#E91010]">
              This field is required
            </span>
          )}
        </div>
        <div className="mt-4 text-left">
          <label
            className="text-xs md:text-sm text-black leading-5 font-bold"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="block w-full mt-[9px] shadow-input rounded-[4px] p-[12px] md:p-[14px] placeholder:text-sm md:placeholder:text-base placeholder:text-grayDark"
            placeholder="Password"
            {...register("password", { required: true })}
          />
          {errors.password && (
            <span className="text-xs leading-5 text-[#E91010]">
              This field is required
            </span>
          )}
        </div>
        <Link to="/">
          <span className="block text-left mt-4 text-black text-base leading-5">
            Forgot your password?
          </span>
        </Link>
      </div>
      <Button
        type="submit"
        text="log in"
        background="bg-tailSecondary"
        position="mt-[35px] lg:mt-[75px] mx-auto"
      />
      <div className="text-2xl text-grayOpacity font-extrabold mt-[27px] w-[70px] mx-auto">
        - OR -
      </div>
      <div className="flex items-center justify-center gap-[30px] mt-[23px]">
        <SocialButton
          type="button"
          logo="images/google-logo.svg"
          text="Sign in with Google"
        />
        <SocialButton
          type="button"
          logo="images/facebook-logo.svg"
          text="Sign in with Facebook "
        />
      </div>
      <div className="block lg:flex mt-[60px] lg:mt-[100px] gap-[35px] text-center">
        <div className="flex gap-1 items-center justify-center lg:justify-start">
          <span className="text-xl text-title font-semibold">
            Don’t have an account ?
          </span>
          <img src="images/wave.svg" width={49} height={49} alt="wave" />
        </div>
        <Link to="/vendor-signup">
          <Button
            type="button"
            text="create an account"
            position="mx-auto mt-2 lg:mx-0 lg:mt-0"
            background="bg-primaryDark"
          />
        </Link>
      </div>
    </form>
  );
}
