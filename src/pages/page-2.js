import React from "react"
import * as PropTypes from "prop-types"
import { Link } from "gatsby"

import App from "../components/app"

const SecondPage = ({ location }) => (
  <App pageTitle="Page two" location={location}>
    <h1>Hi from the second page</h1>
    <p>Welcome to page 2</p>
    <Link to="/">Go back to the homepage</Link>
  </App>
)

SecondPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default SecondPage
