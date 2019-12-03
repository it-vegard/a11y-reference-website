import React from "react"
import * as PropTypes from "prop-types"
import Button from "../button"

import "./cart.css"

const Cart = ({ order, addFn, subtractFn }) => {
  return (
    <ul className="cart__list">
      {order.map(product => (
        <li key={product.id}>
          <div>{product.displayName}</div>
          <div>
            ({product.count})<Button onClick={() => addFn(product)}>+</Button>
            <Button onClick={() => subtractFn(product)}>-</Button>
          </div>
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
  addFn: PropTypes.func,
  subtractFn: PropTypes.func,
}

export default Cart
