import React from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"

import Link from "../link"
import Heading from "../semantic-heading"
import { toSlug } from "../../util/url-util"

import "./navigation-list.css"

const NavigationList = ({
  heading,
  hideHeading,
  isHorizontal = false,
  links,
}) => (
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
    <nav
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
    </nav>
  </div>
)

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
