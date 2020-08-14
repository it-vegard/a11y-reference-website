import React from "react"
import * as PropTypes from "prop-types"
import classNames from "classnames"

import "./input.css"

const Input = ({ className, label, name, type }) => {
  return (
    <div className="input-container">
      <label className="label" htmlFor={name}>
        {label}
      </label>
      <input
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
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
}

export default Input
