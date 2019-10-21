import React from "react"
import * as PropTypes from "prop-types"

import "./skip-link.css"

const SkipLink = ({ mainTagId = "main" }) => {
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
