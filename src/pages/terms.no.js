import React from "react"
import * as PropTypes from "prop-types"
import App from "../components/app"

const TermsPage = ({ location }) => (
  <App pageTitle="Kjøpsvilkår" location={location}>
    <h1>Kjøpsvilkår</h1>
    <p>Sist oppdatert: 19. nov. 2019</p>
    <p>
      Betingelsene nedenfor gjelder alle inngåtte avtaler for kjøp og levering
      av varer fra Klær for alle. Kjøpsvilkårene kan endres uten varsel, og
      datoen ovenfor vil vise når betingelsene ble justert sist. Vi ber deg
      alltid om å lese igjennom kjøpsvilkårene før du bestiller. Når du
      godkjenner kjøpet ditt hos oss, godkjenner du også kjøpsvilkårene. Kjøpet
      er utført når du har fått ordrebekreftelsen, og det er ditt ansvar som
      kunde å sørge for at de opplysningene som du har gitt oss som navn,
      e-postadresse og postadresse stemmer.
    </p>
    <section>
      <h2>Priser og avgifter</h2>
      <p>
        Alle priser er i norske kroner (NOK) , inkludert gjeldende moms. Det
        tilkommer en fraktavgift på alle bestillinger under kr 600,-. Priser i
        butikk og online kan i noen tilfeller variere, og vi forbeholder oss
        retten til å endre våre priser.
      </p>
    </section>
    <section>
      <h2>Betaling</h2>
      <p>
        I vår nettbutikk kan du velge å betale med Vipps, kort, faktura eller
        gavekort.
      </p>
    </section>
    <section>
      <h2>Faktura</h2>
      <p>
        Velger du faktura som betalingsmåte er det vår samarbeidspartner som har
        ansvar for å følge opp betalingen. Betalingsleverandør bruker dine
        personopplysninger til å bedømme om du kvalifiserer til å bruke
        betalingsmetodene deres. Opplysningene som brukes er navn, adresse,
        e-postadresse, telefonnummer, betalingshistorikk samt
        bestillingsinformasjon slik som betalingsmetode, frakttype,
        bestillingsdetaljer og lignende.
      </p>
      <p>
        Bruken av dine opplysninger reguleres i samsvar med gjeldende
        personvernlovgivning og betalingsleverandørens personvernerklæring.
      </p>
      <p>
        Vær oppmerksom på at du mottar fakturaen på e-post, det er derfor svært
        viktig at du taster inn riktig e-postadresse.
      </p>
      <p>
        Det er lurt å sjekke innboksen etter at kjøpet er gjennomført for å se
        om du har mottatt en ordrebekreftelse.
      </p>
      <p>
        Har du mottatt ordrebekreftelsen, kan du være trygg på at du har tastet
        riktig e-postadresse. Ta kontakt med vår kundeservice dersom du ikke har
        fått ordrebekreftelsen på e-post.
      </p>
    </section>
    <section>
      <h2>Betalingsleverandørens betalingsmetoder</h2>
      <p>
        I samarbeid med vår betalingsleverandør tilbyr vi følgende
        betalingsmetoder. Betalingen går alltid direkte til betalingsleverandør.
      </p>
      <p>
        Faktura: Forfallsdato er 14 dager fra tidspunktet varene er sendt ut.
        Fakturavilkårene finner du lenger nede.
      </p>
      <p>
        Konto: Betalingsleverandørens konto er en rammekreditt fra
        betalingsleverandøren som gir forbrukere mulighet til å betale sine kjøp
        i månedlige avdrag med 1/24 (minimum 95 NOK) av totalbeløpet. Mer
        informasjon om betalingsleverandørens konto, samt alminnelige
        fakturavilkår og standardiserte europeiske opplysninger om
        forbrukerkreditt finner du lenger nede.
      </p>
      <p>
        For å kunne tilby deg å bruke betalingsleverandørens betalingsmetoder,
        er vi nødt til å dele visse opplysninger om deg med
        betalingsleverandøren. Dette skjer bare dersom du velger
        betalingsleverandør som betalingsmetode.
      </p>
    </section>
    <section>
      <h2>Kort</h2>
      <p>
        Ønsker du å betale med kort, kan du velge om du vil betale med Visa
        eller Mastercard. Beløpet reserveres ved bestilling, men trekkes først
        når varen er pakket og sendt.
      </p>
      <p>
        Betalingen blir behandlet av vår samarbeidspartner som er en sikker
        elektronisk betalingspartner for Visa og Mastercard. Med partneren vår
        har du de samme garantier og den samme trygghet som når du handler i
        butikk.
      </p>
      <p>
        Partneren vår behandler kortinformasjonen på korrekt måte i henhold til
        den internasjonale sikkerhetsstandarden PCI DSS som kortselskapene VISA,
        MasterCard, Diners, American Express og JCB står bak. Dette innebærer at
        kortopplysningene dine håndteres på en svært sikker måte.
      </p>
      <p>
        Betalingssidene er sikret med SSL, og alle kortdetaljer er kryptert.
        Dette betyr at ingen kan lese kredittkortnummer, navn eller adresse når
        informasjonen blir sendt over Internett.
      </p>
      <p>
        Når du handler med kort, forbeholder vi oss retten til å foreta en
        personkontroll. Klær for alle forbeholder seg retten til å kontrollere
        kortets gyldighet, adresseopplysningene på kjøperen og at det er dekning
        for kjøpesummen. Klær for alle forbeholder seg retten til å annullere
        kjøpet.
      </p>
    </section>
    <section>
      <h2>Gavekort</h2>
      <p>
        Har du et gavekort fra Klær for alle, kan du benytte deg av dette ved å
        taste in den 16-sifrede koden og den 5-sifrede PIN-koden i kassen.
        PIN-koden skrapes frem på baksiden av kortet.
      </p>
      <p>Les mer om sikkerhet rundt betaling under vår personvernerklæring.</p>
    </section>
    <section>
      <h2>Levering</h2>
      <p>
        Vi sender til Norge, Sverige og Finland, samt hele Skandinavia. Normal
        leveringstid er 1-6 hverdager. For levering i Norge skjer leveringen med
        Posten. Du vil motta en SMS med pakkereferanse, når pakken har ankommet
        ditt utleveringssted. På ordrekvittering din finner du link til sporing
        av din pakke, slik at du kan følge pakken din frem til
        utleveringsstedet.
      </p>
      <p></p>
    </section>
    <section>
      <h2>Transportskade eller pakke som ikke kommer</h2>
      <p>
        Om varen blir skadet eller borte under transport til kunden, er Klær for
        alle ansvarlig. Kontakt oss så snart du oppdager eventuelt skade/avvik.
        En eventuell skade på pakken må meldes i fra om til utleveringsstedet
        slik at skaden blir registrert hos transportselskapet.
      </p>
    </section>
    <section>
      <h2>Retur av varer</h2>
      <p>
        Ønsker du å levere tilbake en vare kan du gjøre dette i en Klær for
        alle-butikk, eller ved å sende varen i retur til vår nettbutikk.
        Oversikt over våre Klær for alle-butikker finner du på dette nettsted.
        Ved retur i butikk må du ta med kvitteringen du fikk tilsendt på mail
        fra oss. Skal du sende pakken tilbake til oss, benytter du samme
        utleveringssted hvor du hentet ut pakken din. Returfrakten koster et
        lite beløp og vil bli trukket fra tilbakebetalingen eller lagt til din
        faktura.
      </p>
      <p>
        Vær oppmerksom på at ordre med leveringsmåten &quot;hent i butikk&quot;
        kun kan returneres tilbake til en av våre fysiske Klær for
        alle-butikker.
      </p>
    </section>
    <section>
      <h2>Bytte en vare</h2>
      <p>
        Ønsker du å bytte din vare, gjør du det enklest i en Klær for
        alle-butikk. Om du ønsker å sende varene i retur til vår nettbutikk, vil
        du få pengene tilbake, og du må eventuelt legge inn en ny bestilling for
        å få tilsendt ny vare/størrelse. Bruk retur-adresselappen som ligger
        vedlagt i pakken din. Returfrakten koster en liten avgift og vil bli
        trukket fra tilbakebetalingen eller lagt til din faktura.
      </p>
    </section>
    <section>
      <h2>Retur tilbake til nettbutikken</h2>
      <p>
        Vil du sende din retur tilbake til nettbutikken, anbefaler vi at du
        benytter posen du mottok varene i, klistrer på retur-adresselappen som
        ligger vedlagt og lever retursendingen til utleveringsstedet hvor du
        hentet pakken din. Oversikt over utleveringssteder finner du på nettet.
        Returfrakten koster et lite beløp og vil bli trukket fra
        tilbakebetalingen eller lagt til din faktura.
      </p>
      <p>
        Ved retur til nettbutikken får du dine penger satt inn på den kontoen du
        benyttet ved betaling. Dette skjer senest 7 dager etter at vi har
        mottatt din retur.
      </p>
      <p>
        Har du valgt faktura som betalingsmåte, anbefaler vi deg å logge inn på
        www.betalingsleverandør.no og forlenge forfallsdatoen på din faktura,
        slik at vi rekker å korrigere fakturabeløpet før fakturaen utløper. Så
        snart returen er mottatt i vår nettbutikk, vil vi oppdatere beløpet på
        fakturaen. Har du allerede betalt fakturaen før vi har mottatt din
        retur, vil betalingsleverandør ta kontakt så snart returen er fullført
        slik at de kan tilbakebetale dine penger.
      </p>
    </section>
    <section>
      <h2>Gyldig retur</h2>
      <p>
        En gyldig retur forutsetter at varen er ubrukt, og i samme stand som da
        du mottok den, alle merker og prislapper skal fortsatt sitte på. Varer
        med sminkeflekker og lignende anses ikke å være i originaltilstand og
        kan dessverre ikke returneres. Dersom du likevel velger å returnere en
        ugyldig retur vil du likevel ikke få igjen dine penger, og varen vil
        ikke bli sendt tilbake til deg. Hvis vi har gjort en feil, eller hvis
        varen har en produksjonsfeil, betaler vi for frakten tilbake til oss.
      </p>
      <p>
        Retur til vår nettbutikk gjelder kun varer som er kjøpt i nettbutikken
        (ikke varer kjøpt i fysisk butikk).
      </p>
    </section>
    <section>
      <h2>Angrerett</h2>
      <p>
        Angrerettloven gir deg rett til å angre på ditt kjøp. Angreretten
        forutsetter at du senest innen 14 dager etter at du mottar leveransen
        gir oss melding om det (angrefrist). Pakken skal deretter sendes til oss
        innen 14 dager. Ved angrerett må produktet returneres i samme stand som
        da du mottok produktet.
      </p>
      <p>
        Vi henviser videre til angrerettloven, § 25 Forbrukerens forpliktelser,
        når angreretten brukes ved avtale om levering av varer.
      </p>
      <p>
        Benytt returseddelen som du har fått tilsendt. Vi tar ikke imot
        postoppkrav eller rekommandert sending. Vi er forpliktet til å betale
        tilbake det du har betalt, inkludert porto for forsendelsen til deg, men
        du må likevel betale for returfrakt. Tilbakebetaling skal finne sted
        senest innen 7 dager etter at vi mottar produktet fra deg.
      </p>
      <p>
        Hvis du ønsker å benytte deg av angreretten, må du sende med en utfylt
        utskrift av standardformularet for angreretten utstedt av Barne-,
        likestillings- og inkluderingsdepartementet. Angrerettskjema finner du
        på nettet.
      </p>
    </section>
    <section>
      <h2>Åpent kjøp</h2>
      <p>
        Du har 30 dagers åpent kjøp fra den dagen du fullførte din bestilling.
        Hvis du har ombestemt deg etter at du har gjort din bestilling, må du
        likevel hente pakken og levere den tilbake i en Klær for alle-butikk
        eller sende den i retur til oss.
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
        Uavhentede pakker vil bli belastet kr 150,- til å dekke
        ekspedisjonsavgift for returfrakt og håndteringskostnader. Gebyret vil
        enten bli trukket fra ved tilbakebetalingen av din retur, eller lagt til
        din faktura ved ubetalt faktura.
      </p>
    </section>
    <section>
      <h2>Reklamasjon</h2>
      <p>
        Ønsker du å reklamere på et Klær for alle-produkt, er det enklest å
        gjøre dette i en Klær for alle-butikk. Ta med kvitteringen du har fått
        tilsendt på epost fra oss.
      </p>
      <p>
        Reklamasjonsretten gjelder i 3 år. Reklamasjon gjelder ikke vanlig
        slitasje, kun produksjonsfeil.
      </p>
      <p>
        Ønsker du å sende din reklamasjon til oss, ber vi deg først kontakte oss
        på e-post eller telefon for videre fremgangsmåte. For raskere
        kundebehandling oppgi ditt ordrenummer.
      </p>
    </section>
    <section>
      <h2>Personopplysninger</h2>
      <p>
        Ved registrering av din bestilling godkjenner du at vi lagrer og bruker
        personopplysningene dine for å fullføre og levere din bestilling, og gi
        deg servicen og handleopplevelsen du forventer. Vi bruker dine
        personopplysninger til blant annet følgende formål:
      </p>
      <ul>
        <li>
          For å kunne gi deg best mulig hjelp når du kontakter oss og for å
          informere deg om nye eller endrede tjenester.
        </li>
        <li>
          For å kunne analysere hvordan du benytter nettbutikken slik at vi kan
          forbedre nettsiden.
        </li>
        <li>
          For å kunne gi deg relevant innhold, gjennom automatisert profilering
          av personopplysninger og kjøpshistorikk for å finne preferanser eller
          behov hos deg.
        </li>
      </ul>
      <p>
        Les mer om hvordan vi behandler dine personopplysninger i vår
        personvernerklæring.
      </p>
      <p>
        For å handle i nettbutikken må du være over 18 år eller ha
        foreldrenes/foresattes tillatelse.
      </p>
    </section>
    <section>
      <h2>Cookies (informasjonskapsler)</h2>
      <p>
        En informasjonskapsel er data som sendes fra et nettsted og lagres
        lokalt i brukerens nettleser mens han/hun besøker et nettsted. Når
        brukeren besøker det samme nettstedet igjen, vil dataene som er lagret i
        informasjonskapselen hentes frem igjen og tilpasse nettstedet i forhold
        til brukeres tidligere aktiviteter. Klær for alle benytter dette for å
        forbedre og forenkle ditt besøk på nettsiden. Vi bruker ikke
        informasjonskapsler til å lagre personlig informasjon. Det finnes to
        ulike typer informasjonskapsler, vedvarende og midlertidige
        (informasjonskapsler for sesjoner). Vedvarende informasjonskapsler
        lagres som en fil på din datamaskin eller mobil i en tidsperiode på ikke
        mer enn 12 måneder. Informasjonskapsler for sesjoner er midlertidige og
        forsvinner når du stenger økten i nettleseren.
      </p>
      <p>
        Dersom du ønsker det, er det enkelt å slette informasjonskapsler fra
        datamaskinen eller mobilen ved hjelp av nettleseren. Se under “hjelp” i
        nettleseren for å finne instruksjoner for hvordan du håndterer og
        sletter informasjonskapsler. Merk deg at du ikke vil kunne bruke alle
        funksjoner hvis du slår av bruken av informasjonskapsler.
      </p>
    </section>
    <section>
      <h2>Force majeure</h2>
      <p>
        Hvis Klær for alle blir utsatt for force majeure, det vil si hvis vi
        eller samarbeidspartnerne våre blir utsatt for ting som krig,
        krigslignende hendelser, revolusjon, opprør, myndighetstiltak, streik,
        lockout, blokade, naturkatastrofe, brann, transportforstyrrelser,
        leveringsforbud eller lignende hendelser, har Klær for alle rett til å
        stoppe sine forpliktelser overfor kundene i opptil to måneder, og etter
        denne perioden har begge parter rett til å heve avtalen uten å måtte
        betale skadeerstatning.
      </p>
    </section>
    <section>
      <h2>Tvist</h2>
      <p>
        Partene skal forsøke å løse eventuelle tvister i minnelighet. Dersom
        dette ikke lykkes, kan du bringe saken inn for Forbrukerrådet i nærheten
        av der du bor. Alle tvister skal løses etter norsk rett.
      </p>
    </section>
    <address>
      Firmainformasjon
      <br />
      Klær for alle
      <br />
      Karl Johan
      <br />
      1340 Bortigokk
      <br />
      Norge
      <br />
      Tel. +47 12 34 56 78
      <br />
      Org. no.: NO987654321
    </address>
  </App>
)

TermsPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default TermsPage
