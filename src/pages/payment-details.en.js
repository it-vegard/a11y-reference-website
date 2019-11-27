import React from "react"
import * as PropTypes from "prop-types"
import App from "../components/app"
import Heading from "../components/semantic-heading"
import PaymentDetailsForm from "../components/payment-details-form"

const PaymentDetailsPage = ({ location }) => (
  <App location={location} pageTitle="Payment Details">
    <Heading>Payment details</Heading>
    <PaymentDetailsForm />
  </App>
)

PaymentDetailsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default PaymentDetailsPage
