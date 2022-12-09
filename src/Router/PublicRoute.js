import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PublicRoute = ({ children }) => {
  const data = localStorage.getItem("user");
  const isLoggedIn = data ? true : false;
  console.log(isLoggedIn);
  const location = useLocation();
  const { from } = location.state || {};
  return !isLoggedIn ? children : <Navigate to={from ? from : "/"} />;
};

export default PublicRoute;
