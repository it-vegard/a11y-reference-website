import React from "react"
import { useOrder } from "../components/order"
import { Cart } from "../components/cart"
import Link from "../components/link"
import TEXTS from "../data/texts"
import CheckoutPage from "../components/checkout-page"
import { useLanguage } from "../components/language"
import Heading from "../components/heading"

const CartPage = () => {
  const { order, addToCart, subtractFromCart } = useOrder()
  const { language } = useLanguage()

  const mapProducts = order =>
    Object.keys(order).map(productId => ({
      ...order[productId],
      id: productId,
    }))

  return (
    <CheckoutPage>
      <Heading headingLevel={1}>{TEXTS[language].CART}</Heading>
      <Cart
        order={mapProducts(order)}
        addFn={addToCart}
        subtractFn={subtractFromCart}
      />
      <Link
        title={TEXTS[language].GO_TO_PERSONAL_DETAILS}
        url={TEXTS[language].PAGES.CHECKOUT_PERSONAL_DETAILS.URL}
      />
    </CheckoutPage>
  )
}

export default CartPage
