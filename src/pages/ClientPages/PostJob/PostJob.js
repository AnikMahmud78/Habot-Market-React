import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"
import ClientNav from "../../../components/ClientNavbar/ClientNav"
import JobDetailsForm from "../../../components/JobDetailsForm/JobDetailsForm"
import { routes } from "../../../Router/Router"
import {
  CLEAR_JOB_POSTING_FORM_ERRORS,
  UPDATE_JOB_POSTING_FORM_ERRORS,
} from "../../../store/actions/jobActions"

import "./postjob.css"

const PostJob = () => {
  const { jobPostingFormData } = useSelector((state) => state.jobsReducer)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  const handleProceed = useCallback((isValid) => {
    if (isValid) {
      dispatch({ type: CLEAR_JOB_POSTING_FORM_ERRORS })
      navigate(routes.reviewJob)
    }
  }, [])

  const ValidateForm = useCallback(
    (e) => {
      e.preventDefault()
      dispatch({ type: CLEAR_JOB_POSTING_FORM_ERRORS })
      let isValid = true
      const requiredError = "This field is required"
      for (const [key, value] of Object.entries(jobPostingFormData)) {
        if (!value) {
          isValid = false
          dispatch({
            type: UPDATE_JOB_POSTING_FORM_ERRORS,
            field: key,
            payload: requiredError,
          })
        }
      }
      handleProceed(isValid)
    },
    [jobPostingFormData]
  )

  return (
    <div>
      <ClientNav />
      <div className="jobDetailsHeader">
        <h1>Give details of the job</h1>
        <h2>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut
        </h2>
      </div>
      <img
        className="mx-auto"
        src="https://i.ibb.co/pzFQYSx/Group-7074.png"
        alt=""
      />
      <JobDetailsForm />
      <div className="text-center">
        <button className="proceedBtn" onClick={ValidateForm}>
          Proceed
        </button>
      </div>
    </div>
  )
}

export default PostJob
