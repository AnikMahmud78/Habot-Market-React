import { Navigate } from "react-router";

// import { AuthContext } from "../../context/AuthContext";
// import GlobalLoader from "../../ui/GlobalLoader";

const ProtectedRoute = ({ children, user, is_client }) => {
  const loggedUser = JSON.parse(localStorage.getItem("user"));

  let content;
  //   if (isLoading) content = <GlobalLoader />;
  //   else if (data && !isLoading)
  content = loggedUser.is_client === is_client ? children : <Navigate to="/" />;
  //   console.log(JSON.parse(loggedUser));
  return <>{content}</>;
};

export default ProtectedRoute;
