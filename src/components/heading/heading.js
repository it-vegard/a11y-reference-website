import React from "react"
import * as PropTypes from "prop-types"

import "./heading.css"

const Heading = ({ children, className, headingLevel, ...rest }) => {
  const HeadingWithLevel = `h${headingLevel}`
  return (
    <HeadingWithLevel className={className} {...rest}>
      {children}
    </HeadingWithLevel>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  headingLevel: PropTypes.number.isRequired,
}

export default Heading
