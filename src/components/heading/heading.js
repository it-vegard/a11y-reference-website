import React, { useContext } from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"

import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"

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
  const { rules } = useContext(AccessibilityRulesContext)
  const HeadingWithLevel = rules[CONSTANTS.HEADER_HAS_ROLE_HEADER]
    ? `h${headingLevel}`
    : "span"
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
