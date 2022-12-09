import React, { useCallback, useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Link, useNavigate } from "react-router-dom"
// import Button from "react-bootstrap/Button"
import Modal from "react-bootstrap/Modal"

import JobReviewDetails from "../../../components/JobReviewDetails/JobReviewDetails"
import { routes } from "../../../Router/Router"
import "./JobReview.css"
import Stripe from "../../../components/Stripe/Index"
import { axiosInstance } from "../../../helpers/axios/axios"
import { handleJobPosting } from "../../../helpers/requests/job_requests"

function PaymentModal({ show, handleClose }) {
  return (
    <>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Pay to Proceed</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Stripe />
        </Modal.Body>
      </Modal>
    </>
  )
}

const JobReview = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false)
  const [hasFreeTrial, setHasFreeTrial] = useState(false)
  const [loading, setLoading] = useState(true)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { jobPostingFormData } = useSelector((state) => state.jobsReducer)
  let navigate = useNavigate()

  const handleClosePaymentModal = () => setShowPaymentModal(false)
  const handleShowPaymentModal = () => setShowPaymentModal(true)

  const ValidateForm = () => {
    // if user has not filled any of the required user inputs,
    // we redirect them back to the job form page
    for (const [_, value] of Object.entries(jobPostingFormData)) {
      if (!value) {
        navigate(routes.postJob)
      }
    }
  }

  const getClientProfile = useCallback(() => {
    // Get the client profile information to check if they have
    // free trial so they post for free or they have to be redirected
    // to stripe payment
    setLoading(true)
    axiosInstance
      .get("/accounts/client-profile/")
      .then((response) => {
        const data = response.data
        setHasFreeTrial(data.has_free_trial)
        setLoading(false)
      })
      .catch((error) => {
        console.log("response >>>>", error.response)
      })
  }, [])

  const postJob = () => {
    // handles posting of job to the server for clients
    // with free trial
    handleJobPosting(
      jobPostingFormData,
      setIsSubmitting,
      navigate,
      routes.jobPostSuccess
    )
  }

  useEffect(() => {
    // we check if every input has been filled so that the user
    // can review the page
    ValidateForm()
    getClientProfile()
  }, [])

  return (
    <div>
      <div className="jobDetailsHeader">
        <h1>Review Page</h1>
        <h2>Review the details of the job you are about to post</h2>
      </div>

      <img
        className="mx-auto"
        src="https://i.ibb.co/R0VphFb/Group-7072.png"
        alt=""
      />
      <JobReviewDetails />
      <div className="backBtnBox">
        <Link to={routes.postJob}>
          <div className="backBtn">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10 22L0 12L10 2L11.4 3.425L2.825 12L11.4 20.575L10 22Z"
                fill="black"
              />
            </svg>
            <h1>Back to previous page</h1>
          </div>
        </Link>
        <button
          className="proceedBtn"
          onClick={hasFreeTrial ? postJob : handleShowPaymentModal}
          disabled={loading}
        >
          {loading
            ? "Loading..."
            : isSubmitting
            ? "Submitting..."
            : hasFreeTrial
            ? "Post Job"
            : "Pay & Post Job"}
        </button>
      </div>

      <PaymentModal
        show={showPaymentModal}
        handleClose={handleClosePaymentModal}
      />
    </div>
  )
}

export default JobReview
