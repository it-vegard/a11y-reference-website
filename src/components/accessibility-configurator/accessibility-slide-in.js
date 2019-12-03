import React from "react"

import TEXTS from "../../data/texts"
import { useLanguage } from "../language"
import SlideIn from "../slide-in"
import AccessibilityConfigurator from "./accessibility-configurator"

const AccessibilitySlideIn = () => {
  const { language } = useLanguage()
  return (
    <SlideIn toggleText={TEXTS[language].RULE_SET}>
      <AccessibilityConfigurator />
    </SlideIn>
  )
}

export default AccessibilitySlideIn
