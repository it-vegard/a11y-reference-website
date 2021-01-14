import React from "react"
import { Link as GatsbyLink } from "gatsby"
import * as PropTypes from "prop-types"
import classNames from "classnames"

import "./link.css"

const isExternalURL = url => /^https?:\/\/|^\/\//i.test(url)

const Link = ({ children, className, title, url }) => {
  if (isExternalURL(url)) {
    return (
      <a href={url} className={classNames("link", { [className]: className })}>
        {title}
        {children}
      </a>
    )
  }
  return (
    <GatsbyLink
      to={url}
      className={classNames("link", { [className]: className })}
    >
      {title}
      {children}
    </GatsbyLink>
  )
}

Link.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default Link
