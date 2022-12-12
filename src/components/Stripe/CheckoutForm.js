import React, { useState } from "react"
import { useStripe, useElements, PaymentElement } from "@stripe/react-stripe-js"
import Button from "react-bootstrap/Button"
import { Oval } from "svg-loaders-react"
import { useDispatch, useSelector } from "react-redux"
import { routes } from "../../Router/Router"
import { useNavigate } from "react-router-dom"
import { CLEAR_JOB_POSTING_FORM_DATA } from "../../store/actions/jobActions"
import { handleJobPosting } from "../../helpers/requests/job_requests"
import { Alert } from "react-bootstrap"

const CheckoutForm = () => {
  const stripe = useStripe()
  const elements = useElements()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { jobPostingFormData } = useSelector((state) => state.jobsReducer)

  const handleSubmit = async (event) => {
    setIsSubmitting(true)
    setError("")
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault()

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return
    }

    const result = await stripe.confirmPayment({
      //`Elements` instance that was used to create the Payment Element
      elements,
      redirect: "if_required",
      confirmParams: {
        //   return_url: `http://localhost:3000/${routes.jobPostSuccess}`,
      },
    })

    if (result.error) {
      setIsSubmitting(false)
      // Show error to your customer (for example, payment details incomplete)
      console.log(result.error.message)
      setError(result.error.message)
    } else {
      // Your customer will be redirected to your `return_url`. For some payment
      // methods like iDEAL, your customer will be redirected to an intermediate
      // site first to authorize the payment, then redirected to the `return_url`.
      handleJobPosting(jobPostingFormData)

      // remove the now used payment intent from localstorage
      localStorage.removeItem("stripe_payment_intent_secret")

      // clear form data
      dispatch({ type: CLEAR_JOB_POSTING_FORM_DATA })
      setIsSubmitting(false)
      navigate(`${routes.jobPostSuccess}`)
    }
  }

  const styles = {
    "margin-top": "20px",
    float: "right",
    display: "flex",
    "align-items": "center",
    "justify-content": "center",
    height: "45px",
  }

  return (
    <form onSubmit={handleSubmit}>
      {error && <Alert variant="danger">{error}</Alert>}
      <PaymentElement />
      <Button
        variant="primary"
        disabled={!stripe || isSubmitting}
        type="submit"
        style={styles}
      >
        {isSubmitting ? <Oval style={{ width: "70%" }} /> : "Pay & Proceed"}
      </Button>
    </form>
  )
}

export default CheckoutForm
