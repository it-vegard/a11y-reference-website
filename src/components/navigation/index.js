import React, { useContext } from "react"

import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import AccessibleNavigationList from "./navigation"
import InaccessibleNavigation from "./inaccessible-navigation"

const NavigationList = props => {
  const { rules } = useContext(AccessibilityRulesContext)
  if (rules[CONSTANTS.GROUP_RELATED_LINKS_USING_THE_NAV_ELEMENT] !== false) {
    return <AccessibleNavigationList {...props} />
  } else {
    return <InaccessibleNavigation {...props} />
  }
}

export default NavigationList
