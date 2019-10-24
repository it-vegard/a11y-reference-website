import React from "react"
import * as PropTypes from "prop-types"

import "./paragraph.css"

const Paragraph = ({ children, ...rest }) => (
  <p className="paragraph" {...rest}>
    {children}
  </p>
)

Paragraph.propTypes = {
  children: PropTypes.node,
}

export default Paragraph
