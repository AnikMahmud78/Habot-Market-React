import React from "react";

export default function TextCheckbox({ text }) {
  return (
    <div className="flex items-center gap-9 mt-[7px]">
      <div className="w-[154px]">
        <span className="block text-lg font-medium text-[#2B2929]">{text}</span>
      </div>
      <input className="w-[16.5px] h-[16.5px]" type="checkbox" />
    </div>
  );
}
