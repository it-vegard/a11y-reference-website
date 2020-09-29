import React from "react"

import Container from "../container"
import Breadcrumbs from "../breadcrumbs"
import Logo from "../logo"
import ContentMenu from "../content-menu"
import { MiniCart } from "../cart"
import { LanguageSelector } from "../language"
import { AccessibilitySlideIn } from "../accessibility-configurator"
import SlideIn from "../slide-in"

import "./header.css"

const Header = () => (
  <header>
    <div className="header">
      <Container className="header__container">
        <Logo />
        {/** Desktop menu */}
        <ContentMenu />
        <div className="header__menus">
          <LanguageSelector />
          <AccessibilitySlideIn />
        </div>
        {/** Mobile menu */}
        <SlideIn className="mobile-menu" toggleText="Menu">
          <ContentMenu />
          <div className="header__menus">
            <LanguageSelector />
            <AccessibilitySlideIn />
          </div>
        </SlideIn>
      </Container>
    </div>
    <MiniCart />
    <Container>
      <Breadcrumbs />
    </Container>
  </header>
)

export default Header
