import React from "react"
import * as PropTypes from "prop-types"
import App from "../components/app"
import "./delivery.css"

const DeliveryPage = ({ location }) => (
  <App pageTitle="Levering" location={location}>
    <h1>Levering</h1>
    <p>Vi pakker og sender bestillinger alle hverdager.</p>
    <table>
      <caption>Oversikt over leveringsmåter og varigheter</caption>
      <tr>
        <th scope="col">Land</th>
        <th scope="col">Levering</th>
        <th scope="col">Varighet</th>
        <th scope="col">Kostnader (NOK)</th>
      </tr>
      <tr>
        <td>Hent på butikken</td>
        <td>-</td>
        <td>Samme dag dersom bestilt før 14:00 på en virkedag.</td>
        <td className="nmbr">-</td>
      </tr>
      <tr>
        <td>Norge</td>
        <td>Posten</td>
        <td>2-5 virkedager</td>
        <td className="nmbr">99,-</td>
      </tr>
      <tr>
        <td>Norge</td>
        <td>Posten Express</td>
        <td>1-2 virkedager</td>
        <td className="nmbr">199,-</td>
      </tr>
      <tr>
        <td>Sverige</td>
        <td>Schenker</td>
        <td>3-6 virkedager</td>
        <td className="nmbr">149,-</td>
      </tr>
      <tr>
        <td>Sverige</td>
        <td>Schenker Express</td>
        <td>2-4 virkedager</td>
        <td className="nmbr">199,-</td>
      </tr>
      <tr>
        <td>Finland</td>
        <td>Schenker</td>
        <td>4-7 virkedager</td>
        <td className="nmbr">149,-</td>
      </tr>
      <tr>
        <td>Finland</td>
        <td>Schenker Express</td>
        <td>2-4 virkedager</td>
        <td className="nmbr">199,-</td>
      </tr>
      <tr>
        <td>Restlige Skandinavia</td>
        <td>Schenker</td>
        <td>6-10 virkedager</td>
        <td className="nmbr">149,-</td>
      </tr>
    </table>
    <p>
      Du vil motta en e-post med ordrebekreftelse kort tid etter at bestillingen
      er fullført, og en e-post med ordrekvittering så snart bestillingen er
      pakket og klar for sin reise.
    </p>
    <p>
      Du kan enkelt følge pakken din på veien ved hjelp av en sporingslink som
      ligger vedlagt i din ordrekvittering. Når pakken har ankommet ditt
      utleveringssted vil du motta en SMS. Dersom din pakke ikke har ankommet
      innen rimelig tid ber vi deg ta kontakt med vår kundeservice på mail.
    </p>
  </App>
)

DeliveryPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default DeliveryPage
