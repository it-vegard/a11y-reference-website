import React from "react"
import * as PropTypes from "prop-types"

import App from "../../../components/app"
import TEXTS from "../../../data/texts/texts.no"
import CartPage from "../../../page-templates/cart-page"

const Handlekurv = ({ location }) => (
  <App location={location} pageTitle={TEXTS.CART}>
    <CartPage />
  </App>
)

Handlekurv.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default Handlekurv
