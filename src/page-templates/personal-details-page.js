import React, { Fragment } from "react"

import { useLanguage } from "../components/language"
import PersonalDetailsForm from "../components/personal-details-form"
import Heading from "../components/semantic-heading"
import TEXTS from "../data/texts"

const PersonalDetailsPage = () => {
  const { language } = useLanguage()
  return (
    <Fragment>
      <Heading>{TEXTS[language].PAGES.CHECKOUT_PERSONAL_DETAILS.TITLE}</Heading>
      <PersonalDetailsForm />
    </Fragment>
  )
}

export default PersonalDetailsPage
