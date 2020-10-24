import React, { useContext } from "react"
import Helmet from "react-helmet"

import AccessibilityRules from "../components/accessibility-rules"
import CheckoutPage from "../components/checkout-page"
import Heading from "../components/semantic-heading"
import { useLanguage } from "../components/language"
import CONSTANTS from "../data/rules/constants"
import TEXTS from "../data/texts"

const ReceiptPage = () => {
  const { rules } = useContext(AccessibilityRules.context)
  const { language } = useLanguage()
  const { RECEIPT_HEADER, RECEIPT_NOTE, RECEIPT_DISCLAIMER } = TEXTS[language]
  const shouldSiteRefresh =
    rules[CONSTANTS.NO_META_REDIRECT_WITH_A_TIME_LIMIT] === false
  return (
    <CheckoutPage>
      {shouldSiteRefresh ? (
        <Helmet>
          <meta httpEquiv="refresh" content={`5 url=/${language}/`} />
        </Helmet>
      ) : null}
      <Heading>{RECEIPT_HEADER}</Heading>
      <p>{RECEIPT_NOTE}</p>
      <p>{RECEIPT_DISCLAIMER}</p>
    </CheckoutPage>
  )
}

export default ReceiptPage
