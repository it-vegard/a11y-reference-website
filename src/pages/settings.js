import React from "react"
import * as PropTypes from "prop-types"

import Heading from "../components/semantic-heading"
import { AccessibilityConfigurator } from "../components/accessibility-configurator"
import PortalPage from "../portal/portal-page"

const SettingsPage = ({ location }) => {
  return (
    <PortalPage location={location} pageTitle="Settings">
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
      <AccessibilityConfigurator />
    </PortalPage>
  )
}

SettingsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default SettingsPage
