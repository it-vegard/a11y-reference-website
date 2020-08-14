import React from "react"
import * as PropTypes from "prop-types"

import { toSlug } from "../../util/url-util"
import NavigationHeader from "./navigation-header"
import NavigationList from "./navigation-list"

import "./navigation.css"

const Navigation = ({
  heading,
  shouldHideHeading,
  isHorizontal = false,
  links,
}) => {
  const navigationHeadingId = heading
    ? `navigation-${toSlug(heading)}-heading`
    : undefined
  return (
    <div>
      {heading && (
        <NavigationHeader
          heading={heading}
          id={navigationHeadingId}
          shouldHide={shouldHideHeading}
        />
      )}
      <nav aria-labelledby={navigationHeadingId}>
        <NavigationList isHorizontal={isHorizontal} links={links} />
      </nav>
    </div>
  )
}

Navigation.propTypes = {
  heading: PropTypes.string,
  shouldHideHeading: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default Navigation
