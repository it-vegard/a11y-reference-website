import React from "react"
import * as PropTypes from "prop-types"

import RuleSelector from "./rule-selector"
import { Section } from "../semantic-region"
import Heading from "../semantic-heading"

const RuleList = ({ rules, variant }) => {
  if (rules.length > 0) {
    return (
      <Section>
        <Heading>Rules</Heading>
        {rules.map(rule => (
          <RuleSelector key={rule.key} rule={rule} variant={variant} />
        ))}
      </Section>
    )
  } else {
    return null
  }
}

RuleList.propTypes = {
  headingLevel: PropTypes.number,
  rules: PropTypes.arrayOf(RuleSelector.propTypes.rule),
  variant: PropTypes.string.isRequired,
}

export default RuleList
