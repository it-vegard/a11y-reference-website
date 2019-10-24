import React from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"
import AccessibilityRules from "../components/accessibility-rules"
import RuleSection from "../components/rule/rule-section"

const getRules = data => data.allInternalRule.nodes
const getSuccessCriteria = data => data.allWcagSuccessCriteria.nodes

const SettingsPage = ({ data }) => {
  const rules = getRules(data)
  return (
    <AccessibilityRules>
      <Layout>
        <SEO title="Settings" lang="en" />
        <article>
          <h1>Settings</h1>
          <p>
            On this page you can switch on/off individual accessibility bugs, so
            you can test each bug separately or remove barriers for testing the
            rest of the bugs.
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
                headingLevel={2}
                key={successCriterion["ref_id"]}
                rules={rules.filter(
                  rule => rule.wcagId === successCriterion["ref_id"]
                )}
                title={`${successCriterion["ref_id"]} ${
                  successCriterion.title
                } (${successCriterion.level})`}
                url={successCriterion.url}
              />
            ))}
        </article>
      </Layout>
    </AccessibilityRules>
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
