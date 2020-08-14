import React from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"

import { toSlug } from "../../util/url-util"
import Heading from "../semantic-heading"

const NavigationHeader = ({ heading, id, shouldHide }) => {
  if (!heading) {
    return null
  }
  return (
    <Heading
      id={`navigation-${toSlug(heading)}-heading`}
      className={classNames({
        "visually-hidden": shouldHide,
      })}
    >
      {heading}
    </Heading>
  )
}

NavigationHeader.propTypes = {
  heading: PropTypes.string,
  id: PropTypes.string,
  shouldHide: PropTypes.bool,
}

export default NavigationHeader
