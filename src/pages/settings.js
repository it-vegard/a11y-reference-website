import React from "react"
import { graphql } from "gatsby"
import * as PropTypes from "prop-types"

import Layout from "../components/layout"
import SEO from "../components/seo"

const RuleSelector = ({ rule }) => {
  return (
    <React.Fragment key={rule.axeId}>
      <label
        style={{ display: "block", marginBottom: "1rem" }}
        aria-describedby={`${rule.axeId}-description`}
      >
        <input
          type="checkbox"
          name={rule.axeId}
          style={{ marginRight: "1rem" }}
        />
        {rule.metadata.help}
      </label>
      <p id={`${rule.axeId}-description`}>{rule.metadata.description}</p>
    </React.Fragment>
  )
}

RuleSelector.propTypes = {
  rule: PropTypes.shape({
    axeId: PropTypes.string,
    metadata: PropTypes.shape({
      description: PropTypes.string,
      help: PropTypes.string,
    }),
  }),
}

const WCAGLevel = ({ content, rules, headingLevel = 2 }) => {
  const subItems = content["guidelines"] || content["success_criteria"] || []
  const Heading = `h${headingLevel}`
  const applicableRules = rules.filter(
    rule => rule.wcagId === content["ref_id"]
  )
  return (
    <section
      key={content["ref_id"]}
      style={{
        padding: "1rem 1rem 1rem 2rem",
        backgroundColor: "#fefefe",
        boxShadow: "inset 0 0 0.5rem #eee",
        border: "0.1rem solid #ddd",
      }}
    >
      <Heading>
        <a href={content.url}>
          {content["ref_id"]} {content.title}
          {content.level ? ` (${content.level})` : ""}
        </a>
      </Heading>
      <p>{content.description}</p>
      {content.references && (
        <ul>
          {content.references.map(reference => (
            <li key={reference.url}>
              <a href={reference.url}>{reference.title}</a>
            </li>
          ))}
        </ul>
      )}
      {subItems.map(subItem => (
        <WCAGLevel
          content={subItem}
          key={subItem["ref_id"]}
          rules={rules}
          headingLevel={headingLevel + 1}
        />
      ))}
      {applicableRules.length > 0 && (
        <React.Fragment>
          <h5>Rules</h5>
          <form>
            {applicableRules.map(rule => (
              <RuleSelector key={rule.axeId} rule={rule} />
            ))}
          </form>
        </React.Fragment>
      )}
    </section>
  )
}

WCAGLevel.propTypes = {
  content: PropTypes.shape({
    description: PropTypes.string,
    guidelines: PropTypes.array,
    level: PropTypes.string,
    ref_id: PropTypes.string,
    references: PropTypes.array,
    success_criteria: PropTypes.array,
    title: PropTypes.string,
    url: PropTypes.string,
  }),
  headingLevel: PropTypes.number,
  rules: PropTypes.array,
}

const getWcagPrinciples = data => data.allWcagPrinciple.nodes
const getRules = data => data.allInternalRule.nodes

const SettingsPage = ({ data }) => {
  const principles = getWcagPrinciples(data)
  const rules = getRules(data)
  return (
    <Layout>
      <SEO title="Settings" />
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
          guidelines
        </p>
        {principles.map(principle => (
          <WCAGLevel
            content={principle}
            key={principle["ref_id"]}
            rules={rules}
          />
        ))}
      </article>
    </Layout>
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
    allWcagPrinciple: PropTypes.shape({
      nodes: PropTypes.arrayOf(
        PropTypes.shape({
          url: PropTypes.string,
          title: PropTypes.string,
          ref_id: PropTypes.string,
          guidelines: PropTypes.arrayOf(
            PropTypes.shape({
              url: PropTypes.string,
              title: PropTypes.string,
              success_criteria: PropTypes.arrayOf(
                PropTypes.shape({
                  description: PropTypes.string,
                  level: PropTypes.string,
                  notes: PropTypes.arrayOf(
                    PropTypes.shape({
                      content: PropTypes.string,
                    })
                  ),
                  ref_id: PropTypes.string,
                  references: PropTypes.arrayOf(
                    PropTypes.shape({
                      url: PropTypes.string,
                      title: PropTypes.string,
                    })
                  ),
                  special_cases: PropTypes.arrayOf(
                    PropTypes.shape({
                      description: PropTypes.string,
                      title: PropTypes.string,
                      type: PropTypes.oneOf([
                        "exception",
                        "at_least_one",
                        "all_true",
                      ]),
                    })
                  ),
                  title: PropTypes.string,
                  url: PropTypes.string,
                })
              ),
              references: PropTypes.arrayOf(
                PropTypes.shape({
                  title: PropTypes.string,
                  url: PropTypes.string,
                })
              ),
              description: PropTypes.string,
              ref_id: PropTypes.string,
            })
          ),
          description: PropTypes.string,
        })
      ),
    }),
  }),
}

export const query = graphql`
  {
    allInternalRule {
      nodes {
        axeId
        wcagId
        id
        metadata {
          description
          help
        }
      }
    }
    allWcagPrinciple {
      nodes {
        url
        title
        ref_id
        guidelines {
          url
          title
          success_criteria {
            description
            level
            notes {
              content
            }
            ref_id
            references {
              url
              title
            }
            special_cases {
              description
              title
              type
            }
            title
            url
          }
          references {
            title
            url
          }
          description
          ref_id
        }
        description
      }
    }
  }
`

export default SettingsPage
