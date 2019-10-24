import React from "react"
import * as PropTypes from "prop-types"

import RuleList from "./rule-list"

import "./rule-section.css"

const RuleSection = ({ description, headingLevel, rules, title, url }) => {
  const Heading = `h${headingLevel}`
  return (
    <section className="rule__section">
      <Heading>
        <a href={url} className="link">
          {title}
        </a>
      </Heading>
      {description && <p>{description}</p>}
      {rules && <RuleList headingLevel={headingLevel + 1} rules={rules} />}
    </section>
  )
}

RuleSection.propTypes = {
  description: PropTypes.string,
  headingLevel: PropTypes.number,
  rules: RuleList.propTypes.rules,
  title: PropTypes.string,
  url: PropTypes.string,
}

export default RuleSection
