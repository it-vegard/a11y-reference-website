import React from "react"
import * as PropTypes from "prop-types"
import App from "../components/app"
import TEXTS from "../data/texts/texts.no.js"
import PaymentDetailsPage from "../page-templates/payment-details-page"

const PaymentDetails = ({ location }) => {
  return (
    <App
      location={location}
      pageTitle={TEXTS.PAGES.CHECKOUT_PAYMENT_DETAILS.TITLE}
    >
      <PaymentDetailsPage />
    </App>
  )
}

PaymentDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default PaymentDetails
