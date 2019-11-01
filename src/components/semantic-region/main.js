import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import HeadingLevelContext from "../semantic-heading/heading-level-context"

const Main = props => {
  const headingLevel = useContext(HeadingLevelContext)
  return (
    <HeadingLevelContext.Provider value={headingLevel + 1}>
      <main {...props}>{props.children}</main>
    </HeadingLevelContext.Provider>
  )
}

Main.propTypes = {
  children: PropTypes.node,
}

export default Main
