import React, { useContext } from "react"

import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import AccessibleImage from "./image"

const Image = ({ alt, ...rest }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  const maybeAlt = rules[CONSTANTS.IMAGE_ALT] ? alt : undefined
  return <AccessibleImage alt={maybeAlt} {...rest} />
}

Image.propTypes = AccessibleImage.propTypes

export default Image
