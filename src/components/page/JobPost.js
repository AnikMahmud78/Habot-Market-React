import React from "react";
import ApplyButton from "../Global/ApplyButton";

export default function JobPost({
  id,
  category,
  name,
  description,
  headline,
  timePosted,
}) {
  return (
    <div className="bg-white shadow-post rounded-[10px] pt-[27px] pb-[39px]">
      {/* headline + date posted */}
      <div className="block md:flex items-center justify-between pr-[39px]">
        <div className="bg-tailSecondary rounded-r-[50px]  lg:py-4 px-4 lg:px-[50px] text-center text-lg lg:text-2xl font-semibold text-white">
          {headline}
        </div>
        <span className="block text-[#9E9E9E] text-base font-semibold px-4 lg:px-0 pt-3 lg:pt-0">
          Posted {timePosted} ago
        </span>
      </div>
      {/* job settings */}
      <div className="block lg:flex px-4 lg:px-9 justify-between items-center mt-[33px]">
        <div className="flex">
          <span className="text-[#2F2F2F] text-base font-bold">Job Id :</span>
          <span className="pl-[10px] text-black opacity-50">{id}</span>
        </div>
        <div className="flex">
          <span className="text-[#2F2F2F] text-base font-bold">
            Job Category :
          </span>
          <span className="pl-[10px] text-black opacity-50">{category}</span>
        </div>
        <div className="flex">
          <span className="text-[#2F2F2F] text-base font-bold">
            Emerirate name :
          </span>
          <span className="pl-[10px] text-black opacity-50">{name}</span>
        </div>
      </div>
      {/* description */}
      <div className="block mt-6 pl-4 pr-4 lg:pl-9 lg:pr-[90px]">
        <span className="text-[#2F2F2F] text-base font-bold">
          Job Description
        </span>
        <span className="block pt-2 text-xl font-medium opacity-50">
          {description}
        </span>
      </div>
      <div className="px-4 lg:px-9 mt-10">
        <ApplyButton />
      </div>
    </div>
  );
}
