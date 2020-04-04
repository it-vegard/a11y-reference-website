import React from "react"
import * as PropTypes from "prop-types"
import classNames from "classnames"

import "./button.css"

const Button = ({ children, className, setRef, type, ...rest }) => (
  <button
    className={classNames("button", {
      [className]: className,
    })}
    type={type}
    ref={setRef}
    {...rest}
  >
    {children}
  </button>
)

Button.propTypes = {
  children: PropTypes.node,
  /**
   * Additional classes for adding custom styling
   */
  className: PropTypes.string,
  setRef: PropTypes.object,
  /**
   * HTML button type
   */
  type: PropTypes.oneOf(["button", "submit"]),
}

Button.defaultProps = {
  type: "button",
}

export default Button
