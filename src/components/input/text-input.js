import React from "react"
import * as PropTypes from "prop-types"
import classNames from "classnames"

import Input from "./input"

const TextInput = ({ autoComplete, className, label, name }) => (
  <Input
    autoComplete={autoComplete}
    className={classNames("text-input", {
      [className]: className,
    })}
    label={label}
    name={name}
    type="text"
  />
)

TextInput.propTypes = {
  autoComplete: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
}

export default TextInput
