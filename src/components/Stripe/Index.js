import React, { useEffect, useState } from "react"
import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import CheckoutForm from "./CheckoutForm"
import { axiosInstance } from "../../helpers/axios/axios"

export default function Stripe() {
  const [clientSecret, setClientSecret] = useState("")
  const [loading, setLoading] = useState(true)
  // Make sure to call `loadStripe` outside of a component’s render to avoid
  // recreating the `Stripe` object on every render.
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY)
  const options = {
    // passing the client secret obtained from the server
    clientSecret: clientSecret,
  }

  const getClientPaymentIntentClientSecret = () => {
    setLoading(true)
    const unusedClientSecret = localStorage.getItem(
      "stripe_payment_intent_secret"
    )

    // if we have an unused client secret, we use it else fetch from server
    if (unusedClientSecret) {
      setClientSecret(unusedClientSecret)
      setLoading(false)
    } else {
      axiosInstance
        .post("payments/create-payment-intent/")
        .then((res) => {
          const client_secret = res.data.client_secret
          setClientSecret(client_secret)
          // we save the fetched client secret to local storage in case the user
          // will not use it, we can re-use it. This is to avoid multiple records
          // in stripe dashboard and faster form reinitialization.
          localStorage.setItem("stripe_payment_intent_secret", client_secret)
          setLoading(false)
        })
        .catch((err) => console.log(err))
    }
  }

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    getClientPaymentIntentClientSecret()
  }, [])

  return (
    <>
      {loading ? (
        <p className="px-2 py-4">
          Please wait as the stripe checkout form loads....
        </p>
      ) : (
        <>
          <p className="mt-2 mb-4">
            You will be charged AED 7.99 and once the payment is successful,
            your job will be posted
          </p>
          <hr />
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        </>
      )}
    </>
  )
}
