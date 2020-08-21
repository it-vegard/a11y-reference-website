import React from "react"
import * as PropTypes from "prop-types"

import Container from "../../components/container"
import { LanguageSupport } from "../../components/language"
import LocationContext from "../../components/location-context"
import HeadingLevelContext from "../../components/semantic-heading/heading-level-context"
import { Main } from "../../components/semantic-region"
import SEO from "../../components/seo"
import SkipLink from "../../components/skip-link"
import PortalHeader from "./portal-header"
import PortalFooter from "./portal-footer"

import "../../components/layout/normalize.css"
import "../../components/layout/base.css"

const PortalPage = ({ children, location, pageTitle }) => {
  return (
    <LocationContext.Provider value={{ location }}>
      <LanguageSupport>
        <HeadingLevelContext.Provider value={0}>
          <SEO title={pageTitle} />
          <div className="layout">
            <SkipLink mainTagId="main" />
            <PortalHeader />
            <Main id="main" tabIndex={-1}>
              <Container className="stack--large">{children}</Container>
            </Main>
            <PortalFooter />
          </div>
        </HeadingLevelContext.Provider>
      </LanguageSupport>
    </LocationContext.Provider>
  )
}

PortalPage.propTypes = {
  children: PropTypes.element,
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
  pageTitle: PropTypes.string,
}

export default PortalPage
