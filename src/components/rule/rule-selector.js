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
      helpText={rule.description}
      id={rule.key}
      key={rule.key}
      label={rule.title}
      onClick={() => setRule(rule.key, !currentValue)}
    />
  )
}

RuleSelector.propTypes = {
  rule: PropTypes.shape({
    key: PropTypes.string,
    description: PropTypes.string,
    title: PropTypes.string,
  }),
}

export default RuleSelector
