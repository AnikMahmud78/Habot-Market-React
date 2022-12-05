import React from "react";

export default function Footer() {
  return (
    <footer className="bg-tailPrimary text-white w-screen max-w-[1920px] px-4 md:px-[50px] xl:px-[185px] pt-[26px] lg:pt-[43px] pb-3 lg:pb-[26px] rounded-t-[15px]">
      <div className="block lg:flex justify-between">
        <div className="block">
          <span className="text-4xl md:text-5xl font-bold capitalize">
            Logo
          </span>
          <div className="block mt-4 w-full lg:max-w-[293px]">
            <span className="text-[15px] leading-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim , quis nostrud exercitation ullamco laboris nisi ut
              aliquip ex ea commodo consequat.
            </span>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 mt-4 lg:mt-0 gap-y-4 gap-x-16 font-secondFont xl:pr-[57px]">
          <div className="block text-[15px] leading-5">
            <span className="text-[17px] leading-[22px]">Policies</span>
            <span className="block pt-3 lg:pt-5">Refund Policy</span>
            <span className="block pt-3 lg:pt-5">Terms and Conditions</span>
            <span className="block pt-3 lg:pt-5">Data Privacy</span>
          </div>
          <div className="block text-[15px] leading-5">
            <span className="text-[17px] leading-[22px]">About</span>
            <span className="block pt-3 lg:pt-5">Our Story</span>
            <span className="block pt-3 lg:pt-5">Benefits</span>
            <span className="block pt-3 lg:pt-5">Team</span>
            <span className="block pt-3 lg:pt-5">Careers</span>
          </div>
          <div className="block text-[15px] leading-5">
            <span className="text-[17px] leading-[22px]">Follow Us</span>
            <div className="flex items-center gap-[20px] mt-3 lg:mt-5">
              <img
                alt="icon"
                src="images/facebook.svg"
                width={10}
                height={20}
              />
              <span>Facebook</span>
            </div>
            <div className="flex items-center gap-[10px] mt-3 lg:mt-5">
              <img alt="icon" src="images/twitter.svg" width={20} height={20} />
              <span>Twitter</span>
            </div>
            <div className="flex items-center gap-[10px] mt-3 lg:mt-5">
              <img
                alt="icon"
                src="images/instagram.svg"
                width={20}
                height={20}
              />
              <span>Instagram</span>
            </div>
          </div>
        </div>
      </div>
      <div className="block md:flex md:flex-row-reverse mt-9 lg:mt-[95px] w-full justify-between items-center font-secondFont text-[15px] leading-5">
        <div className="flex items-center gap-[40px]">
          <span>Terms & Conditions</span>
          <span>Privacy Policy</span>
        </div>
        <span className="block opacity-50 pt-3 md:pt-0">
          Copyright © 2020. LogoIpsum. All rights reserved.
        </span>
      </div>
    </footer>
  );
}
