import React, { Fragment } from "react"

import Heading from "../components/semantic-heading"
import PaymentDetailsForm from "../components/payment-details-form"
import { useLanguage } from "../components/language"
import TEXTS from "../data/texts"

const PaymentDetailsPage = () => {
  const { language } = useLanguage()
  return (
    <Fragment>
      <Heading>{TEXTS[language].PAGES.CHECKOUT_PAYMENT_DETAILS.TITLE}</Heading>
      <PaymentDetailsForm />
    </Fragment>
  )
}

export default PaymentDetailsPage
