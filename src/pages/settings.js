import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import * as PropTypes from "prop-types"

import App from "../components/app"
import Heading from "../components/semantic-heading"
import { AccessibilityConfigurator } from "../components/accessibility-configurator"

const SettingsPage = ({ location }) => {
  const data = useStaticQuery(graphql`
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
  `)
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
      <AccessibilityConfigurator data={data} />
    </App>
  )
}

SettingsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default SettingsPage
