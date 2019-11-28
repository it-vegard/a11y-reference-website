import React from "react"
import * as PropTypes from "prop-types"
import App from "../components/app"
// import "./returns.css"

const ReturnsPage = ({ location }) => (
  <App pageTitle="Bytte og retur" location={location}>
    <h1>Bytte og retur</h1>
    <p>
      Du kan bytte, returnere og reklamere varer i alle våre Klær for
      alle-butikker gratis.
    </p>
    <p>
      Ta med en utskrift av din kvittering som du har fått tilsendt på mail. Har
      du ikke anledning til å skrive ut kvitteringen selv, kan du få de ansatte
      i butikken til å skrive den ut for deg ved at du videresender kvitteringen
      på mail til butikken du er i.
    </p>
    <p>
      Valgte du faktura som betalingsmåte for ditt kjøp, må fakturaen likevel
      betales. Pengene vil bli utbetalt i butikken dersom du ikke velger en ny
      vare eller tilgodelapp.
    </p>
    <section>
      <h2>Retur til nettbutikken</h2>
      <p>
        Ved retur til nettbutikken benytter du posen du mottok varene i, fyller
        ut returskjemaet og klistrer på retur-adresselappen som ligger vedlagt.
        Returfrakten koster en liten omkostning og vil bli trukket fra
        tilbakebetalingen eller lagt til din faktura. Lever pakken til det samme
        utleveringsstedet hvor du hentet ut pakken din.
      </p>
      <p>
        En retur til nettbutikken kan ta opp mot 20 dager, og du vil motta en
        bekreftelse på mail så snart din retur er fullført. Har du valgt faktura
        som betalingsmåte anbefaler vi deg å logge inn på din
        betalingsleverandør og forlenge forfallsdatoen; da vil du kunne unngå
        gebyr.
      </p>
      <p>
        Vi bytter ikke varer i nettbutikken. Vi tilbakebetaler dine
        penger/oppdaterer din faktura så snart din retur ankommer vårt lager og
        returen er ferdig håndtert. Ønsker du en ny vare eller størrelse, må du
        selv legge inn en bestilling i nettbutikken.
      </p>
      <p>
        Vær oppmerksom på at ordre med leveringsmåten &quot;hent i butikk&quot;
        kun kan returneres tilbake til en av våre fysiske Klær for
        alle-butikker.
      </p>
    </section>
    <section>
      <h2>Tilbakebetaling med kort?</h2>
      <p>
        Når returen din har ankommet lageret og er ferdig håndtert, vil du motta
        en bekreftelse på epost fra oss. Pengene dine vil bli tilbakebetalt til
        den kontoen du benyttet ved betaling. Dette skjer senest 9 dager etter
        at vi har mottatt returen din. Returfrakten koster en lite beløp og vil
        bli trukket fra tilbakebetalingen eller lagt til din faktura.
      </p>
    </section>
    <section>
      <h2>Tilbakebetaling med ekstern faktura?</h2>
      <p>
        Du trenger ikke betale fakturaen før vi mottar din retur. Vi oppdaterer
        din faktura så snart din pakke ankommer vår lager og returen er ferdig
        håndtert. I mellomtiden anbefaler vi deg å logge inn på din
        betalingsleverandør og forlenge forfallsdatoen på din faktura, da vil du
        kunne unngå gebyr (merk deg at forfallsdatoen må forlenges før forfall
        er passert). Du vil motta en bekreftelse på mail så snart din retur er
        fullført, og du kan da logge deg inn på din betalingsleverandør og hente
        ut din oppdaterte faktura.
      </p>
      <p>
        Er fakturaen allerede betalt, vil Klarna ta kontakt med deg få dager
        etter at returen din er håndtert hos oss slik at de kan tilbakebetale
        deg dine penger.
      </p>
    </section>
    <section>
      <h2>Gyldig retur</h2>
      <p>
        En gyldig retur forutsetter at varen er ubrukt og i samme stand som da
        du mottok den, alle merker og prislapper skal fortsatt sitte på. Varer
        med sminkeflekker og lignende anses ikke å være i originaltilstand og
        kan dessverre ikke returneres. Dersom du likevel velger å returnere en
        ugyldig retur vil du ikke få igjen dine penger, og varen vil ikke bli
        sendt tilbake til deg. Hvis vi har gjort en feil, eller hvis varen har
        en produksjonsfeil, betaler vi for frakten tilbake til oss.
      </p>
      <p>
        Retur til vår nettbutikk gjelder kun varer som er kjøpt i nettbutikken
        (ikke varer kjøpt i fysisk butikk).
      </p>
    </section>
    <section>
      <h2>Åpent kjøp</h2>
      <p>
        Du har 30 dagers åpent kjøp fra den dagen du fullførte din bestilling.
        Hvis du har ombestemt deg etter at du har gjort din bestilling, må du
        likevel hente pakken og heller levere den tilbake i en Klær for
        alle-butikk eller sende den i retur til oss.
      </p>
      <p>
        Du som forbruker har rett til å heve et kjøp hvis bestillingen din
        skulle bli forsinket. Hvis Klær for alle kjenner til at varene vil bli
        forsinket, vil vi ta kontakt med deg vedrørende ny leveringsdato. Du kan
        da velge å vente på varene eller heve kjøpet.
      </p>
    </section>
    <section>
      <h2>Uavhentede pakker</h2>
      <p>
        Alle våre ordre sendes fortløpende fra vårt lager, så det er dessverre
        ikke mulig å endre/kansellere en ordre etter at den har blitt bestilt.
        Uavhentede pakker vil bli belastet et gebyr for å dekke
        ekspedisjonsavgift for returfrakt og håndteringskostnader. Gebyret vil
        enten bli trukket fra ved tilbakebetalingen av din retur eller lagt til
        din faktura ved ubetalt faktura.
      </p>
    </section>
    <section>
      <h2>Reklamasjon</h2>
      <p>
        Ønsker du å reklamere på et Klær for alle-produkt, er det enklest å
        gjøre dette i en Klær for alle-butikk. Ta med kvitteringen du har fått
        tilsendt på e-post fra oss. Reklamasjonsretten gjelder i 3 år.
        Reklamasjon gjelder ikke vanlig slitasje, kun produksjonsfeil.
      </p>
      <p>
        Ønsker du å sende din reklamasjon til oss, ber vi deg først kontakte oss
        på epost eller telefon for videre fremgangsmåte. For raskere
        kundebehandling oppgi ditt ordrenummer.
      </p>
    </section>
  </App>
)

ReturnsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default ReturnsPage
