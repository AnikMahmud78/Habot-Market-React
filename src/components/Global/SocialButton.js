import React from "react";

export default function SocialButton({ logo, text, onClick, type }) {
  return (
    <button
      className="flex items-center gap-1 border border-borderOpacity rounded-lg px-2 py-[10px]"
      onClick={onClick}
      type={type}
    >
      <img src={logo} width={24} height={24} alt="social" />
      <span className="text-linkBlack text-base font-thirdFont leading-5">
        {text}
      </span>
    </button>
  );
}
