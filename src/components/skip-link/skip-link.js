import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import "./skip-link.css"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"

const SkipLink = ({ mainTagId = "main" }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  if (!rules["bypass"]) {
    return null
  }
  return (
    <a href={`#${mainTagId}`} className="skip-link">
      Skip to main content
    </a>
  )
}

SkipLink.propTypes = {
  mainTagId: PropTypes.string,
}

export default SkipLink
