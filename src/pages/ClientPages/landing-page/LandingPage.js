import React from "react"
import { Col, Row } from "react-bootstrap"
import { Link } from "react-router-dom"
import Footer from "../../../components/Footer/Footer"
import LandingNav from "../../../components/LandingNav/LandingNav"
import { routes } from "../../../Router/Router"

import "./landingPage.css"

const LandingPage = () => {
  return (
    <div>
      {/* first banner  */}
      <div className="landingHeader">
        <LandingNav />
        <div className="landingHeaderContainer">
          <div className=" landingHeaderText">
            <div className="landingHeaderTextContainer">
              <h1>
                Search-Explore-Connect: <br /> Find the best vendors for <br />{" "}
                your needs.
              </h1>
              <div className=" mt-2 searchContainer ">
                <Link to={routes.postJob}>
                  <button className="postJobBtn">Post a job</button>
                  <h2 className=" text-white my-2 text-center ">or</h2>
                </Link>

                <div className="search">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="searchIcon"
                  >
                    <path
                      d="M7.53223 14.0332C8.92969 14.0332 10.2393 13.6113 11.3291 12.8906L15.1787 16.749C15.4336 16.9951 15.7588 17.1182 16.1104 17.1182C16.8398 17.1182 17.376 16.5469 17.376 15.8262C17.376 15.4922 17.2617 15.167 17.0156 14.9209L13.1924 11.0801C13.9834 9.95508 14.4492 8.59277 14.4492 7.11621C14.4492 3.31055 11.3379 0.199219 7.53223 0.199219C3.73535 0.199219 0.615234 3.31055 0.615234 7.11621C0.615234 10.9219 3.72656 14.0332 7.53223 14.0332ZM7.53223 12.1875C4.74609 12.1875 2.46094 9.90234 2.46094 7.11621C2.46094 4.33008 4.74609 2.04492 7.53223 2.04492C10.3184 2.04492 12.6035 4.33008 12.6035 7.11621C12.6035 9.90234 10.3184 12.1875 7.53223 12.1875Z"
                      fill="#3C3C43"
                      fill-opacity="0.6"
                    />
                  </svg>
                  <input placeholder="Search" />
                  <button>Search</button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-50 bannerImg ">
            <img
              src="https://i.ibb.co/WtvXB5c/Untitled-design-54-1.png"
              alt=""
            />
          </div>
        </div>
      </div>
      {/* Second Banner  */}
      <div id="becamePartner" className="secondBanner">
        <div className="w-1/3">
          <img
            className="img-fluid"
            src="https://i.ibb.co/tPYWB2m/Untitled-design-55-1.png"
            alt=""
          />
        </div>
        <div className="secondBannerContent">
          <div className="secondBannerHeader">
            <svg
              width="90"
              height="99"
              viewBox="0 0 104 99"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_2203_2529)">
                <rect
                  x="10"
                  y="8"
                  width="84"
                  height="79"
                  rx="10"
                  fill="#583D88"
                />
                <rect
                  x="12.5"
                  y="10.5"
                  width="79"
                  height="74"
                  rx="7.5"
                  stroke="#E8E8E8"
                  stroke-width="5"
                />
              </g>
              <path
                d="M42.5 38.7813C41.4616 38.7813 40.4466 38.422 39.5833 37.749C38.7199 37.076 38.047 36.1194 37.6496 35.0002C37.2523 33.881 37.1483 32.6495 37.3509 31.4613C37.5534 30.2732 38.0535 29.1818 38.7877 28.3252C39.5219 27.4686 40.4574 26.8853 41.4758 26.6489C42.4942 26.4126 43.5498 26.5339 44.5091 26.9975C45.4684 27.4611 46.2883 28.2461 46.8652 29.2534C47.4421 30.2606 47.75 31.4448 47.75 32.6563C47.75 34.2807 47.1969 35.8386 46.2123 36.9873C45.2277 38.1359 43.8924 38.7813 42.5 38.7813ZM42.5 29.5938C41.9808 29.5938 41.4733 29.7734 41.0416 30.1099C40.6099 30.4464 40.2735 30.9247 40.0748 31.4843C39.8761 32.0439 39.8242 32.6597 39.9254 33.2537C40.0267 33.8478 40.2767 34.3935 40.6438 34.8218C41.011 35.2501 41.4787 35.5417 41.9879 35.6599C42.4971 35.7781 43.0249 35.7174 43.5045 35.4856C43.9842 35.2538 44.3942 34.8613 44.6826 34.3577C44.971 33.8541 45.125 33.262 45.125 32.6563C45.125 31.844 44.8484 31.0651 44.3562 30.4907C43.8639 29.9164 43.1962 29.5938 42.5 29.5938ZM63.5 38.7813C62.4616 38.7813 61.4466 38.422 60.5833 37.749C59.7199 37.076 59.047 36.1194 58.6496 35.0002C58.2523 33.881 58.1483 32.6495 58.3509 31.4613C58.5534 30.2732 59.0535 29.1818 59.7877 28.3252C60.5219 27.4686 61.4574 26.8853 62.4758 26.6489C63.4942 26.4126 64.5498 26.5339 65.5091 26.9975C66.4684 27.4611 67.2883 28.2461 67.8652 29.2534C68.4421 30.2606 68.75 31.4448 68.75 32.6563C68.75 34.2807 68.1969 35.8386 67.2123 36.9873C66.2277 38.1359 64.8924 38.7813 63.5 38.7813ZM63.5 29.5938C62.9808 29.5938 62.4733 29.7734 62.0416 30.1099C61.6099 30.4464 61.2735 30.9247 61.0748 31.4843C60.8761 32.0439 60.8242 32.6597 60.9254 33.2537C61.0267 33.8478 61.2767 34.3935 61.6438 34.8218C62.011 35.2501 62.4787 35.5417 62.9879 35.6599C63.4971 35.7781 64.0249 35.7174 64.5045 35.4856C64.9842 35.2538 65.3942 34.8613 65.6826 34.3577C65.971 33.8541 66.125 33.262 66.125 32.6563C66.125 31.844 65.8484 31.0651 65.3562 30.4907C64.8639 29.9164 64.1962 29.5938 63.5 29.5938ZM66.125 70.9375H60.875C60.1788 70.9375 59.5111 70.6148 59.0188 70.0405C58.5266 69.4662 58.25 68.6872 58.25 67.875V57.1563H60.875V67.875H66.125V54.0938H68.75V44.9063C68.75 44.5001 68.6117 44.1107 68.3656 43.8235C68.1194 43.5363 67.7856 43.375 67.4375 43.375H59.0112L53 55.625L46.9888 43.375H38.5625C38.2144 43.375 37.8806 43.5363 37.6344 43.8235C37.3883 44.1107 37.25 44.5001 37.25 44.9063V54.0938H39.875V67.875H45.125V57.1563H47.75V67.875C47.75 68.6872 47.4734 69.4662 46.9812 70.0405C46.4889 70.6148 45.8212 70.9375 45.125 70.9375H39.875C39.1788 70.9375 38.5111 70.6148 38.0188 70.0405C37.5266 69.4662 37.25 68.6872 37.25 67.875V57.1563C36.5538 57.1563 35.8861 56.8336 35.3938 56.2593C34.9016 55.6849 34.625 54.906 34.625 54.0938V44.9063C34.625 43.6879 35.0398 42.5195 35.7783 41.658C36.5167 40.7965 37.5182 40.3125 38.5625 40.3125H48.5112L53 49.5L57.4888 40.3125H67.4375C68.4818 40.3125 69.4833 40.7965 70.2217 41.658C70.9602 42.5195 71.375 43.6879 71.375 44.9063V54.0938C71.375 54.906 71.0984 55.6849 70.6062 56.2593C70.1139 56.8336 69.4462 57.1563 68.75 57.1563V67.875C68.75 68.6872 68.4734 69.4662 67.9812 70.0405C67.4889 70.6148 66.8212 70.9375 66.125 70.9375Z"
                fill="white"
              />
              <defs>
                <filter
                  id="filter0_d_2203_2529"
                  x="0"
                  y="0"
                  width="104"
                  height="99"
                  filterUnits="userSpaceOnUse"
                  color-interpolation-filters="sRGB"
                >
                  <feFlood flood-opacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset dy="2" />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_2203_2529"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_2203_2529"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
            <div id="becomePartner">
              <h1>Become a Partner Vendor</h1>
              <p>Find the perfect clients for your incredible service.</p>
            </div>
          </div>

          <div className="secondBannerCards">
            <Row
              md={2}
              className="w-100 m-0 justify-content-center align-items-center"
            >
              <Col className="mt-5 secondBannerCard">
                <svg
                  width="90"
                  height="95"
                  viewBox="0 0 110 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2203_2530)">
                    <rect
                      x="10"
                      y="8"
                      width="90"
                      height="75"
                      rx="10"
                      fill="#C689C6"
                    />
                    <rect
                      x="12.5"
                      y="10.5"
                      width="85"
                      height="70"
                      rx="7.5"
                      stroke="#E8E8E8"
                      stroke-width="5"
                    />
                  </g>
                  <path
                    d="M58.0939 39.7643C58.3474 39.9802 58.6912 40.1015 59.0497 40.1015C59.4082 40.1015 59.752 39.9802 60.0055 39.7643C60.259 39.5483 60.4014 39.2555 60.4014 38.9501C60.4014 38.6447 60.259 38.3518 60.0055 38.1359L56.9086 35.5001H61.7497C63.5399 35.5001 65.2568 36.1059 66.5227 37.1842C67.7886 38.2626 68.4997 39.7251 68.4997 41.2501V51.6001C66.4704 51.6027 64.5162 52.254 63.0237 53.4252C61.5311 54.5965 60.6091 56.2023 60.4399 57.9249C60.2708 59.6476 60.8668 61.3615 62.1102 62.7277C63.3536 64.0939 65.1536 65.0128 67.1542 65.3025C69.1548 65.5922 71.2102 65.2317 72.9137 64.2922C74.6172 63.3528 75.8446 61.9029 76.3532 60.2294C76.8618 58.5559 76.6145 56.7808 75.6602 55.2552C74.7058 53.7296 73.114 52.5647 71.1997 51.9911V41.2501C71.1997 39.1151 70.2041 37.0675 68.4319 35.5579C66.6597 34.0482 64.256 33.2001 61.7497 33.2001H56.9086L60.0055 30.5643C60.131 30.4574 60.2306 30.3304 60.2985 30.1907C60.3665 30.051 60.4014 29.9013 60.4014 29.7501C60.4014 29.5989 60.3665 29.4491 60.2985 29.3094C60.2306 29.1697 60.131 29.0428 60.0055 28.9359C59.88 28.829 59.731 28.7441 59.567 28.6863C59.403 28.6284 59.2272 28.5986 59.0497 28.5986C58.8722 28.5986 58.6964 28.6284 58.5324 28.6863C58.3685 28.7441 58.2194 28.829 58.0939 28.9359L52.6939 33.5359C52.5682 33.6427 52.4685 33.7696 52.4004 33.9093C52.3323 34.049 52.2973 34.1988 52.2973 34.3501C52.2973 34.5014 52.3323 34.6511 52.4004 34.7908C52.4685 34.9306 52.5682 35.0575 52.6939 35.1643L58.0939 39.7643ZM41.4997 42.4001C43.529 42.3975 45.4833 41.7462 46.9758 40.5749C48.4683 39.4037 49.3904 37.7979 49.5595 36.0753C49.7287 34.3526 49.1326 32.6386 47.8892 31.2724C46.6459 29.9063 44.8458 28.9874 42.8452 28.6977C40.8446 28.408 38.7893 28.7685 37.0858 29.7079C35.3823 30.6474 34.1548 32.0973 33.6462 33.7708C33.1376 35.4443 33.385 37.2194 34.3393 38.745C35.2936 40.2706 36.8854 41.4354 38.7997 42.0091V52.7501C38.7997 54.8851 39.7953 56.9326 41.5676 58.4423C43.3398 59.952 45.7434 60.8001 48.2497 60.8001H53.0908L49.9939 63.4359C49.7404 63.6518 49.598 63.9447 49.598 64.2501C49.598 64.5555 49.7404 64.8484 49.9939 65.0643C50.2474 65.2802 50.5912 65.4015 50.9497 65.4015C51.3082 65.4015 51.652 65.2802 51.9055 65.0643L57.3055 60.4643C57.5566 60.2499 57.6982 59.9598 57.6997 59.657V59.6432C57.6975 59.3412 57.5559 59.052 57.3055 58.8382L51.9055 54.2382C51.6524 54.0222 51.3089 53.9008 50.9507 53.9006C50.5924 53.9004 50.2488 54.0214 49.9953 54.237C49.7418 54.4527 49.5992 54.7453 49.599 55.0504C49.5987 55.3556 49.7408 55.6483 49.9939 55.8643L53.0908 58.5001H48.2497C46.4595 58.5001 44.7426 57.8943 43.4768 56.816C42.2109 55.7376 41.4997 54.2751 41.4997 52.7501V42.4001Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_2203_2530"
                      x="0"
                      y="0"
                      width="110"
                      height="95"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2203_2530"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2203_2530"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <h1>Explore and meet multiple clients for your services </h1>
                <p>
                  Explore the job based on the category of services you provide
                  & reply to the clients that fit you the best.
                </p>
              </Col>
              <Col className="mt-5 secondBannerCard2">
                <svg
                  width="90"
                  height="95"
                  viewBox="0 0 110 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2203_2530)">
                    <rect
                      x="10"
                      y="8"
                      width="90"
                      height="75"
                      rx="10"
                      fill="#C689C6"
                    />
                    <rect
                      x="12.5"
                      y="10.5"
                      width="85"
                      height="70"
                      rx="7.5"
                      stroke="#E8E8E8"
                      stroke-width="5"
                    />
                  </g>
                  <path
                    d="M58.0939 39.7643C58.3474 39.9802 58.6912 40.1015 59.0497 40.1015C59.4082 40.1015 59.752 39.9802 60.0055 39.7643C60.259 39.5483 60.4014 39.2555 60.4014 38.9501C60.4014 38.6447 60.259 38.3518 60.0055 38.1359L56.9086 35.5001H61.7497C63.5399 35.5001 65.2568 36.1059 66.5227 37.1842C67.7886 38.2626 68.4997 39.7251 68.4997 41.2501V51.6001C66.4704 51.6027 64.5162 52.254 63.0237 53.4252C61.5311 54.5965 60.6091 56.2023 60.4399 57.9249C60.2708 59.6476 60.8668 61.3615 62.1102 62.7277C63.3536 64.0939 65.1536 65.0128 67.1542 65.3025C69.1548 65.5922 71.2102 65.2317 72.9137 64.2922C74.6172 63.3528 75.8446 61.9029 76.3532 60.2294C76.8618 58.5559 76.6145 56.7808 75.6602 55.2552C74.7058 53.7296 73.114 52.5647 71.1997 51.9911V41.2501C71.1997 39.1151 70.2041 37.0675 68.4319 35.5579C66.6597 34.0482 64.256 33.2001 61.7497 33.2001H56.9086L60.0055 30.5643C60.131 30.4574 60.2306 30.3304 60.2985 30.1907C60.3665 30.051 60.4014 29.9013 60.4014 29.7501C60.4014 29.5989 60.3665 29.4491 60.2985 29.3094C60.2306 29.1697 60.131 29.0428 60.0055 28.9359C59.88 28.829 59.731 28.7441 59.567 28.6863C59.403 28.6284 59.2272 28.5986 59.0497 28.5986C58.8722 28.5986 58.6964 28.6284 58.5324 28.6863C58.3685 28.7441 58.2194 28.829 58.0939 28.9359L52.6939 33.5359C52.5682 33.6427 52.4685 33.7696 52.4004 33.9093C52.3323 34.049 52.2973 34.1988 52.2973 34.3501C52.2973 34.5014 52.3323 34.6511 52.4004 34.7908C52.4685 34.9306 52.5682 35.0575 52.6939 35.1643L58.0939 39.7643ZM41.4997 42.4001C43.529 42.3975 45.4833 41.7462 46.9758 40.5749C48.4683 39.4037 49.3904 37.7979 49.5595 36.0753C49.7287 34.3526 49.1326 32.6386 47.8892 31.2724C46.6459 29.9063 44.8458 28.9874 42.8452 28.6977C40.8446 28.408 38.7893 28.7685 37.0858 29.7079C35.3823 30.6474 34.1548 32.0973 33.6462 33.7708C33.1376 35.4443 33.385 37.2194 34.3393 38.745C35.2936 40.2706 36.8854 41.4354 38.7997 42.0091V52.7501C38.7997 54.8851 39.7953 56.9326 41.5676 58.4423C43.3398 59.952 45.7434 60.8001 48.2497 60.8001H53.0908L49.9939 63.4359C49.7404 63.6518 49.598 63.9447 49.598 64.2501C49.598 64.5555 49.7404 64.8484 49.9939 65.0643C50.2474 65.2802 50.5912 65.4015 50.9497 65.4015C51.3082 65.4015 51.652 65.2802 51.9055 65.0643L57.3055 60.4643C57.5566 60.2499 57.6982 59.9598 57.6997 59.657V59.6432C57.6975 59.3412 57.5559 59.052 57.3055 58.8382L51.9055 54.2382C51.6524 54.0222 51.3089 53.9008 50.9507 53.9006C50.5924 53.9004 50.2488 54.0214 49.9953 54.237C49.7418 54.4527 49.5992 54.7453 49.599 55.0504C49.5987 55.3556 49.7408 55.6483 49.9939 55.8643L53.0908 58.5001H48.2497C46.4595 58.5001 44.7426 57.8943 43.4768 56.816C42.2109 55.7376 41.4997 54.2751 41.4997 52.7501V42.4001Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_2203_2530"
                      x="0"
                      y="0"
                      width="110"
                      height="95"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2203_2530"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2203_2530"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <h1>Your work is priceless!</h1>
                <p>
                  Apply for the first 5 job opportunities free of cost and
                  explore a world of wonders.
                </p>
              </Col>
              <Col className="mt-5  secondBannerCard2" sm>
                <svg
                  width="90"
                  height="95"
                  viewBox="0 0 110 95"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g filter="url(#filter0_d_2203_2530)">
                    <rect
                      x="10"
                      y="8"
                      width="90"
                      height="75"
                      rx="10"
                      fill="#C689C6"
                    />
                    <rect
                      x="12.5"
                      y="10.5"
                      width="85"
                      height="70"
                      rx="7.5"
                      stroke="#E8E8E8"
                      stroke-width="5"
                    />
                  </g>
                  <path
                    d="M58.0939 39.7643C58.3474 39.9802 58.6912 40.1015 59.0497 40.1015C59.4082 40.1015 59.752 39.9802 60.0055 39.7643C60.259 39.5483 60.4014 39.2555 60.4014 38.9501C60.4014 38.6447 60.259 38.3518 60.0055 38.1359L56.9086 35.5001H61.7497C63.5399 35.5001 65.2568 36.1059 66.5227 37.1842C67.7886 38.2626 68.4997 39.7251 68.4997 41.2501V51.6001C66.4704 51.6027 64.5162 52.254 63.0237 53.4252C61.5311 54.5965 60.6091 56.2023 60.4399 57.9249C60.2708 59.6476 60.8668 61.3615 62.1102 62.7277C63.3536 64.0939 65.1536 65.0128 67.1542 65.3025C69.1548 65.5922 71.2102 65.2317 72.9137 64.2922C74.6172 63.3528 75.8446 61.9029 76.3532 60.2294C76.8618 58.5559 76.6145 56.7808 75.6602 55.2552C74.7058 53.7296 73.114 52.5647 71.1997 51.9911V41.2501C71.1997 39.1151 70.2041 37.0675 68.4319 35.5579C66.6597 34.0482 64.256 33.2001 61.7497 33.2001H56.9086L60.0055 30.5643C60.131 30.4574 60.2306 30.3304 60.2985 30.1907C60.3665 30.051 60.4014 29.9013 60.4014 29.7501C60.4014 29.5989 60.3665 29.4491 60.2985 29.3094C60.2306 29.1697 60.131 29.0428 60.0055 28.9359C59.88 28.829 59.731 28.7441 59.567 28.6863C59.403 28.6284 59.2272 28.5986 59.0497 28.5986C58.8722 28.5986 58.6964 28.6284 58.5324 28.6863C58.3685 28.7441 58.2194 28.829 58.0939 28.9359L52.6939 33.5359C52.5682 33.6427 52.4685 33.7696 52.4004 33.9093C52.3323 34.049 52.2973 34.1988 52.2973 34.3501C52.2973 34.5014 52.3323 34.6511 52.4004 34.7908C52.4685 34.9306 52.5682 35.0575 52.6939 35.1643L58.0939 39.7643ZM41.4997 42.4001C43.529 42.3975 45.4833 41.7462 46.9758 40.5749C48.4683 39.4037 49.3904 37.7979 49.5595 36.0753C49.7287 34.3526 49.1326 32.6386 47.8892 31.2724C46.6459 29.9063 44.8458 28.9874 42.8452 28.6977C40.8446 28.408 38.7893 28.7685 37.0858 29.7079C35.3823 30.6474 34.1548 32.0973 33.6462 33.7708C33.1376 35.4443 33.385 37.2194 34.3393 38.745C35.2936 40.2706 36.8854 41.4354 38.7997 42.0091V52.7501C38.7997 54.8851 39.7953 56.9326 41.5676 58.4423C43.3398 59.952 45.7434 60.8001 48.2497 60.8001H53.0908L49.9939 63.4359C49.7404 63.6518 49.598 63.9447 49.598 64.2501C49.598 64.5555 49.7404 64.8484 49.9939 65.0643C50.2474 65.2802 50.5912 65.4015 50.9497 65.4015C51.3082 65.4015 51.652 65.2802 51.9055 65.0643L57.3055 60.4643C57.5566 60.2499 57.6982 59.9598 57.6997 59.657V59.6432C57.6975 59.3412 57.5559 59.052 57.3055 58.8382L51.9055 54.2382C51.6524 54.0222 51.3089 53.9008 50.9507 53.9006C50.5924 53.9004 50.2488 54.0214 49.9953 54.237C49.7418 54.4527 49.5992 54.7453 49.599 55.0504C49.5987 55.3556 49.7408 55.6483 49.9939 55.8643L53.0908 58.5001H48.2497C46.4595 58.5001 44.7426 57.8943 43.4768 56.816C42.2109 55.7376 41.4997 54.2751 41.4997 52.7501V42.4001Z"
                    fill="white"
                  />
                  <defs>
                    <filter
                      id="filter0_d_2203_2530"
                      x="0"
                      y="0"
                      width="110"
                      height="95"
                      filterUnits="userSpaceOnUse"
                      color-interpolation-filters="sRGB"
                    >
                      <feFlood flood-opacity="0" result="BackgroundImageFix" />
                      <feColorMatrix
                        in="SourceAlpha"
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                        result="hardAlpha"
                      />
                      <feOffset dy="2" />
                      <feGaussianBlur stdDeviation="5" />
                      <feComposite in2="hardAlpha" operator="out" />
                      <feColorMatrix
                        type="matrix"
                        values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                      />
                      <feBlend
                        mode="normal"
                        in2="BackgroundImageFix"
                        result="effect1_dropShadow_2203_2530"
                      />
                      <feBlend
                        mode="normal"
                        in="SourceGraphic"
                        in2="effect1_dropShadow_2203_2530"
                        result="shape"
                      />
                    </filter>
                  </defs>
                </svg>
                <h1>Control how, when, and for whom you provide service.</h1>
                <p>
                  Chat with your choice of clients for work, creativity, and
                  charges.
                </p>
              </Col>
              <Col className="text-center my-auto secondBannerCardBtn " sm>
                <button>Become A Partner</button>
              </Col>
            </Row>
          </div>
        </div>
      </div>

      {/* Third banner  */}
      {/* vineeth */}
      <div className="ThirdBannerBg">
        <div className="row w-100">
          <div className="col-sm-8">
            <div>
              <p className="TitleText">Looking to hire vendors?</p>
            </div>
            <hr className="HeadingLine" />
            <ul className="BannerListHeading">
              <li className="BannerList">
                <img
                  src="https://i.ibb.co/3BcGgbj/easy-installation-1-1.png"
                  className="BannerListImg"
                  alt=""
                />
                <span>No stress on exploring vendors</span>
              </li>
              <li className="BannerList">
                <img
                  src="https://i.ibb.co/GQM4Nb9/badge-1-1.png"
                  className="BannerListImg"
                  alt=""
                />
                <span>Quality work of your choice</span>
              </li>
              <li className="BannerList">
                <img
                  src="https://i.ibb.co/YdwQJqb/list-2.png"
                  className="BannerListImg"
                  alt=""
                />
                <span>The first three posts are on us</span>
              </li>
              <li className="BannerList">
                <img
                  src="https://i.ibb.co/PTPF8hF/Group-1000004589.png"
                  className="BannerListImg"
                  alt=""
                />
                <span>Chat with vendors and explore your choices</span>
              </li>
              <li className="BannerList">
                <img
                  src="https://i.ibb.co/Pg7SRLF/compare-2.png"
                  className="BannerListImg"
                  alt=""
                />
                <span>Compare vendors in real-time</span>
              </li>
              <br></br>
              <li>
                <button className="LearnBtn">Learn more</button>
              </li>
            </ul>
            <div></div>
          </div>
          <div className="col-sm-4">
            <img
              src="https://i.ibb.co/YRhP4Dr/indian-woman-working-laptop-street-cafe-wearing-stylish-smart-clothes-jacket-glasses-3.pngs"
              alt=""
              className="SecondImage"
            />
          </div>
        </div>
      </div>
      {/* Fourth banner  */}
      <div className="fourthBannerContainer">
        <div className="fourthBannerText">
          <h1>Try It For Free & Get a Vendor or Client Now!</h1>
          <p>Hire vendors at your fingertips!</p>
        </div>
        <div className="fourthBannerBtn">
          <Link to="/job-details">
            <h1>Start free posting now</h1>
            <p>
              Post a Job{" "}
              <svg
                className="ms-3"
                width="34"
                height="24"
                viewBox="0 0 34 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M2 10.5C1.17157 10.5 0.5 11.1716 0.5 12C0.5 12.8284 1.17157 13.5 2 13.5L2 10.5ZM33.0607 13.0607C33.6464 12.4749 33.6464 11.5251 33.0607 10.9393L23.5147 1.3934C22.9289 0.80761 21.9792 0.80761 21.3934 1.3934C20.8076 1.97918 20.8076 2.92893 21.3934 3.51472L29.8787 12L21.3934 20.4853C20.8076 21.0711 20.8076 22.0208 21.3934 22.6066C21.9792 23.1924 22.9289 23.1924 23.5147 22.6066L33.0607 13.0607ZM2 13.5L32 13.5L32 10.5L2 10.5L2 13.5Z"
                  fill="white"
                />
              </svg>
            </p>
          </Link>
        </div>
      </div>

      {/* Fifth banner  */}
      <div className="fifthBannerContainer">
        <div className="fifthBannerText">
          <h1>Get Our App Today!</h1>
          <p>
            Start receiving offers from vendors immediately by posting your
            requirement. <br /> One of its kind, get the app from google play or
            the app store by clicking the button below!{" "}
          </p>
          <Link to="" className="fifthBannerBtn">
            <svg
              className="me-2"
              width="22"
              height="20"
              viewBox="0 0 22 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11 13V1M11 13L7 9M11 13L15 9M1 15L1.621 17.485C1.72915 17.9177 1.97882 18.3018 2.33033 18.5763C2.68184 18.8508 3.11501 18.9999 3.561 19H18.439C18.885 18.9999 19.3182 18.8508 19.6697 18.5763C20.0212 18.3018 20.2708 17.9177 20.379 17.485L21 15"
                stroke="white"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
            Download APP
          </Link>
          <div className="d-flex align-items-center justify-around mb-5 mt-5 ">
            <Link className="appImg" to="">
              {" "}
              <img
                className="img-fluid pe-3"
                src="https://i.ibb.co/ZGb0T8m/google-play-store-logo-keyword-the-amazon-insider-podcast-6.png"
                alt=""
              />
            </Link>
            <Link className="appImg2" to="">
              <img
                className="img-fluid"
                src="https://i.ibb.co/C5p4Frk/Download-on-the-App-Store-logo.png"
                alt=""
              />
            </Link>
          </div>
        </div>
        <div className="fifthBannerImg">
          <img
            className="img-fluid"
            src="https://i.ibb.co/B4pY1ZJ/Group-1000004632.png"
            alt=""
          />
        </div>
      </div>
      {/* Footer  */}
      <Footer />
    </div>
  )
}

export default LandingPage
