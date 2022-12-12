import { Link, NavLink } from "react-router-dom";
import React from "react";
const VendorContainer = (props) => {
  // console.log(props?.vendorProfile);
  const vendorDetails = props?.vendorProfile;
  return (
    <>
      <div className="vendor_card">
        <div className="banner_img">
          <p>upload a banner image</p>
        </div>
        <div className="vendor-img"></div>
        <div className="vendor-info">
          <div className="vendor_name">{vendorDetails?.full_name}</div>
          <div className="vendor_desc ">
            <p>{vendorDetails?.about}</p>
            <p>{vendorDetails?.address}</p>
            <p>{vendorDetails?.company_name}</p>
          </div>
          <div className="apply-btns">
            <button className="Btn">
              <NavLink to="/message">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 15 15"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0 11.2641V0.788486C0 0.613267 0.08125 0.438047 0.24375 0.262828C0.40625 0.0876094 0.575 0 0.75 0H10.4813C10.6688 0 10.8437 0.0844807 11.0062 0.253442C11.1687 0.422403 11.25 0.600751 11.25 0.788486V7.47184C11.25 7.64706 11.1687 7.82228 11.0062 7.9975C10.8437 8.17272 10.6688 8.26033 10.4813 8.26033H3L0 11.2641ZM3.76875 12.015C3.59375 12.015 3.42188 11.9274 3.25313 11.7522C3.08438 11.577 3 11.4018 3 11.2265V9.38673H12.375V3.00375H14.25C14.425 3.00375 14.5937 3.09136 14.7562 3.26658C14.9187 3.4418 15 3.62328 15 3.81101V15L12.0187 12.015H3.76875ZM10.125 1.12641H1.125V8.54193L2.53125 7.13392H10.125V1.12641ZM1.125 1.12641V8.54193V1.12641Z"
                    fill="#292D55"
                  />
                </svg>
                <span>Messages</span>
              </NavLink>
            </button>
            <Link to="/">
              <button className="Btn active">Apply Jobs</button>
            </Link>
          </div>
        </div>
        <div className="links">
          <ul>
            <li
              onClick={props.clickBack}
              className={`${props.reclick ? "active" : ""}`}
            >
              Applied Jobs
            </li>
            <li
              onClick={props.click}
              className={`${props.clicked ? "active" : ""}`}
            >
              Transaction
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};
export default VendorContainer;
