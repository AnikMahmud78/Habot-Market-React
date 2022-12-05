import React from "react";
import Banner from "../../components/page/Banner";
import GlobalLayout from "../../components/Layout/GlobalLayout";
import TextCheckbox from "../../components/page/TextCheckbox";
import JobPost from "../../components/page/JobPost";

export default function JobListing() {
  return (
    <GlobalLayout
      authenticated={true}
      user="images/profile.png"
      notification="3"
      name="David"
    >
      <Banner />
      <div className="block lg:flex lg:flex-row-reverse justify-between items-center px-4 lg:px-16 mt-[46px]">
        <div className="flex w-full max-w-[400px] px-3  lg:py-4 gap-2 items-center rounded-[100px] bg-[#FBFBFB] border border-[#EBEBEB]">
          <img src="images/search.svg" width={24} height={24} alt="search" />
          <input
            className="outline-none placeholder:text-[#999999] text-base font-semibold"
            placeholder="Search"
          />
        </div>
        <span className="block mt-3 text-[#444242] text-xl md:text-2xl font-semibold">
          16 result found for “Company Registration”
        </span>
      </div>
      <div className="block lg:flex w-full lg:border-t lg:border-t-[#858585] mt-4 lg:mt-9">
        {/* filter */}
        <div className="block pl-4 pr-4 xl:pl-[57px] xl:pr-[34px] pt-4 lg:pt-9 border-r border-r-[#C7C7C7]">
          <span className="text-black text-2xl font-semibold">
            Popular Services
          </span>
          <div className="mt-5">
            {[...Array(8)].map((item, key) => (
              <TextCheckbox key={key} text="Lorem ipsum dolo" />
            ))}
          </div>
          <div className="mt-12">
            <div className="flex items-center gap-1">
              <span className="text-2xl font-semibold text-black">Sort</span>
              <img src="images/sort.svg" width={30} height={30} alt="sort" />
            </div>
            <button className="text-[#2B2929] text-lg font-semibold mt-[26px]">
              Date Posted
            </button>
          </div>
        </div>
        {/* posts */}
        <div className="pt-8 px-8 pb-[130px] grid grid-cols-1 gap-y-8">
          {[...Array(4)].map((post, key) => (
            <JobPost
              key={key}
              headline="Job Headline Demo"
              timePosted="12 hours"
              id="Lorem Ipsum"
              category="Lorem Ipsum"
              name="Lorem Ipsum"
              description="Elit aute nulla minim consequat fugiat ad reprehenderit voluptate fugiat elit anim elit.Commodo sint id id velit dolor culpa quis in."
            />
          ))}
        </div>
      </div>
    </GlobalLayout>
  );
}
