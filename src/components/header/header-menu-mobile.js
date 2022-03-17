import React from "react"

import TEXTS from "../../data/texts"
import { AccessibilitySlideIn } from "../accessibility-configurator"
import ContentMenu from "../content-menu"
import { LanguageSelector, useLanguage } from "../language"
import SlideIn from "../slide-in"

import "./header-menu-mobile.css"

const HeaderMenuMobile = () => {
  const { language } = useLanguage()
  return (
    <SlideIn className="mobile-menu" toggleText={TEXTS[language].MENU}>
      <ContentMenu />
      <div className="header__menus">
        <LanguageSelector />
        <AccessibilitySlideIn variant="mobile" />
      </div>
    </SlideIn>
  )
}

export default HeaderMenuMobile
