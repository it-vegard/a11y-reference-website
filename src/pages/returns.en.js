import React from "react"
import * as PropTypes from "prop-types"
import App from "../components/app"
// import "./returns.css"

const ReturnsPage = ({ location }) => (
  <App pageTitle="Exchanges and returns" location={location}>
    <h1>Exhanges and returns</h1>
    <p>
      If you wish to exchange, send back or return faulty goods, you can do this
      in an Clothes4all shop or by returning the goods to us.
    </p>
    <p>
      Please see the list of Clothes4all shops on this website. To exchange
      something in a shop, please bring the receipt that has been emailed to
      you.
    </p>
    <section>
      <h2>Exchanging goods</h2>
      <p>
        The easiest way to exchange goods is in an Clothes4all shop. If you wish
        to return goods to our online shop, you will get your money back and you
        will have to place a new order if you would like a new item/size. Use
        the return address label enclosed in your delivery. Return shipping also
        trigger a small service fee and will be deducted from the amount to be
        refunded.
      </p>
    </section>
    <section>
      <h2>Returns to the online shop</h2>
      <p>
        If you wish to return goods to our online shop, we recommend that you
        use the bag that the goods came in, attach the enclosed return-address
        label and deliver the goods you are returning to the place from where
        you collected your package. Return shipping trigger a small service fee
        and will be deducted from the amount to be refunded.
      </p>
    </section>
    <section>
      <h2>Repayment</h2>
      <p>
        When goods arrive at the online shop, repayment will be made to the
        account you used when you paid for the items. This will take place
        within 10 days of receiving your returned goods.
      </p>
      <p>
        If you have paid by invoice, we recommend that you log in to the Klarna
        website and adjust the amount on the invoice yourself in accordance with
        the returned goods, or you can delay the date of payment on your payment
        invoice, so that we can correct the invoice amount in accordance with
        the returned goods before the payment date expires. (Please note that it
        is possible to delay the date of payment when this has passed.
        Therefore, if you know that you will be returning something to us, we
        recommend that you delay the date of payment as soon as possible). When
        the returns have been registered, and you have received a confirmation
        email from us of the amount to be refunded, you can log in to the Klarna
        website where you will see a new amount owing on your invoice.
      </p>
    </section>
    <section>
      <h2>Valid returns</h2>
      <p>
        Valid returns assumes that the goods have not been used, are in the same
        condition as when you received them, and all labels and price tags
        should still be attached. Goods with traces of make-up etc. are not
        considered to be in original condition and cannot therefore be returned.
      </p>
      <p>
        If we have made a mistake, or if the goods have a manufacturing error,
        you are entitled to return the goods, and we will pay to having them
        returned to us.
      </p>
      <p>
        Returns to our online shop only apply to goods purchased at the online
        shop (not goods purchased in physical shops).
      </p>
    </section>
    <section>
      <h2>Cooling-off period and cancellation</h2>
      <p>
        There is a 30-day cooling-off period and you have a right to cancel an
        order from the day on which it was made. As a consumer, you have the
        right to cancel a purchase if your order is delayed. If you change your
        mind after placing an order, you must, nevertheless, collect the package
        and either return it to an Clothes4all shop or send it back to us.
      </p>
      <p>
        As a consumer, you have the right to cancel a purchase if your order is
        delayed. If Clothes4all is aware that goods’ delivery items will be
        delayed, we will inform you of the new delivery date. You can then
        decide if you will wait for the goods or cancel the order.
      </p>
    </section>
    <section>
      <h2>Unclaimed packages</h2>
      <p>
        All goods ordered are sent sequentially from our warehouse, so,
        unfortunately, it is not possible to change/cancel an order once it has
        been placed. Unclaimed packages will actuate a service fee to cover
        shipping and handling costs.
      </p>
    </section>
    <section>
      <h2>Returning faulty goods</h2>
      <p>
        If you wish to return a faulty Clothes4all product, the easiest way to
        do this is in an Clothes4all shop. Bring the receipt that has been
        emailed to you.
      </p>
      <p>
        Your right to return faulty products is valid for three years. The
        return of faulty goods does not apply to normal wear.
      </p>
      <p>
        If you wish to return faulty goods to us, please email or phone us for
        details on how to proceed.
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
