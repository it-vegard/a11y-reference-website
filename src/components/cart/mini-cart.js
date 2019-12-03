import React, { useEffect } from "react"

import TEXTS from "../../data/texts"
import Heading from "../semantic-heading"
import { useOrder } from "../order"
import DropDown from "../dropdown"
import Link from "../link"
import { useLanguage } from "../language"
import Cart from "./cart"

const MiniCart = () => {
  const { loadOrder } = useOrder()
  const { language } = useLanguage()

  useEffect(() => {
    loadOrder()
  }, [])

  const { order, numberOfItems, subtractFromCart } = useOrder()

  if (numberOfItems === 0) {
    return null
  }

  const mapProducts = order =>
    Object.keys(order).map(productId => ({
      ...order[productId],
      id: productId,
    }))

  return (
    <DropDown buttonText={TEXTS[language].CART_WITH_ITEMS(numberOfItems)}>
      <Heading headingLevel={2}>{TEXTS[language].CART}</Heading>
      <Cart order={mapProducts(order)} subtractFn={subtractFromCart} />
      <Link
        url={TEXTS[language].PAGES.CHECKOUT_PERSONAL_DETAILS.URL}
        title={TEXTS[language].GO_TO_CHECKOUT}
      />
    </DropDown>
  )
}

export default MiniCart
