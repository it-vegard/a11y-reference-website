import React, { Fragment } from "react"
import { useOrder } from "../components/order"
import { Cart } from "../components/cart"
import Link from "../components/link"
import TEXTS from "../data/texts"
import { useLanguage } from "../components/language"

const CartPage = () => {
  const { order, addToCart, subtractFromCart } = useOrder()
  const { language } = useLanguage()

  const mapProducts = order =>
    Object.keys(order).map(productId => ({
      ...order[productId],
      id: productId,
    }))

  return (
    <Fragment>
      <Cart
        order={mapProducts(order)}
        addFn={addToCart}
        subtractFn={subtractFromCart}
      />
      <Link
        title={TEXTS[language].CONTINUE}
        url={TEXTS[language].PAGES.CHECKOUT_PERSONAL_DETAILS.URL}
      />
    </Fragment>
  )
}

export default CartPage
