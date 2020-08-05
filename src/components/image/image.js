import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"

const Image = ({ src, alt, ...rest }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  const maybeAlt = rules[CONSTANTS.IMAGE_ALT] ? alt : undefined
  return <img src={src} alt={maybeAlt} {...rest} />
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
}

export default Image
