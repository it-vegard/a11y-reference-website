import React, { useContext } from "react"

import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import AccessibleRadioButtons from "./radio-buttons"
import CONSTANTS from "../../data/rules/constants"

const RadioButtons = ({ radioButtons, ...rest }) => {
  const { rules } = useContext(AccessibilityRulesContext)
  const mappedRadioButtons = rules[CONSTANTS.LABEL]
    ? radioButtons
    : radioButtons.map(radioButton => ({
        ...radioButton,
        id: undefined,
      }))
  return <AccessibleRadioButtons radioButtons={mappedRadioButtons} {...rest} />
}

RadioButtons.propTypes = AccessibleRadioButtons.propTypes

export default RadioButtons
