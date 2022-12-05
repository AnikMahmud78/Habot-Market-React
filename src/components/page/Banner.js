import React from "react";

export default function Banner() {
  return (
    <div className="pt-[100px] lg:pt-[146px] px-4 lg:px-[43px]">
      <div className="block lg:flex justify-between items-center py-6 pr-4 pl-4 lg:pr-[27px] lg:pl-[66px] bg-yellow rounded-[10px]">
        <div className="block text-white w-full max-w-[597px]">
          <span className="text-3xl lg:text-[55px] font-semibold">
            Lorem ipsum dolor sit amet, consectetur
          </span>
          <span className="block text-lg leading-7 font-semibold pt-2">
            ed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim{" "}
          </span>
        </div>
        <img
          className="mx-auto lg:mx-0 mt-2"
          src="images/banner.png"
          width={223}
          height={223}
          alt="banner"
        />
      </div>
    </div>
  );
}
