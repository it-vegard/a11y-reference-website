import React, { useContext } from "react"
import * as PropTypes from "prop-types"
import classNames from "classnames"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"

import "./input.css"

const Input = ({ className, label, name, type }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  return (
    <div className="input-container">
      <label className="label" htmlFor={rules["label"] ? name : undefined}>
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
