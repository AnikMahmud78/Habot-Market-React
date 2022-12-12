import React from "react";
import File from "./img/filepng.png";

const JobHeadline = () => {
  return (
    <>
      <div className="job-info-container">
        <div className="job-info-header">
          <div className="job-tile">Job Headline</div>
          <div className="mute-text">client name</div>
        </div>
        <div className="job-info">
          <div className="info-title">Subject Title</div>
          <div className="job-desc">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto
          </div>
        </div>
        <div className="document-file">
          <span className="document-icon">
            <img src={File} alt="document" />
          </span>
          <label className="doc-text">Supporting Document</label>
        </div>
      </div>
    </>
  );
};
export default JobHeadline;
