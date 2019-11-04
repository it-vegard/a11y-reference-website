import React from "react"
import * as PropTypes from "prop-types"
import Layout from "../layout"
import LocationContext from "../location-context"
import AccessibilityRules from "../accessibility-rules"
import SEO from "../seo"
import HeadingLevelContext from "../semantic-heading/heading-level-context"

const App = ({ children, location, pageTitle }) => {
  const AccessibilityRulesProxy =
    location.pathname === "settings" ? React.Fragment : AccessibilityRules
  return (
    <LocationContext.Provider value={{ location }}>
      <HeadingLevelContext.Provider value={0}>
        {" "}
        {/* Initialize as 0, so the main tag can increase to 1 */}
        <AccessibilityRulesProxy>
          <SEO title={pageTitle} lang="en" />
          <Layout>{children}</Layout>
        </AccessibilityRulesProxy>
      </HeadingLevelContext.Provider>
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
