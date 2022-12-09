import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const isLoggedIn = localStorage.getItem("user") ? true : false;
  const location = useLocation();
  const { pathname } = location || {};
  return isLoggedIn ? (
    children
  ) : (
    <Navigate to="/client-login" state={{ from: pathname }} />
  );
};

export default PrivateRoute;
