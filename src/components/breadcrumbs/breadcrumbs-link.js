import React from "react"
import * as PropTypes from "prop-types"
import { Link } from "gatsby"

const BreadcrumbLink = ({ isCurrent, text, url }) => (
  <li className="breadcrumbs__list__item">
    <Link
      aria-current={isCurrent ? "location" : undefined}
      to={url}
      className="breadcrumbs__link"
    >
      {text}
    </Link>
  </li>
)

BreadcrumbLink.propTypes = {
  isCurrent: PropTypes.bool,
  text: PropTypes.string,
  url: PropTypes.string,
}

export default BreadcrumbLink
