import React, { useContext } from "react"
import AccessibilityRules from "../accessibility-rules"
import ToggleSwitch from "../toggle-switch"
import * as PropTypes from "prop-types"

const RuleSelector = ({ rule }) => {
  const { rules, setRule } = useContext(AccessibilityRules.context)
  const currentValue = rules[rule.axeId] || false
  return (
    <ToggleSwitch
      checked={currentValue}
      helpText={rule.metadata.description}
      id={rule.axeId}
      key={rule.axeId}
      label={rule.metadata.help}
      onClick={() => setRule(rule.axeId, !currentValue)}
    />
  )
}

RuleSelector.propTypes = {
  rule: PropTypes.shape({
    axeId: PropTypes.string,
    metadata: PropTypes.shape({
      description: PropTypes.string,
      help: PropTypes.string,
    }),
  }),
}

export default RuleSelector
