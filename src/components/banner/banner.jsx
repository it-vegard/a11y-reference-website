import React from "react"
import classNames from "classnames"
import * as PropTypes from "prop-types"
import "./banner.css"

const Banner = ({ children, className, ...rest }) => (
  <div className={classNames("banner", { [className]: className })} {...rest}>
    {children}
  </div>
)

Banner.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Banner
