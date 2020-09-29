import React from "react"
import * as PropTypes from "prop-types"
import classNames from "classnames"

import "./input.css"

const Input = ({ autoComplete, className, label, name, type }) => {
  return (
    <div className="input-container">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
        autoComplete={autoComplete}
        className={classNames("input", {
          [className]: className,
        })}
        id={name}
        name={name}
        type={type}
      />
    </div>
  )
}

Input.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Input
