import React from "react";

export default function PosterBlock({ icon, text }) {
  return (
    <div className="posterBlockGradient w-full flex gap-2 items-center rounded-[11px] drop-shadow-poster py-[16px] px-[16px] lg:py-[22px] lg:px-[24px]">
      <img src={icon} width={42} height={42} alt="icon" />
      <span className="text-[#E2E2E2] text-base lg:text-xl">{text}</span>
    </div>
  );
}
