import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import HeadingLevelContext from "../semantic-heading/heading-level-context"

const Section = props => {
  const headingLevel = useContext(HeadingLevelContext)
  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      <section {...props}>{props.children}</section>
    </HeadingLevelContext.Provider>
  )
}

Section.propTypes = {
  children: PropTypes.node,
}

export default Section
