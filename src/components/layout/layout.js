/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useContext, useEffect } from "react"
import * as PropTypes from "prop-types"

import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import { Main } from "../semantic-region"
import Footer from "../footer"
import Header from "../header"
import Container from "../container"
import SkipLink from "../skip-link"

import "./normalize.css"
import "./base.css"

const Layout = ({ children }) => {
  const mainTagId = "main"
  const { rules } = useContext(AccessibilityRulesContext)
  useEffect(() => {
    const bodyElement = document.getElementsByTagName("body")[0]
    if (rules[CONSTANTS.COLOR_CONTRAST] === false) {
      bodyElement.classList.add("low-contrast")
    } else if (bodyElement.classList.contains("low-contrast")) {
      bodyElement.classList.remove("low-contrast")
    }
  }, [JSON.stringify(rules[CONSTANTS.COLOR_CONTRAST])])
  return (
    <div className="layout">
      <SkipLink mainTagId={mainTagId} />
      <Header />
      <Main id={mainTagId} tabIndex={-1}>
        <Container>{children}</Container>
      </Main>
      <Footer />
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
