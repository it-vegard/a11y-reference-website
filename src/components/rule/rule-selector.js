import React, { useContext } from "react"
import AccessibilityRules from "../accessibility-rules"
import ToggleSwitch from "../toggle-switch"
import * as PropTypes from "prop-types"

const RuleSelector = ({ rule }) => {
  const { rules, setRule } = useContext(AccessibilityRules.context)
  const currentValue = rules[rule.key] || false
  return (
    <ToggleSwitch
      checked={currentValue}
      helpText={rule.metadata.description}
      id={rule.key}
      key={rule.key}
      label={rule.metadata.help}
      onClick={() => setRule(rule.key, !currentValue)}
    />
  )
}

RuleSelector.propTypes = {
  rule: PropTypes.shape({
    key: PropTypes.string,
    metadata: PropTypes.shape({
      description: PropTypes.string,
      help: PropTypes.string,
    }),
  }),
}

export default RuleSelector
