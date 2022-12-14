import React from "react";

export default function ApplyButton() {
  return (
    <button className="flex bg-[#292D55] items-center justify-center gap-4 px-10 py-2 lg:py-3 text-white rounded-[50px]">
      <span className="text-xl lg:text-2xl font-semibold">Apply For Job</span>
      <img src="images/forum.svg" width={29} height={29} alt="form" />
    </button>
  );
}
