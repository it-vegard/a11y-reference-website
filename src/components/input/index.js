import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import AccessibleTextInput from "./text-input"
import CONSTANTS from "../../data/rules/constants"

const TextInput = ({ name, ...rest }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  return (
    <AccessibleTextInput
      name={rules[CONSTANTS.LABEL] ? name : undefined}
      {...rest}
    />
  )
}

TextInput.propTypes = {
  name: PropTypes.string,
}

export { TextInput }
