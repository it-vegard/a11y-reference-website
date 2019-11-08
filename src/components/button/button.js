import React from "react"
import * as PropTypes from "prop-types"
import classNames from "classnames"

import "./button.css"

const Button = ({ children, className, ...rest }) => (
  <button
    className={classNames("button", {
      [className]: className,
    })}
    type="button"
    {...rest}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
}

export default Button
