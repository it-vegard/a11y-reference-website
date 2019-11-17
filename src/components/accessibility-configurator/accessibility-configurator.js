import React from "react"
import RuleSection from "../rule/rule-section"

const getRules = data => data.allInternalRule.nodes
const getSuccessCriteria = data => data.allWcagSuccessCriteria.nodes

const AccessibilityConfigurator = ({ data }) => {
  const rules = getRules(data)
  return getSuccessCriteria(data)
    .filter(successCriterion =>
      rules.find(rule => rule.wcagId === successCriterion["ref_id"])
    )
    .map(successCriterion => (
      <RuleSection
        description={successCriterion.description}
        key={successCriterion["ref_id"]}
        rules={rules.filter(rule => rule.wcagId === successCriterion["ref_id"])}
        title={`${successCriterion["ref_id"]} ${successCriterion.title} (${
          successCriterion.level
        })`}
        url={successCriterion.url}
      />
    ))
}

export default AccessibilityConfigurator
