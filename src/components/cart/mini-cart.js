import React, { useEffect } from "react"
import Heading from "../semantic-heading"
import { useOrder } from "../order"
import Button from "../button"
import DropDown from "../dropdown/dropdown"
import Link from "../link"
import TEXTS from "../../data/texts"

import "./mini-cart.css"
import { useLanguage } from "../language"

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

  return (
    <DropDown buttonText={TEXTS[language].CART_WITH_ITEMS(numberOfItems)}>
      <Heading headingLevel={2}>{TEXTS[language].CART}</Heading>
      <ul className="cart__list">
        {Object.keys(order).map(key => (
          <li key={key}>
            {order[key].displayName} ({order[key].count})
            <Button onClick={() => subtractFromCart(order[key])}>-</Button>
          </li>
        ))}
      </ul>
      <Link
        url={TEXTS[language].PAGES.CHECKOUT_PERSONAL_DETAILS.URL}
        title={TEXTS[language].GO_TO_CHECKOUT}
      />
    </DropDown>
  )
}

export default MiniCart
