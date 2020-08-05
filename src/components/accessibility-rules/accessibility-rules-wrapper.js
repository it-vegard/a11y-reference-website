import React, { useEffect, useState } from "react"
import * as PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import AccessibilityRulesContext from "./accessibility-rules-context"

const ruleObjectName = "rules"

const toggleAllRulesOnOrOff = () =>
  location.search.split("?enableRules=")[1]
    ? location.search.split("?enableRules=")[1].split("&")[0]
    : false

const setDefaultRules = (rules, defaultValue = true) =>
  rules.reduce(
    (acc, curr) => ({
      ...acc,
      [curr.key]: defaultValue,
    }),
    {}
  )

const getInitialRules = defaultRules => {
  const shouldToggleAllRulesOnOrOff = toggleAllRulesOnOrOff()
  const storedRules = window
    ? JSON.parse(window.sessionStorage.getItem(ruleObjectName))
    : null
  if (shouldToggleAllRulesOnOrOff) {
    return setDefaultRules(
      defaultRules,
      JSON.parse(shouldToggleAllRulesOnOrOff)
    )
  } else if (storedRules) {
    return storedRules
  } else {
    return setDefaultRules(defaultRules)
  }
}

const AccessibilityRulesWrapper = ({ children }) => {
  const data = useStaticQuery(graphql`
    {
      allInternalRule {
        nodes {
          key
        }
      }
    }
  `)

  const [rules, setRules] = useState({})

  useEffect(() => {
    const initialRules = getInitialRules(data.allInternalRule.nodes)
    setRules(initialRules)
  }, [])

  const setRule = (key, value) => {
    const newRules = {
      ...rules,
      [key]: value,
    }
    setRules(newRules)
    window.sessionStorage.setItem(ruleObjectName, JSON.stringify(newRules))
  }

  const setAllRules = value => {
    const newRules = Object.keys(rules).reduce(
      (nextRules, ruleId) => ({
        ...nextRules,
        [ruleId]: value,
      }),
      {}
    )
    setRules(newRules)
    window.sessionStorage.setItem(ruleObjectName, JSON.stringify(newRules))
  }

  return (
    <AccessibilityRulesContext.Provider value={{ rules, setRule, setAllRules }}>
      {children}
    </AccessibilityRulesContext.Provider>
  )
}

AccessibilityRulesWrapper.propTypes = {
  children: PropTypes.node,
}

AccessibilityRulesWrapper.context = AccessibilityRulesContext

export default AccessibilityRulesWrapper
