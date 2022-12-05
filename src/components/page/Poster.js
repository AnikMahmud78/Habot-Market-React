import React from "react";
import PosterBlock from "../Global/PosterBlock";

export default function Poster() {
  return (
    <div className="w-full lg:w-[40%] relative posterGradient rounded-r-[11px] rounded-l-[11px] lg:rounded-l-none shadow-poster pt-8 lg:pt-[72px] mt-8 lg:mt-0">
      <div className="flex justify-between pl-4 lg:pl-8 pr-[14px] items-end">
        <div className="block">
          <span className="text-3xl lg:text-[40px] text-[#E2E2E2] font-bold">
            How it works ?
          </span>
          <div className="w-[46px] h-[3px] bg-tailSecondary mt-[10px]"></div>
          <div className="w-[86px] h-[3px] bg-tailSecondary mt-2"></div>
        </div>
        <img
          className="max-w-[100px] lg:max-w-[120px]"
          src="images/light-bulb.png"
          width={120}
          height={120}
          alt="bulb"
        />
      </div>
      <div className="px-4 lg:px-8 mt-16 grid grid-cols-1 gap-y-6">
        <PosterBlock
          icon="images/google-forms.svg"
          text="Lorem ipsum dolor sit amet, consec tetur adipiscing elit"
        />
        <PosterBlock
          icon="images/email.svg"
          text="Lorem ipsum dolor sit amet, consec tetur adipiscing elit"
        />
        <PosterBlock
          icon="images/chat.svg"
          text="Lorem ipsum dolor sit amet, consec tetur adipiscing elit"
        />
      </div>
      <div className="w-full text-center mx-auto">
        <img
          className="mx-auto lg:mt-[30px]"
          src="images/person.png"
          width={311}
          height={283}
          alt="person"
        />
      </div>
    </div>
  );
}
