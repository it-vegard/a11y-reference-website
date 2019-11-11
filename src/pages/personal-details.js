import React from "react"
import * as PropTypes from "prop-types"
import App from "../components/app"
import PersonalDetailsForm from "../components/personal-details-form"
import Heading from "../components/semantic-heading"

const PersonalDetailsPage = ({ location }) => (
  <App location={location} pageTitle="Personal Details">
    <Heading>Personal details</Heading>
    <PersonalDetailsForm />
  </App>
)

PersonalDetailsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default PersonalDetailsPage
