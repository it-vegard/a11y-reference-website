import React from "react"

import SlideIn from "../slide-in"
import AccessibilityConfigurator from "./accessibility-configurator"

const AccessibilitySlideIn = () => {
  return (
    <SlideIn toggleText="Page rules">
      <AccessibilityConfigurator />
    </SlideIn>
  )
}

export default AccessibilitySlideIn
