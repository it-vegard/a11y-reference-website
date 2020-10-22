import React from "react"
import { element } from "prop-types"

import "./checkout-page.css"

const CheckoutPage = ({ children }) => (
  <div className="checkout-page">{children}</div>
)

CheckoutPage.propTypes = {
  children: element,
}

export default CheckoutPage
