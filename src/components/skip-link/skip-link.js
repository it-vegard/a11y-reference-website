import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import TEXTS from "../../data/texts"
import { useLanguage } from "../language"
import CONSTANTS from "../../data/rules/constants"
import AccessibilityRules from "../accessibility-rules"

import "./skip-link.css"

const SkipLink = ({ mainTagId = "main" }) => {
  const { language } = useLanguage()
  const { rules } = useContext(AccessibilityRules.context)
  if (rules[CONSTANTS.BYPASS] === false) {
    return null
  }
  return (
    <a href={`#${mainTagId}`} className="skip-link">
      {TEXTS[language].SKIP_TO_CONTENT}
    </a>
  )
}

SkipLink.propTypes = {
  mainTagId: PropTypes.string,
}

export default SkipLink
