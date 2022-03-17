import React from "react"
import * as PropTypes from "prop-types"

import TEXTS from "../../data/texts"
import { useLanguage } from "../language"
import SlideIn from "../slide-in"
import AccessibilityConfigurator from "./accessibility-configurator"

const AccessibilitySlideIn = ({ variant }) => {
  const { language } = useLanguage()
  return (
    <SlideIn toggleText={TEXTS[language].RULE_SET}>
      <AccessibilityConfigurator variant={variant} />
    </SlideIn>
  )
}

AccessibilitySlideIn.propTypes = {
  variant: PropTypes.string.isRequired,
}

export default AccessibilitySlideIn
