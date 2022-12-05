import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../pages/ClientPages/Dashboard/Dashboard";
import JobDetails from "../pages/ClientPages/JobDetailsPage/JobDetails";
import JobPostSuccess from "../pages/ClientPages/JobPostSuccess/JobPostSuccess";
import JobReview from "../pages/ClientPages/JobReviewPage/JobReview";
import LandingPage from "../pages/ClientPages/landing-page/LandingPage";
import LoginPage from "../pages/ClientPages/Login/LoginPage";
import Signup from "../pages/ClientPages/Signup/Signup";
import DataPrivacy from "../pages/DataPrivacy/DataPrivacy";
import TermsCondition from "../pages/Terms&Conditions/TermsCondition";
import Signin from "../pages/VendorPages/Signin";
import VendorSignup from "../pages/VendorPages/Signup";
import JobListing from "../pages/VendorPages/JobListing";
import Proposal from "../pages/VendorPages/Proposal";
import ProfileDashboard from "../components/Dashboard/ProfileDashboard";
import JobPage from "../components/Dashboard/JobPage";
import JobPageMain from "../components/Dashboard/JobPageMain";
import JobPageDone from "../components/Dashboard/JobPageDone";
import Message from "../components/Dashboard/Message";
import MiddleContent from "../pages/VendorPages/Middle-main";
import NotificationPage from "../pages/VendorPages/Notification";
import ForgotPassword from "../pages/ClientPages/ForgotPassword/ForgotPassword";
import ResetPassword from "../pages/ClientPages/ResetPassword/ResetPassword";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/job-details",
    element: <JobDetails />,
  },
  {
    path: "/job-review",
    element: <JobReview />,
  },
  {
    path: "/job-post-success",
    element: <JobPostSuccess />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/client-login",
    element: <LoginPage />,
  },
  {
    path: "/client-login/client-signup",
    exact: true,
    element: <Signup />,
  },
  {
    path: "/terms-conditions",
    element: <TermsCondition />,
  },
  {
    path: "/data-privacy",
    element: <DataPrivacy />,
  },
  {
    path: "/vendor-signin",
    element: <Signin />,
  },
  {
    path: "/vendor-signup",
    element: <VendorSignup />,
  },
  {
    path: "/job-listing",
    element: <JobListing />,
  },
  {
    path: "/proposal",
    element: <Proposal />,
  },
  {
    path: "/profile-dashboard",
    element: <ProfileDashboard />,
  },
  {
    path: "/jobPage",
    element: <JobPage />,
  },
  {
    path: "/JobPageMain",
    element: <JobPageMain />,
  },
  {
    path: "/JobPageDone",
    element: <JobPageDone />,
  },
  {
    path: "/message",
    element: <Message />,
  },
  {
    path: "/vendor-profile-dashboard",
    element: <MiddleContent />,
  },
  {
    path: "/notification",
    element: <NotificationPage />,
  },
  {
    path: "/forgot-password",
    element: <ForgotPassword />,
  },
  {
    path: "/reset-password",
    element: <ResetPassword />,
  },
]);
