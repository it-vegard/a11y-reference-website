import React from "react"
import ContentMenu from "../content-menu"
import { LanguageSelector } from "../language"
import { AccessibilitySlideIn } from "../accessibility-configurator"

import "./header-menu-desktop.css"

const HeaderMenuDesktop = () => (
  <>
    <ContentMenu />
    <div className="header__menus">
      <LanguageSelector />
      <AccessibilitySlideIn />
    </div>
  </>
)

export default HeaderMenuDesktop
