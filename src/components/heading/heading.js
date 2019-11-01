import React from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"

import "./heading.css"

const headingStyles = [
  "heading-largest",
  "heading-larger",
  "heading-large",
  "heading-medium",
  "heading-small",
  "heading-smaller",
]

const Heading = ({
  children,
  className,
  headingLevel,
  headingStyle,
  ...rest
}) => {
  const HeadingWithLevel = `h${headingLevel}`
  return (
    <HeadingWithLevel
      className={classNames("heading", {
        [headingStyles[headingLevel - 1]]: !headingStyle,
        [headingStyle]: headingStyle,
        [className]: className,
      })}
      {...rest}
    >
      {children}
    </HeadingWithLevel>
  )
}

Heading.propTypes = {
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  headingLevel: PropTypes.number.isRequired,
  headingStyle: PropTypes.oneOf(headingStyles),
}

export default Heading
