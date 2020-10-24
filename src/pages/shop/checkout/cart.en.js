import React from "react"
import * as PropTypes from "prop-types"

import App from "../../../components/app"
import TEXTS from "../../../data/texts/texts.en"
import CartPage from "../../../page-templates/cart-page"

const ShoppingCart = ({ location }) => (
  <App location={location} pageTitle={TEXTS.CART}>
    <CartPage />
  </App>
)

ShoppingCart.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default ShoppingCart
