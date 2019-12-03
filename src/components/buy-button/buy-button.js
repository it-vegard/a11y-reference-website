import React from "react"

import { ProductPropType } from "../../prop-types/product-query"
import Button from "../button/button"
import { useOrder } from "../order"
import { useLanguage } from "../language"
import TEXTS from "../../data/texts"

import "./buy-button.css"

const BuyButton = ({ product }) => {
  const { language } = useLanguage()
  const { addToCart } = useOrder()
  return (
    <Button className="buy-button" onClick={() => addToCart(product)}>
      {TEXTS[language].ADD_TO_CART}
    </Button>
  )
}

BuyButton.propTypes = {
  product: ProductPropType,
}

export default BuyButton
