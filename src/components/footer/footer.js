import React from "react"

import TEXTS from "../../data/texts"
import Container from "../container"
import { useLanguage } from "../language"
import Navigation from "../navigation"
import HeadingLevelContext from "../semantic-heading/heading-level-context"

import "./footer.css"

const Footer = () => {
  const { language } = useLanguage()
  const PAGES = TEXTS[language].PAGES
  const webShopLinks = [PAGES.DELIVERY, PAGES.RETURNS, PAGES.TERMS]

  const accessibilityToolLinks = [
    PAGES.ABOUT,
    PAGES.CREDITS,
    PAGES.HOW_TO,
    PAGES.SETTINGS,
  ]
  return (
    <HeadingLevelContext.Provider value={2}>
      <footer className="footer">
        <Container>
          <Navigation
            heading={TEXTS[language].FOOTER_WEB_SHOP_LINKS_HEADER}
            links={webShopLinks.map(link => ({
              title: link.TITLE,
              url: link.URL,
            }))}
          />
          <Navigation
            heading={TEXTS[language].FOOTER_RESOURCES_LINKS_HEADER}
            links={accessibilityToolLinks.map(link => ({
              title: link.TITLE,
              url: link.URL,
            }))}
          />
        </Container>
      </footer>
    </HeadingLevelContext.Provider>
  )
}

export default Footer
