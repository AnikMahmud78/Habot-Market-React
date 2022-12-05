import React from "react";

export default function PayButton({ onClick, type }) {
  return (
    <button
      className="bg-tailSecondary w-full max-w-[273px] text-center py-[7px] lg:py-[9px] text-white text-lg lg:text-xl font-semibold rounded-[50px]"
      onClick={onClick}
      type={type}
    >
      Proceed to Pay
    </button>
  );
}
