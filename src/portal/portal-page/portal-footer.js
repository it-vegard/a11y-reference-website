import React from "react"
import Container from "../../components/container"
import HeadingLevelContext from "../../components/semantic-heading/heading-level-context"
import TEXTS from "../../data/texts"
import Navigation from "../../components/navigation"
import { useLanguage } from "../../components/language"

const PortalFooter = () => {
  const { language } = useLanguage()
  const PAGES = TEXTS[language].PAGES
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
            heading={TEXTS[language].PORTAL.FOOTER_HEADER}
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

export default PortalFooter
