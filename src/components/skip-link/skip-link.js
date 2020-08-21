import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import CONSTANTS from "../../data/rules/constants"
import AccessibilityRules from "../accessibility-rules"

import "./skip-link.css"

const SkipLink = ({ mainTagId = "main" }) => {
  const { rules } = useContext(AccessibilityRules.context)
  if (rules[CONSTANTS.BYPASS] === false) {
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
