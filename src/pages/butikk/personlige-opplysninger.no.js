import React from "react"
import * as PropTypes from "prop-types"

import App from "../../components/app"
import TEXTS from "../../data/texts/texts.no"
import PersonalDetailsPage from "../../page-templates/personal-details-page"

const PersonalDetails = ({ location }) => {
  return (
    <App
      location={location}
      pageTitle={TEXTS.PAGES.CHECKOUT_PERSONAL_DETAILS.TITLE}
    >
      <PersonalDetailsPage />
    </App>
  )
}

PersonalDetails.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default PersonalDetails
