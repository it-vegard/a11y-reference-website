import React from "react"
import * as PropTypes from "prop-types"

import Banner from "../banner"
import Container from "../container"
import TEXTS from "../../data/texts"
import { useLanguage } from "../language"
import Link from "../link"
import Heading from "../semantic-heading"

import "./campaign-banner.css"

const CampaignBanner = ({ heading, text }) => {
  const { language } = useLanguage()

  const navigateToCampaign = event => {
    event.preventDefault()
    event.stopPropagation()
    window.location.href = TEXTS[language].PAGES.CAMPAIGN.URL
  }

  return (
    <Banner className="campaign-banner" onClick={navigateToCampaign}>
      <Container>
        <Heading className="campaign-banner__heading">
          <Link title={heading} url={TEXTS[language].PAGES.CAMPAIGN.URL} />
        </Heading>
        {text && <p className="campaign-banner__text">{text}</p>}
      </Container>
    </Banner>
  )
}

CampaignBanner.propTypes = {
  heading: PropTypes.string.isRequired,
  text: PropTypes.string,
}

export default CampaignBanner
