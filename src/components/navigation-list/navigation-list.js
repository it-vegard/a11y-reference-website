import React, { useContext } from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"

import CONSTANTS from "../../data/rules/constants"
import { toSlug } from "../../util/url-util"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import Link from "../link"
import Heading from "../semantic-heading"

import "./navigation-list.css"

const NavigationList = ({
  heading,
  hideHeading,
  isHorizontal = false,
  links,
}) => {
  const { rules } = useContext(AccessibilityRulesContext)
  const NavElement = rules[CONSTANTS.GROUP_RELATED_LINKS_USING_THE_NAV_ELEMENT]
    ? "nav"
    : "div"
  return (
    <div>
      {heading && (
        <Heading
          id={`navigation-${toSlug(heading)}-heading`}
          className={classNames({
            "visually-hidden": hideHeading,
          })}
        >
          {heading}
        </Heading>
      )}
      <NavElement
        aria-labelledby={
          heading ? `navigation-${toSlug(heading)}-heading` : undefined
        }
      >
        <ul
          className={classNames("navigation-list", {
            "navigation-list--horizontal": isHorizontal,
          })}
        >
          {links.map(link => (
            <li className="navigation-list__item" key={toSlug(link.title)}>
              <Link title={link.title} url={link.url} />
            </li>
          ))}
        </ul>
      </NavElement>
    </div>
  )
}

NavigationList.propTypes = {
  heading: PropTypes.string,
  hideHeading: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default NavigationList
