import React from "react"

const AccessibilityRulesContext = React.createContext({
  rules: [],
  setRule: () => {},
  setAllRules: () => {},
})

export default AccessibilityRulesContext
