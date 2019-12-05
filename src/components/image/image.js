import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"

const Image = ({ src, alt, ...rest }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  const maybeAlt = rules["image-alt"] ? alt : undefined
  return <img src={src} alt={maybeAlt} {...rest} />
}

Image.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string,
}

export default Image
