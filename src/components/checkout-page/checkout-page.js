import React from "react"
import { array, element, oneOfType } from "prop-types"

import "./checkout-page.css"

const CheckoutPage = ({ children }) => (
  <div className="checkout-page">{children}</div>
)

CheckoutPage.propTypes = {
  children: oneOfType([element, array]),
}

export default CheckoutPage
