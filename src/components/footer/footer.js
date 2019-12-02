import React from "react"

import TEXTS from "../../data/texts"
import Container from "../container"
import { useLanguage } from "../language"
import NavigationList from "../navigation-list"
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
          <NavigationList
            heading={TEXTS[language].FOOTER_WEB_SHOP_LINKS_HEADER}
            links={webShopLinks}
          />
          <NavigationList
            heading={TEXTS[language].FOOTER_RESOURCES_LINKS_HEADER}
            links={accessibilityToolLinks}
          />
          {/* © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>*/}
        </Container>
      </footer>
    </HeadingLevelContext.Provider>
  )
}

export default Footer
