import React from "react"
import * as PropTypes from "prop-types"
import App from "../components/app"
import Heading from "../components/semantic-heading"

const PaymentDetailsPage = ({ location }) => (
  <App location={location} pageTitle="Receipt">
    <Heading>Thank you for your purchase!</Heading>
    <p>PS: You noticed this was not a real shop, right?</p>
    <p>
      No data has been sent from your computer. It was stored in your browser
      while you were moving around the site, but is now deleted. <br />
      #PrivacyByDesign
    </p>
  </App>
)

PaymentDetailsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default PaymentDetailsPage
