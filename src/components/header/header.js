import React from "react"

import Container from "../container"
import Breadcrumbs from "../breadcrumbs"
import Logo from "../logo"
import ContentMenu from "../content-menu"
import { MiniCart } from "../cart"
import { LanguageSelector } from "../language"
import { AccessibilitySlideIn } from "../accessibility-configurator"

import "./header.css"

const Header = () => (
  <header>
    <div className="header">
      <Container className="header__container">
        <Logo />
        <ContentMenu />
        <div className="header__menus">
          <MiniCart />
          <LanguageSelector />
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
