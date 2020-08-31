import React from "react"
import * as PropTypes from "prop-types"
import NorwegianFlag from "svg-country-flags/svg/no.svg"
import GreatBritishFlag from "svg-country-flags/svg/us.svg"

import Heading from "../components/heading/heading"
import PortalPage from "../portal/portal-page"
import Link from "../components/link/link"
import Card from "../components/card"
import Grid from "../components/grid"
import LanguageList from "../components/language/language-list"

const languages = [
  {
    flagImage: GreatBritishFlag,
    flagImageAlt: "English flag",
    text: "English test site",
    url: "/en/shop",
  },
  {
    flagImage: NorwegianFlag,
    flagImageAlt: "Norwegian flag",
    text: "Norwegian test site",
    url: "/no/butikk",
  },
]

const IndexPage = ({ location }) => (
  <PortalPage location={location} pageTitle="Accessibility Reference Website">
    <Heading headingLevel={2} className="heading heading-larger">
      An accessibility reference site
    </Heading>
    <p className="stack--large">
      Learn more about this site in our <Link url="/en/about">about us</Link>{" "}
      section.
    </p>
    <Heading headingLevel={3}>Test sites</Heading>
    <LanguageList languages={languages} />
    <Grid numberOfColumns={3} isWide={true}>
      <Card
        title="How to get started"
        link="/en/how-to"
        text="This site can be used for several different use cases. Practice identifying accessibility issues, perform user testing, learn best practices or compare automated accessibility testing tools."
      />
      <Card
        title="Component library"
        link="/docs"
        text="We want this site to be a source of best practices for how to create accessible components. To make it easier to get started and using these components, we have created a design system and a component library."
      />
      <Card
        title="Practice assignments"
        text="We have prepared several tasks and assignments that can be used as learning tools in classes or as material for workshops."
        ribbon="TODO"
        link="/en/how-to"
      />
    </Grid>
  </PortalPage>
)

IndexPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default IndexPage
