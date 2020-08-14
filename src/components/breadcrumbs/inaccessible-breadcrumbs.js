import React from "react"
import * as PropTypes from "prop-types"

import BreadcrumbLink from "./breadcrumbs-link"

const InaccessibleBreadcrumbs = ({ links }) => (
  <div className="breadcrumbs">
    <ol className="breadcrumbs__list">
      {links.map(link => (
        <BreadcrumbLink {...link} key={link.url} />
      ))}
    </ol>
  </div>
)

InaccessibleBreadcrumbs.propTypes = {
  links: PropTypes.arrayOf(PropTypes.shape(BreadcrumbLink.propTypes)),
}

export default InaccessibleBreadcrumbs
