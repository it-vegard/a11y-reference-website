import React, { useContext } from "react"
import { graphql, useStaticQuery } from "gatsby"

import SlideIn from "../slide-in"
import AccessibilityConfigurator from "./accessibility-configurator"
import ToggleSwitch from "../toggle-switch"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"

const AccessibilitySlideIn = () => {
  const data = useStaticQuery(graphql`
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
          axeId
          wcagId
          metadata {
            description
            help
          }
        }
      }
    }
  `)
  const { rules, setAllRules } = useContext(AccessibilityRulesContext)
  const initialValue = rules[Object.keys(rules)[0]]
  return (
    <SlideIn toggleText="Page rules">
      <div>
        <ToggleSwitch
          checked={initialValue}
          helpText="Override all individually set rules"
          id="all-rules"
          label="Toggle all rules"
          onClick={() => setAllRules(!initialValue)}
        />
      </div>
      <AccessibilityConfigurator data={data} />
    </SlideIn>
  )
}

export default AccessibilitySlideIn
