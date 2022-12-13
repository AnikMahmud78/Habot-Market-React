import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";
import File from "./img/filepng.png";

const JobHeadline = () => {
  const [vendorProfile, setVendorProfile] = useState();
  useEffect(() => {
    axios.get(`https://habot.io/jobs/assigned-job/`).then(
      (response) => {
        setVendorProfile(response.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  console.log(vendorProfile);
  return (
    <>
      {vendorProfile?.results.map((result) => (
        <div className="job-info-container">
          <div className="job-info-header">
            <div className="job-tile">{result.category_info.name}</div>
            <div className="mute-text">{result.created_by_info.full_name}</div>
          </div>
          <div className="job-info">
            <div className="info-title">{result.name}</div>
            <div className="job-desc">{result.description}</div>
          </div>
          <div className="document-file">
            <span className="document-icon">
              <img src={File} alt="document" />
            </span>
            <label className="doc-text">Supporting Document</label>
          </div>
        </div>
      ))}
    </>
  );
};
export default JobHeadline;
