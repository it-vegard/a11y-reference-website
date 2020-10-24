import React from "react"

import CheckoutPage from "../components/checkout-page"
import Heading from "../components/semantic-heading"
import PaymentDetailsForm from "../components/payment-details-form"
import { useLanguage } from "../components/language"
import TEXTS from "../data/texts"

const PaymentDetailsPage = () => {
  const { language } = useLanguage()
  return (
    <CheckoutPage>
      <Heading>{TEXTS[language].PAGES.CHECKOUT_PAYMENT_DETAILS.TITLE}</Heading>
      <PaymentDetailsForm />
    </CheckoutPage>
  )
}

export default PaymentDetailsPage
