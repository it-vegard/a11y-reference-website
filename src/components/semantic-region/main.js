import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import HeadingLevelContext from "../semantic-heading/heading-level-context"

const Main = props => {
  const headingLevel = useContext(HeadingLevelContext)
  const { rules } = useContext(AccessibilityRulesContext)
  const MainElement = rules[
    CONSTANTS.USE_ARIA_LANDMARKS_TO_IDENTIFY_REGIONS_OF_A_PAGE
  ]
    ? "main"
    : "div"
  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      <MainElement {...props}>{props.children}</MainElement>
    </HeadingLevelContext.Provider>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

export default Main
