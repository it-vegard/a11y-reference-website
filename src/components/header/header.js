import React from "react"
import * as PropTypes from "prop-types"

import Container from "../container"
import Breadcrumbs from "../breadcrumbs"
import Logo from "../logo"
import { MiniCart } from "../cart"
import { AccessibilitySlideIn } from "../accessibility-configurator"
import { LanguageSelector } from "../language"

import "./header.css"

const Header = ({ siteTitle }) => (
  <header>
    <div className="header">
      <Container className="header__container">
        <Logo siteTitle={siteTitle} />
        <LanguageSelector />
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
