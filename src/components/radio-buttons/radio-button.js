import React from "react"
import * as PropTypes from "prop-types"

import "./radio-button.css"

/**
 * Based on Adrian Roselli's "Under-Engineered Custom Radio Buttons" [https://adrianroselli.com/2017/05/under-engineered-custom-radio-buttons-and-checkboxen.html]
 */

const RadioButton = ({ checked, id, label, name, onChange, value }) => {
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
      <label className="radio-button__label" htmlFor={id}>
        {label}
      </label>
    </div>
  )
}

RadioButton.propTypes = {
  checked: PropTypes.bool,
  id: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string.isRequired,
}

export default RadioButton
