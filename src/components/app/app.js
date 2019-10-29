import React from "react"
import * as PropTypes from "prop-types"
import IE11CustomProperties from "ie11-custom-properties" // eslint-disable-line no-unused-vars

import Layout from "../layout"
import LocationContext from "../location-context"
import AccessibilityRules from "../accessibility-rules"
import SEO from "../seo"

const App = ({ children, location, pageTitle }) => {
  const AccessibilityRulesProxy =
    location.pathname === "settings" ? React.Fragment : AccessibilityRules
  return (
    <LocationContext.Provider value={{ location }}>
      <AccessibilityRulesProxy>
        <SEO title={pageTitle} lang="en" />
        <Layout>{children}</Layout>
      </AccessibilityRulesProxy>
    </LocationContext.Provider>
  )
}

App.propTypes = {
  children: PropTypes.node,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  pageTitle: PropTypes.string,
}

export default App
