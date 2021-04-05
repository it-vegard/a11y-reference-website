import React from "react"
import * as PropTypes from "prop-types"
import App from "../../components/app"
import "../delivery.css"

const DeliveryPage = ({ location }) => (
  <App pageTitle="Delivery" location={location}>
    <h1>Shipping and delivery</h1>
    <p>We process and send orders on all business days.</p>
    <table>
      <caption>Overview of shipping methods and durations</caption>
      <tr>
        <th scope="col">Destination</th>
        <th scope="col">Shipping method</th>
        <th scope="col">Duration</th>
        <th scope="col">Shipping fee (USD)</th>
      </tr>
      <tr>
        <td>Fetch at shop</td>
        <td>-</td>
        <td>Same business day if ordered before 14:00.</td>
        <td className="nmbr">Free</td>
      </tr>
      <tr>
        <td>Norway</td>
        <td>Posten</td>
        <td>2-5 business days</td>
        <td className="nmbr">$9.99</td>
      </tr>
      <tr>
        <td>Norway</td>
        <td>Posten Express</td>
        <td>1-2 business days</td>
        <td className="nmbr">$19.99</td>
      </tr>
      <tr>
        <td>Sweden</td>
        <td>Schenker</td>
        <td>3-6 business days</td>
        <td className="nmbr">$14.99</td>
      </tr>
      <tr>
        <td>Sweden</td>
        <td>Schenker Express</td>
        <td>2-4 business days</td>
        <td className="nmbr">$19.99</td>
      </tr>
      <tr>
        <td>Finnland</td>
        <td>Schenker</td>
        <td>4-7 business days</td>
        <td className="nmbr">$14.99</td>
      </tr>
      <tr>
        <td>Finnland</td>
        <td>Schenker Express</td>
        <td>2-4 business days</td>
        <td className="nmbr">$19.99</td>
      </tr>
      <tr>
        <td>Other Scandinavia</td>
        <td>Schenker</td>
        <td>6-10 business days</td>
        <td className="nmbr">$14.99</td>
      </tr>
    </table>
    <p>
      As soon as we have shipped your order, you will receive an email (order
      receipt) with your tracking number. You can check the status of your order
      via the link provided. You will receive an SMS or email when your order
      has arrived at the pickup point.
    </p>
  </App>
)

DeliveryPage.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }),
}

export default DeliveryPage
