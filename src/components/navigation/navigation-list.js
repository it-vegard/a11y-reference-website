import React from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"

import { toSlug } from "../../util/url-util"
import Link from "../link"

const NavigationList = ({ isHorizontal, links }) => (
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
)

NavigationList.propTypes = {
  isHorizontal: PropTypes.bool,
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      url: PropTypes.string,
    })
  ),
}

export default NavigationList
