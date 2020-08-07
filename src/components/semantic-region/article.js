import React, { useContext } from "react"
import * as PropTypes from "prop-types"
import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import HeadingLevelContext from "../semantic-heading/heading-level-context"

const Article = ({ children, setRef, ...rest }) => {
  const headingLevel = useContext(HeadingLevelContext)
  const { rules } = useContext(AccessibilityRulesContext)
  const ArticleElement = rules[
    CONSTANTS.USE_ARIA_LANDMARKS_TO_IDENTIFY_REGIONS_OF_A_PAGE
  ]
    ? "article"
    : "div"
  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      <ArticleElement {...rest} ref={setRef}>
        {children}
      </ArticleElement>
    </HeadingLevelContext.Provider>
  )
}

Article.propTypes = {
  children: PropTypes.node,
  setRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
}

export default Article
