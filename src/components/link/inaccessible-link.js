import React from "react"
import * as PropTypes from "prop-types"
import classNames from "classnames"

const InaccessibleLink = ({ children, className, title, url, ...rest }) => (
  <span
    {...rest}
    className={classNames("link", { [className]: className })}
    onClick={() => (location.href = url)}
  >
    {title}
    {children}
  </span>
)

InaccessibleLink.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  className: PropTypes.string,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default InaccessibleLink
