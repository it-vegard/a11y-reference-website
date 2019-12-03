import React from "react"
import * as PropTypes from "prop-types"

import RadioButton from "./radio-button"

import "./radio-buttons.css"

const RadioButtons = ({ label, radioButtons = [] }) => (
  <fieldset className="radio-buttons">
    <legend className="radio-buttons__legend">{label}</legend>
    <div className="radio-buttons__container">
      {radioButtons.map(radioButton => (
        <RadioButton key={radioButton.id} {...radioButton} />
      ))}
    </div>
  </fieldset>
)

RadioButtons.propTypes = {
  label: PropTypes.string,
  radioButtons: PropTypes.array,
}

export default RadioButtons
