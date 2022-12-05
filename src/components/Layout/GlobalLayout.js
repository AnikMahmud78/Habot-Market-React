import React from "react";
import Footer from "./Footer";
import Navbar from "../ClientNavbar/ClientNav";

export default function GlobalLayout(props) {
  return (
    <div className="font-mainFont font-base max-w-[1920px] mx-auto">
      <Navbar
        authenticated={props.authenticated}
        notification={props.notification}
        user={props.user}
        name={props.name}
      />
      <main>{props.children}</main>
      <Footer />
    </div>
  );
}
