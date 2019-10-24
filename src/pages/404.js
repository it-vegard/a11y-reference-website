import React from "react"
import * as PropTypes from "prop-types"

import App from "../components/app"

const NotFoundPage = ({ location }) => (
  <App pageTitle="404: Not found" location={location}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </App>
)

NotFoundPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default NotFoundPage
