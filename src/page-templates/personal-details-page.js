import React from "react"

import CheckoutPage from "../components/checkout-page"
import { useLanguage } from "../components/language"
import PersonalDetailsForm from "../components/personal-details-form"
import Heading from "../components/semantic-heading"
import TEXTS from "../data/texts"

const PersonalDetailsPage = () => {
  const { language } = useLanguage()
  return (
    <CheckoutPage>
      <Heading>{TEXTS[language].PAGES.CHECKOUT_PERSONAL_DETAILS.TITLE}</Heading>
      <PersonalDetailsForm />
    </CheckoutPage>
  )
}

export default PersonalDetailsPage
