import React from "react"
import * as PropTypes from "prop-types"

import BreadcrumbLink from "./breadcrumbs-link"

import "./breadcrumbs.css"

/**
 * Breadcrumbs component
 *
 * Modelled after Scott O'Hara's a11y_breadcrumbs (https://scottaohara.github.io/a11y_breadcrumbs/)
 */

const Breadcrumbs = ({ links }) => (
  <nav className="breadcrumbs" aria-label="Breadcrumbs">
    <ol className="breadcrumbs__list">
      {links.map(link => (
        <BreadcrumbLink {...link} key={link.url} />
      ))}
    </ol>
  </nav>
)

Breadcrumbs.propTypes = {
  links: PropTypes.arrayOf(BreadcrumbLink.propTypes),
}

export default Breadcrumbs
