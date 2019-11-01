import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import Heading from "../heading"
import HeadingLevelContext from "./heading-level-context"

const SemanticHeading = props => {
  const headingLevel = useContext(HeadingLevelContext)
  return (
    <Heading headingLevel={headingLevel} {...props}>
      {props.children}
    </Heading>
  )
}

SemanticHeading.propTypes = {
  children: PropTypes.node,
}

export default SemanticHeading
