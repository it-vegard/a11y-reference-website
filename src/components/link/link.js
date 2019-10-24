import React from "react"
import * as PropTypes from "prop-types"

import "./link.css"

const Link = ({ title, url }) => (
  <a href={url} className="link">
    {title}
  </a>
)

Link.propTypes = {
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Link
