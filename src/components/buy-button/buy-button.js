import React from "react"

import { ProductPropType } from "../../prop-types/product-query"
import Button from "../button/button"
import { useOrder } from "../order"

import "./buy-button.css"

const BuyButton = ({ product }) => {
  const { addToCart } = useOrder()
  return (
    <Button className="buy-button" onClick={() => addToCart(product)}>
      Add to cart
    </Button>
  )
}

BuyButton.propTypes = {
  product: ProductPropType,
}

export default BuyButton
