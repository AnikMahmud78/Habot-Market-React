import React from "react"
import "./JobPostSuccess.css"

const JobPostSuccess = () => {
  return (
    <div>
      <div className="jobSuccessContainer">
        <img
          src="https://i.ibb.co/B6z7J5s/91068-message-sent-successfully-plane-1-1.png"
          alt=""
        />
        <h1>Job posted successfully</h1>
        <img src="https://i.ibb.co/mbp2KcN/Group-7073.png" alt="" />
        <p className="mt-4">
          Your job has been posted successfully. You will receive offers from
          vendors who are qualified to offer you their service and you will get
          to choose which one of them to work with!{" "}
        </p>
      </div>
    </div>
  )
}

export default JobPostSuccess
