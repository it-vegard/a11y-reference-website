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
}) => {
  const headingId = `navigation-${toSlug(heading)}-heading`
  return (
    <div>
      <Heading id={headingId}>{heading}</Heading>
      <nav aria-labelledby={headingId}>
        <ul
          className={classNames("navigation-list", {
            "navigation-list--horizontal": isHorizontal,
          })}
        >
          {links.map(link => (
            <li className="navigation-list__item" key={toSlug(heading)}>
              <Link title={link.TITLE} url={link.URL} />
            </li>
          ))}
        </ul>
      </nav>
    </div>
  )
}

NavigationList.propTypes = {
  heading: PropTypes.string,
  hideHeading: PropTypes.bool,
  isHorizontal: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      TITLE: PropTypes.string,
      URL: PropTypes.string,
    })
  ),
}

export default NavigationList
