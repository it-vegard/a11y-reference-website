import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import "./skip-link.css"
import AccessibilityRules from "../accessibility-rules"

const SkipLink = ({ mainTagId = "main" }) => {
  const { rules } = useContext(AccessibilityRules.context)
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
