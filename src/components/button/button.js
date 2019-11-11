import React from "react"
import * as PropTypes from "prop-types"
import classNames from "classnames"

import "./button.css"

const Button = ({ children, className, type = "button", ...rest }) => (
  <button
    className={classNames("button", {
      [className]: className,
    })}
    type={type}
    {...rest}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
  type: PropTypes.string,
}

export default Button
