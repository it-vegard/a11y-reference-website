import React, { useContext } from "react"
import * as PropTypes from "prop-types"

import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import AccessibleTextInput from "./text-input"
import CONSTANTS from "../../data/rules/constants"

const TextInput = ({ autoComplete, name, ...rest }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  return (
    <AccessibleTextInput
      autoComplete={
        rules[CONSTANTS.IDENTIFY_INPUT_PURPOSE] !== false
          ? autoComplete
          : undefined
      }
      name={rules[CONSTANTS.LABEL] !== false ? name : undefined}
      {...rest}
    />
  )
}

TextInput.propTypes = {
  autoComplete: PropTypes.string,
  name: PropTypes.string,
}

export { TextInput }
