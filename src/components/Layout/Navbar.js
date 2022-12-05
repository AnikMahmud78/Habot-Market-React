import React from "react";

export default function Navbar({ authenticated, notification, user, name }) {
  return (
    <nav className="fixed flex flex-row w-screen max-w-[1920px] z-10 justify-between bg-primary px-4 lg:px-12 py-3 lg:py-[18px]">
      <div className="justify-start">
        <span className="text-white text-4xl md:text-5xl font-bold capitalize">
          Logo
        </span>
      </div>
      {authenticated && (
        <div className="flex gap-6 md:gap-8 lg:gap-14 items-center">
          <img
            src="images/message.svg"
            width={25}
            height={27.5}
            alt="message"
          />
          <div className="block relative">
            <div className="bg-[#3246FF] absolute -top-[6px] right-0 w-[12px] h-[12px] flex text-center items-center text-white text-[8px] leading-[10px] font-bold justify-center rounded-full">
              {notification}
            </div>
            <img
              src="images/bell.svg"
              width={27}
              height={30.4}
              alt="notification"
            />
          </div>
          <div className="flex items-center gap-[7px]">
            <img
              src={user}
              className="rounded-full object-cover"
              width={54}
              height={53}
              alt="user"
            />
            <div className="flex gap-1 items-center">
              <span className="text-base text-white font-semibold">{name}</span>
              <button>
                <img
                  src="images/arrow-down.svg"
                  width={11}
                  height={6}
                  alt="arrow"
                />
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
