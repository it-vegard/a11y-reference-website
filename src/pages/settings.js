import React from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"

import App from "../components/app"
import RuleSection from "../components/rule/rule-section"
import Heading from "../components/semantic-heading"

const getRules = data => data.allInternalRule.nodes
const getSuccessCriteria = data => data.allWcagSuccessCriteria.nodes

const SettingsPage = ({ data, location }) => {
  const rules = getRules(data)
  return (
    <App location={location} pageTitle="Settings">
      <Heading>Settings</Heading>
      <p>
        On this page you can switch on/off individual accessibility rules, so
        you can test each bug separately or remove barriers for testing the rest
        of the bugs. Turn the rule off to switch to the inaccessible version.
      </p>
      <p>
        The bugs are ordered according to the{" "}
        <abbr title="Web Content Accessibility Guidelines">WCAG</abbr>{" "}
        guidelines.
      </p>
      {getSuccessCriteria(data)
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
    </App>
  )
}

SettingsPage.propTypes = {
  data: PropTypes.shape({
    allInternalRule: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          axeId: PropTypes.string,
          wcagId: PropTypes.string,
          id: PropTypes.string,
          metadata: PropTypes.shape({
            description: PropTypes.string,
            help: PropTypes.string,
          }),
        })
      ),
    }),
    allWcagSuccessCriteria: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          description: PropTypes.string,
          level: PropTypes.string,
          ref_id: PropTypes.string,
          title: PropTypes.string,
          url: PropTypes.string,
        })
      ),
    }),
  }),
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export const query = graphql`
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
`

export default SettingsPage
