import React from "react"
import * as PropTypes from "prop-types"
import classNames from "classnames"

import "./link.css"

const Link = ({ children, className, title, url }) => (
  <a href={url} className={classNames("link", { [className]: className })}>
    {title}
    {children}
  </a>
)

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Link
