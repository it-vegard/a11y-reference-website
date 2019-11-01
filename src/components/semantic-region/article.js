import React, { useContext } from "react"
import * as PropTypes from "prop-types"
import HeadingLevelContext from "../semantic-heading/heading-level-context"

const Article = ({ children, setRef, ...rest }) => {
  const headingLevel = useContext(HeadingLevelContext)
  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      <article {...rest} ref={setRef}>
        {children}
      </article>
    </HeadingLevelContext.Provider>
  )
}

Article.propTypes = {
  children: PropTypes.node,
  setRef: PropTypes.oneOfType([PropTypes.func, PropTypes.object]),
}

export default Article
