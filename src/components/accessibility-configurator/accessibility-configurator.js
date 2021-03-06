import React, { Fragment, useContext } from "react"
import RuleSection from "../rule/rule-section"
import { graphql, useStaticQuery } from "gatsby"
import AccessibilityRules from "../accessibility-rules"
import ToggleSwitch from "../toggle-switch"

const getRules = data => data.allInternalRule.nodes
const getSuccessCriteria = data => data.allWcagSuccessCriteria.nodes

const GlobalRulesToggle = () => {
  const { rules, setAllRules } = useContext(AccessibilityRules.context)
  const firstRule = Object.keys(rules)[0]
  const initialValue = rules[firstRule]
  return (
    <div className="rule__section">
      <ToggleSwitch
        checked={initialValue}
        helpText="Override all individually set rules"
        id="all-rules"
        label="Toggle all rules"
        onClick={() => setAllRules(!initialValue)}
      />
    </div>
  )
}

const AccessibilityConfigurator = () => {
  const ruleData = useStaticQuery(graphql`
    {
      allWcagSuccessCriteria {
        nodes {
          description
          level
          ref_id
          title
          url
        }
      }
      allInternalRule {
        nodes {
          key
          wcagId
          description
          title
        }
      }
    }
  `)
  const rules = getRules(ruleData)
  return (
    <Fragment>
      <GlobalRulesToggle />
      {getSuccessCriteria(ruleData)
        .filter(successCriterion =>
          rules.find(rule => rule.wcagId === successCriterion["ref_id"])
        )
        .map(successCriterion => (
          <RuleSection
            description={successCriterion.description}
            key={successCriterion["ref_id"]}
            rules={rules.filter(
              rule => rule.wcagId === successCriterion["ref_id"]
            )}
            title={`${successCriterion["ref_id"]} ${successCriterion.title} (${
              successCriterion.level
            })`}
            url={successCriterion.url}
          />
        ))}
    </Fragment>
  )
}

export default AccessibilityConfigurator
