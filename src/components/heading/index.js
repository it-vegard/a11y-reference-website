import React, { useContext } from "react"
import classNames from "classnames"

import AccessibleHeading from "./heading"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import CONSTANTS from "../../data/rules/constants"

const headingStyles = [
  "heading-largest",
  "heading-larger",
  "heading-large",
  "heading-medium",
  "heading-small",
  "heading-smaller",
]

const Heading = props => {
  const { children, className, headingLevel, headingStyle, ...rest } = props
  const { rules } = useContext(AccessibilityRulesContext)
  const allClasses = classNames("heading", {
    [headingStyles[headingLevel - 1]]: !headingStyle,
    [headingStyle]: headingStyle,
    [className]: className,
  })
  if (rules[CONSTANTS.HEADER_HAS_ROLE_HEADER] !== false) {
    return (
      <AccessibleHeading {...props} className={allClasses}>
        {children}
      </AccessibleHeading>
    )
  } else {
    return (
      <span {...rest} className={allClasses}>
        {children}
      </span>
    )
  }
}

export default Heading
