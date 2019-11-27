import React from "react"
import * as PropTypes from "prop-types"
import App from "../components/app"
// import "./terms.css"

const TermsPage = ({ location }) => (
  <App pageTitle="Terms and conditions" location={location}>
    <h1>Terms and conditions</h1>
    <p>Updated 19.11.2019</p>
    <p>
      The conditions below apply to all contracts for the purchase and delivery
      of goods from Clothes for All.
    </p>
    <p>
      The conditions can be revised without notification, and the date above
      will show the last revision. Please always read through the conditions
      before ordering. When you accept a transaction with us, you are also
      accepting our conditions of purchase. The transaction is complete once you
      have received your confirmation of order, and it is your responsibility as
      a customer to ensure that all information provided, such as your name,
      e-mail address, postal address, etc. are correct.
    </p>
    <section>
      <h2>Prices and taxes</h2>
      <p>All prices are in Norwegian kroner (NOK) including VAT.</p>
      <p>
        A carriage charge on all orders to a value of less than NOK 600 will be
        applied. Prices in the shops and online can differ. We reserve the right
        to change prices.
      </p>
    </section>
    <section>
      <h2>Payment</h2>
      <p>You can opt to pay by card or invoice in our web shop.</p>
      <p>
        When paying by card, the money will be reserved in your account when
        placing the order, and deducted when the order is despatched from our
        warehouse. Payment will be processed by a secure electronic payment
        service for Visa and Mastercard. Payments made on our website are just
        as secure as payment in a shop. The site is secured by SSL, and all card
        details are encrypted. That means that no one can read your credit card
        number, name or address when the data is sent via the Internet. Clothes
        for All reserves the right to check card validity, address details of
        the purchaser, and that there are funds available to cover the purchase
        price.
      </p>
      <p>It is also possible to pay by invoice.</p>
      <p>
        When paying against an invoice, you do not have to pay for the goods
        until you have received them.
      </p>
      <p>
        The invoice will be sent by email, and you have 14 days to pay. Please
        note that you will receive the invoice via email, and it is therefore
        very important that your email address is correct. You can also find
        your invoice by logging on to the payment provider. When paying an
        invoice, a credit check will be made of your personal details.
      </p>
      <p>Clothes for All reserves the right to cancel your purchase.</p>
    </section>
    <section>
      <h2>Delivery</h2>
      <p>We ship to Norway, Sweden, Finland and parts of Scandinavia.</p>
      <p>Normal delivery time is 3-6 days.</p>
      <p>
        You will receive a text message with pack reference when the package has
        arrived at the collection point. The order confirmation includes a link
        you can use to track your package up to the collection point.
      </p>
    </section>
    <section>
      <h2>Transport damage or undelivered packages</h2>
      <p>
        If the goods are damaged or lost during transport to the customer,
        Clothes for All is responsible, but you must let us know as soon as you
        discover any damage or loss.
      </p>
    </section>
    <section>
      <h2>Exchanges and returns</h2>
      <p>
        If you want to exchange, return or complain about your purchase, you can
        go to a Clothes for All store or return it to our web shop. You will
        find the location of all our stores listed here. When exchanging in a
        store, please take the receipt you received by mail with you.
      </p>
    </section>
    <section>
      <h2>Exchanging goods</h2>
      <p>
        If you want to exchange a purchase, the easiest way to do so is in a
        Clothes for All store. If you want to return the purchase to our web
        shop, you will be given a refund and can place a new order for a new
        product or size. Use the return address label enclosed in your delivery.
        Return shipping implies a small service fee and will be deducted from
        the amount to be refunded.
      </p>
    </section>
    <section>
      <h2>Returns to the web shop</h2>
      <p>
        If returning a purchase to the web shop, we recommend using the bag in
        which you received the goods and the adhesive return address label
        enclosed. Take the return package to the collection point at which you
        collected the goods. Return shipping implies a fee of NOK 49.- and will
        be deducted from the amount to be refunded.
      </p>
      <p>
        When returning goods to the web shop, your refund will be credited to
        the account you used when paying. We will refund the payment within 10
        days of receipt of your returned product.
      </p>
      <p>
        If you have paid against an invoice, we recommend that you log in to our
        payment provider&#39;s website and adjust the amount on the invoice in
        accordance with the returned goods, or you can postpone the due date on
        the invoice to give you time to correct the invoice amount before the
        invoice is due for payment. As soon as the returned goods have been
        received at our web shop, we will update the amount on the invoice.
      </p>
    </section>
    <section>
      <h2>Valid returns</h2>
      <p>
        Return of a product is subject to the product being un-used and in the
        same condition in which you received the product. All labels, price-tags
        etc. should be in place. Goods with traces of make-up etc. are not
        considered to be in original condition and therefore cannot be returned.
      </p>
      <p>
        If we have made a mistake, or if the fault is due to a production error,
        we will pay for shipping it back to us.
      </p>
      <p>
        Returns to our web shop are only valid when bought online, i.e., which
        excludes products bought in a physical store.
      </p>
    </section>
    <section>
      <h2>Right of withdrawal</h2>
      <p>
        The Act on the Right of Withdrawal entitles you to cancel your purchase.
        The Act requires that you notify us of your decision to do so within 14
        days of taking delivery (notice period). The package must then be
        returned to us within 14 days. If you are exercising your right to
        withdraw from the purchase, the goods must be in the same condition as
        when you received them.
      </p>
      <p>
        We also refer to other sections of the Act: Section 25, the
        consumer&#39;s obligations when withdrawing from an agreement for the
        delivery of goods.
      </p>
      <p>
        Use the returns label enclosed with the package. We will refuse payment
        on delivery and registered deliveries by post. We are obliged to refund
        the amount you have paid, including the cost of shipping to you. The
        refund will be made within fourteen days of receiving the product from
        you.
      </p>
      <p>
        If you want to exercise your right to withdraw, use the standard form
        issued by the Ministry of Children, Equality and Social Inclusion.
      </p>
    </section>
    <section>
      <h2>Open purchase</h2>
      <p>
        You have a 14 day money-back guarantee starting on the day on which you
        placed your order. As a customer, you have the right to cancel a
        purchase if your order is delayed. If you change your mind after placing
        the order, you should collect the pack, return it to a Accessible
        Clothes store or send it back as a return to us.
      </p>
      <p>
        As a customer, you have the right to cancel a purchase if your order is
        delayed. If Clothes for All is aware that the goods will be delayed, we
        will contact you concerning a new delivery date. You can then decide if
        you wamt to wait for the item(s) or cancel the order.
      </p>
    </section>
    <section>
      <h2>Uncollected packages</h2>
      <p>
        All our orders are sent directly from our warehouse. It is therefore
        impossible to change/cancel an order once it has been placed. A service
        fee will be added to your order for uncollected packages to cover the
        cost of returning it and handling costs.
      </p>
    </section>
    <section>
      <h2>Return of faulty goods</h2>
      <p>
        If you want to complain about an Clothes for All product, the easiest
        way to do is to go to a Clothes for All store. Please take the receipt
        you received by mail with you. Your right to return faulty products
        lasts for 3 years. The right does not cover ordinary wear and tear.
      </p>
      <p>
        If you want to return faulty goods to us, please contact us first by
        email or telephone for the correct procedure.
      </p>
    </section>
    <section>
      <h2>Personal data</h2>
      <p>
        When registering your order in the webstore, you accept that we can save
        and use your personal data to process and deliver your order.
      </p>
      <p>
        According to the Act on Data Protection, you are entitled to details of
        the information we have registered on you if you believe the details are
        incorrect or irrelevant. You can request correction or deletion from our
        customer database. Please contact our Customer Service department. We
        can assure you that we do not sell or disclose your personal data to any
        third party.
      </p>
      <p>
        To shop in the webstore, you must be over 18 years of age or have
        permission from your parent/guardian.
      </p>
    </section>
    <section>
      <h2>Cookies</h2>
      <p>
        A cookie is a package of data sent from a website and saved locally on
        the user&#39;s browser when visiting a website. When the user visits the
        same website again, the data stored will be collected from the cookie
        and used to adapt the site according to the user&#39;s previous
        preferences. Clothes for All uses cookies to improve and simplify your
        visits to our website. We do not use cookies to save personal data.
        There are two types of cookie: permanent and temporary (cookies for
        sessions). Permanent cookies are saved as a file on your PC or
        smartphone for a period of no longer than 12 months. Sessions cookies
        are temporary, and disappear when you close your browser.
      </p>
      <p>
        You can delete cookies from your PC or smartphone using your browser. Go
        to &quot;Help&quot; in your browser to find instructions on how to
        handle and delete cookies. Please note that you will not be able to use
        all functions available if you reject the use of cookies.
      </p>
    </section>
    <section>
      <h2>Force majeure</h2>
      <p>
        If Clothes for All is subject to force majeure, i.e., if we or our
        associates are victims of war, warlike events, revolution, rebellion,
        action taken by the authorities, strikes, lockouts, blockade, natural
        disasters, fire, transport disruption, a ban on supply or similar
        events, Clothes for All is entitled to suspend its obligations to its
        customers for up to two months. After this period, both parties can
        cancel the agreement without becoming liable for compensation.
      </p>
    </section>
    <section>
      <h2>Disputes</h2>
      <p>
        The conflicting parties shall seek to resolve any disputes between them.
        If this is not possible, the matter can be brought before the National
        Consumer Council in the area in which you live. All disputes shall be
        resolved according to national law.
      </p>
    </section>
    <address>
      Company details:
      <br />
      Clothes for All
      <br />
      Karl Johan
      <br />
      1340 Bortigokk
      <br />
      Norway
      <br />
      Phone +47 12 34 56 78
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
