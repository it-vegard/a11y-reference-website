import React from "react"
import * as PropTypes from "prop-types"
import Layout from "../layout"
import LocationContext from "../location-context"
import AccessibilityRules from "../accessibility-rules"
import SEO from "../seo"
import HeadingLevelContext from "../semantic-heading/heading-level-context"
import { OrderProvider } from "../order"
import { LanguageSupport } from "../language"

const App = ({ children, location, pageTitle }) => {
  const AccessibilityRulesProxy =
    location.pathname === "settings" ? React.Fragment : AccessibilityRules
  return (
    <LocationContext.Provider value={{ location }}>
      <LanguageSupport>
        <HeadingLevelContext.Provider value={0}>
          <OrderProvider>
            <AccessibilityRulesProxy>
              <SEO title={pageTitle} lang="en" />
              <Layout>{children}</Layout>
            </AccessibilityRulesProxy>
          </OrderProvider>
        </HeadingLevelContext.Provider>
      </LanguageSupport>
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
