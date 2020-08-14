import React, { useContext } from "react"

import CONSTANTS from "../../data/rules/constants"
import { toSlug } from "../../util/url-util"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import NavigationHeader from "./navigation-header"
import NavigationList from "./navigation-list"
import Navigation from "./navigation"

const InaccessibleNavigation = ({
  heading,
  shouldHideHeading,
  isHorizontal = false,
  links,
}) => {
  const { rules } = useContext(AccessibilityRulesContext)
  const NavigationElement = rules[
    CONSTANTS.GROUP_RELATED_LINKS_USING_THE_NAV_ELEMENT
  ]
    ? "nav"
    : "div"
  const navigationHeadingId = heading
    ? `navigation-${toSlug(heading)}-heading`
    : undefined
  return (
    <div>
      <NavigationHeader
        heading={heading}
        id={navigationHeadingId}
        shouldHide={shouldHideHeading}
      />
      <NavigationElement aria-labelledby={navigationHeadingId}>
        <NavigationList isHorizontal={isHorizontal} links={links} />
      </NavigationElement>
    </div>
  )
}

InaccessibleNavigation.propTypes = Navigation.propTypes

export default InaccessibleNavigation
