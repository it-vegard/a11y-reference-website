import React from "react"
import * as PropTypes from "prop-types"

import Container from "../container"
import Breadcrumbs from "../breadcrumbs"
import Logo from "../logo"
import { MiniCart } from "../cart"

import "./header.css"
import { AccessibilitySlideIn } from "../accessibility-configurator"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <Container className="header__container">
        <Logo siteTitle={siteTitle} />
        <MiniCart />
        <AccessibilitySlideIn />
      </Container>
    </div>
    <Container>
      <Breadcrumbs />
    </Container>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
