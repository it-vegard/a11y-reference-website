import React, { useEffect, useState } from "react"
import * as PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import AccessibilityRulesContext from "./accessibility-rules-context"

const ruleObjectName = "rules"

const getInitialRules = defaultRules => {
  const storedRules = window
    ? JSON.parse(window.sessionStorage.getItem(ruleObjectName))
    : null
  if (storedRules) {
    return storedRules
  } else {
    return defaultRules.reduce(
      (acc, curr) => ({
        ...acc,
        [curr.axeId]: true,
      }),
      {}
    )
  }
}

const AccessibilityRulesWrapper = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allInternalRule {
        nodes {
          axeId
        }
      }
    }
  `)

  const [rules, setRules] = useState({})

  useEffect(() => {
    const initialRules = getInitialRules(data.allInternalRule.nodes)
    setRules(initialRules)
  }, [])

  const setRule = (axeId, value) => {
    const newRules = {
      ...rules,
      [axeId]: value,
    }
    setRules(newRules)
    window.sessionStorage.setItem(ruleObjectName, JSON.stringify(newRules))
  }

  return (
    <AccessibilityRulesContext.Provider value={{ rules, setRule }}>
      {children}
    </AccessibilityRulesContext.Provider>
  )
}

AccessibilityRulesWrapper.propTypes = {
  children: PropTypes.element,
}

AccessibilityRulesWrapper.context = AccessibilityRulesContext

export default AccessibilityRulesWrapper
