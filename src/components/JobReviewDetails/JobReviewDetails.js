import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import "./JobReviewDetails.css"

const JobReviewDetails = () => {
  const [categoryName, setCategoryName] = useState("")
  const [emiratesName, setEmiratesName] = useState("")
  const { jobPostingFormData, jobCategories, emiratesNames } = useSelector(
    (state) => state.jobsReducer
  )

  useEffect(() => {
    const category = jobCategories.find(
      (category) => category.id == jobPostingFormData.category
    )
    const emirates = emiratesNames.find(
      (emirates) => emirates.id == jobPostingFormData.emirate_name
    )

    if (category) {
      setCategoryName(category.name)
    }
    if (emirates) {
      setEmiratesName(emirates.name)
    }
  }, [])

  return (
    <div>
      <div className="JobReviewContainer">
        <h1>{jobPostingFormData.name}</h1>
        <div className="d-flex justify-between  sm:w-2/4 mt-5 ">
          <div className="JobReviewDetails">
            <h1>Job Category</h1>
            <p>{categoryName}</p>
          </div>
          <div className="JobReviewDetails">
            <h1>Emirates Name</h1>
            <p>{emiratesName}</p>
          </div>
        </div>
        <div className="mt-5 JobReviewDetails">
          <h1>Job Description</h1>
          <p>{jobPostingFormData.description} </p>
        </div>
      </div>
    </div>
  )
}

export default JobReviewDetails
