import React, { useContext } from "react"

import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import AccessibleLink from "./link"
import InaccessibleLink from "./inaccessible-link"

const Link = props => {
  const { rules } = useContext(AccessibilityRulesContext)
  if (!rules[CONSTANTS.LINK_HAS_ROLE_LINK]) {
    return <InaccessibleLink {...props} />
  } else {
    return <AccessibleLink {...props} />
  }
}

export default Link
