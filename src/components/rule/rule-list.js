import React from "react"
import * as PropTypes from "prop-types"

import RuleSelector from "./rule-selector"

const RuleList = ({ headingLevel, rules }) => {
  const Heading = `h${headingLevel}`
  if (rules.length > 0) {
    return (
      <React.Fragment>
        <Heading>Rules</Heading>
        {rules.map(rule => (
          <RuleSelector key={rule.axeId} rule={rule} />
        ))}
      </React.Fragment>
    )
  } else {
    return null
  }
}

RuleList.propTypes = {
  headingLevel: PropTypes.number,
  rules: PropTypes.arrayOf(RuleSelector.propTypes.rule),
}

export default RuleList
