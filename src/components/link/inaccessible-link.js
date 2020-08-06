import React from "react"
import * as PropTypes from "prop-types"

const InaccessibleLink = ({ children, url, ...rest }) => (
  <span {...rest} onClick={() => (location.href = url)}>
    {children}
  </span>
)

InaccessibleLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  url: PropTypes.string,
}

export default InaccessibleLink
