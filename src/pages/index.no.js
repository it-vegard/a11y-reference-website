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
    text: "Engelsk testside",
    url: "/en/shop",
  },
  {
    flagImage: NorwegianFlag,
    flagImageAlt: "Norwegian flag",
    text: "Norsk testside",
    url: "/no/butikk",
  },
]

const IndexPage = ({ location }) => (
  <PortalPage
    location={location}
    pageTitle="Referansenettsted for universell utforming"
  >
    <Heading headingLevel={2} className="heading heading-larger">
      Referansenettsted for universell utforming
    </Heading>
    <p className="stack--large">
      Lær mer om siden i <Link url="/en/about">om oss</Link> seksjonen.
    </p>
    <Heading headingLevel={3}>Testsider</Heading>
    <LanguageList languages={languages} />
    <Grid numberOfColumns={3} isWide={true}>
      <Card
        title="Hvordan komme i gang"
        link="/en/how-to"
        text="Denne siden kan brukes til flere formål. Lær hvordan man identifiserer tilgjengelighetsfeil, gjennomfør brukertesting, lær 'best practices' eller sammelign automatiserte testverktøy for universell utforming."
      />
      <Card
        title="Komponentbibliotek"
        link="/docs"
        text="Vi ønsker at siden skal være et eksempel på hvordan man lager tilgjengelige komponenter for nettsider. For å gjøre det enklere å komme i gang, har vi laget et design system og et komponentbibliotek."
      />
      <Card
        title="Øvingsoppgaver"
        text="Vi har forberedt flere oppgaver som kan brukes som læringsverktøy for studieprogrammer eller i kurs."
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
