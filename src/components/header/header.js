import React from "react"

import Container from "../container"
import Breadcrumbs from "../breadcrumbs"
import Logo from "../logo"
import ContentMenu from "../content-menu"
import { MiniCart } from "../cart"
import { LanguageSelector } from "../language"
import { AccessibilitySlideIn } from "../accessibility-configurator"

import "./header.css"
import { Link } from "gatsby"

const Header = () => (
  <header>
    <div className="header">
      <Container className="header__container">
        <Logo />
        <ContentMenu />
        <div className="header__menus">
          <MiniCart />
          <LanguageSelector />
          <Link to="/docs" className="button">
            Documentation
          </Link>
          <AccessibilitySlideIn />
        </div>
      </Container>
    </div>
    <Container>
      <Breadcrumbs />
    </Container>
  </header>
)

export default Header
