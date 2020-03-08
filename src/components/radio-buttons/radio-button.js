import React, { useContext } from "react"
import * as PropTypes from "prop-types"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"

import "./radio-button.css"

/**
 * Based on Adrian Roselli's "Under-Engineered Custom Radio Buttons" [https://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html]
 */

const RadioButton = ({ checked, id, label, name, onChange, value }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  return (
    <div className="radio-button__container">
      <input
        checked={checked}
        className="radio-button"
        name={name}
        id={id}
        onChange={onChange}
        type="radio"
        value={value}
      />
      <label
        className="radio-button__label"
        htmlFor={rules["label"] ? id : undefined}
      >
        {label}
      </label>
    </div>
  )
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
}

export default RadioButton
