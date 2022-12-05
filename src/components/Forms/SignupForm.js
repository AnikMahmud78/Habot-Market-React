import React from "react";
import { useForm } from "react-hook-form";
import Button from "../Global/Button";
import SocialButton from "../Global/SocialButton";

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const signupSubmitHandler = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={handleSubmit(signupSubmitHandler)}
      className="w-full lg:w-[545px] mx-auto lg:mx-auto border border-gray rounded-[20px] px-4 lg:px-[50px] pt-6 lg:pt-[44px] pb-5 lg:pb-[102px] mt-[30px]"
    >
      <div>
        <label
          className="text-xs md:text-sm text-black leading-5 font-bold"
          htmlFor="name"
        >
          Full Name
        </label>
        <input
          type="text"
          id="name"
          className="block w-full mt-[9px] shadow-input rounded-[4px] p-[12px] md:p-[14px] placeholder:text-sm md:placeholder:text-base placeholder:text-grayDark"
          placeholder="Email address or username"
          {...register("name", { required: true })}
        />
        {errors.name && (
          <span className="text-xs leading-5 text-[#E91010]">
            This field is required
          </span>
        )}
      </div>
      <div className="mt-[20px]">
        <label
          className="text-xs md:text-sm text-black leading-5 font-bold"
          htmlFor="number"
        >
          Contact Number
        </label>
        <input
          id="number"
          className="block w-full mt-[9px] shadow-input rounded-[4px] p-[12px] md:p-[14px] placeholder:text-sm md:placeholder:text-base placeholder:text-grayDark"
          placeholder="Enter your contact number"
          {...register("number", { required: true })}
        />
        {errors.number && (
          <span className="text-xs leading-5 text-[#E91010]">
            This field is required
          </span>
        )}
      </div>
      <div className="mt-[20px]">
        <label
          className="text-xs md:text-sm text-black leading-5 font-bold"
          htmlFor="email"
        >
          Email ID
        </label>
        <input
          type="email"
          id="email"
          className="block w-full  mt-[9px] shadow-input rounded-[4px] p-[12px] md:p-[14px] placeholder:text-sm md:placeholder:text-base placeholder:text-grayDark"
          placeholder="Your email id"
          {...register("email", { required: true })}
        />
        {errors.email && (
          <span className="text-xs leading-5 text-[#E91010]">
            This field is required
          </span>
        )}
      </div>
      <div className="mt-[20px]">
        <label
          className="text-xs md:text-sm text-black leading-5 font-bold"
          htmlFor="password"
        >
          Create a Password
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
      <div className="mt-[20px]">
        <label
          className="text-xs md:text-sm text-black leading-5 font-bold"
          htmlFor="country"
        >
          Country
        </label>
        <input
          type="text"
          id="country"
          className="block w-full mt-[9px] shadow-input rounded-[4px] p-[12px] md:p-[14px] placeholder:text-sm md:placeholder:text-base placeholder:text-grayDark"
          placeholder="Enter your country"
        />
        {errors.country && (
          <span className="text-xs leading-5 text-[#E91010]">
            This field is required
          </span>
        )}
      </div>
      <Button
        type="submit"
        text="sign up"
        background="bg-tailSecondary"
        position="mt-[34px] mx-auto"
      />
      <div className="text-2xl text-grayOpacity font-extrabold mt-[27px] w-[70px] mx-auto">
        - OR -
      </div>
      <div className="flex items-center justify-center gap-5 mt-[30px]">
        <SocialButton
          type="button"
          logo="images/google-logo.svg"
          text="Sign up with Google"
        />
        <SocialButton
          type="button"
          logo="images/facebook-logo.svg"
          text="Sign up with Facebook "
        />
      </div>
    </form>
  );
}
