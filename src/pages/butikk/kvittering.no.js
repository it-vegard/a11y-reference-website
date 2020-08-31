import React from "react"
import * as PropTypes from "prop-types"

import App from "../../components/app"
import ReceiptPage from "../../page-templates/receipt-page"
import TEXTS from "../../data/texts/texts.no"

const Receipt = ({ location }) => {
  return (
    <App location={location} pageTitle={TEXTS.RECEIPT_TITLE}>
      <ReceiptPage />
    </App>
  )
}

Receipt.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default Receipt
