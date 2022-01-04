import React from "react"
import * as PropTypes from "prop-types"

import { Article } from "../semantic-region"
import Heading from "../semantic-heading"
import RuleList from "./rule-list"

import "./rule-section.css"

const RuleSection = ({ description, rules, title, url, variant }) => {
  return (
    <Article className="rule__section">
      <Heading>
        <a href={url} className="link">
          {title}
        </a>
      </Heading>
      {description && <p>{description}</p>}
      {rules && <RuleList rules={rules} variant={variant} />}
    </Article>
  )
}

RuleSection.propTypes = {
  description: PropTypes.string,
  headingLevel: PropTypes.number,
  rules: RuleList.propTypes.rules,
  title: PropTypes.string,
  url: PropTypes.string,
  variant: PropTypes.string.isRequired,
}

export default RuleSection
