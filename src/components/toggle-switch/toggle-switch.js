import React from "react"
import * as PropTypes from "prop-types"

import Paragraph from "../paragraph"

import "./toggle-switch.css"

const getLabelId = id => `toggle-switch-${id}-label`
const getHelpTextId = id => `toggle-switch-${id}-help`

const ToggleSwitch = ({ checked = false, helpText, id, onClick, label }) => {
  return (
    <div className="toggle-switch">
      <span
        className="toggle-switch__label"
        aria-hidden="true"
        id={getLabelId(id)}
      >
        {label}
      </span>
      <button
        aria-checked={checked}
        aria-describedby={getHelpTextId(id)}
        aria-labelledby={getLabelId(id)}
        className="toggle-switch__button"
        onClick={onClick}
        role="switch"
        type="button"
      >
        <span hidden={!checked}>On</span>
        <span hidden={checked}>Off</span>
      </button>
      <Paragraph id={getHelpTextId(id)}>{helpText}</Paragraph>
    </div>
  )
}

ToggleSwitch.propTypes = {
  checked: PropTypes.bool,
  helpText: PropTypes.string,
  id: PropTypes.string,
  onClick: PropTypes.func,
  label: PropTypes.string,
}

export default ToggleSwitch
