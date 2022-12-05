import React from "react";

export default function Button({ onClick, text, background, position, type }) {
  return (
    <button
      className={`${background} ${position} block w-[284px] rounded-[488px] py-[12px]`}
      onClick={onClick}
      type={type}
    >
      <span className="text-sm text-white leading-5 font-bold uppercase">
        {text}
      </span>
    </button>
  );
}
