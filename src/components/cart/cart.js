import React from "react"
import * as PropTypes from "prop-types"
import Button from "../button"

import "./cart.css"

const Cart = ({ order, subtractFn }) => {
  return (
    <ul className="cart__list">
      {order.map(product => (
        <li key={product.id}>
          {product.displayName} ({product.count})
          <Button onClick={() => subtractFn(product)}>-</Button>
        </li>
      ))}
    </ul>
  )
}

Cart.propTypes = {
  order: PropTypes.arrayOf(
    PropTypes.shape({
      displayName: PropTypes.string,
      count: PropTypes.number,
      id: PropTypes.string,
    })
  ),
  subtractFn: PropTypes.func,
}

export default Cart
