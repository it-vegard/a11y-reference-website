import React, { useEffect, useState } from "react"
import Heading from "../semantic-heading"
import { useOrder } from "../order"
import Button from "../button"

const MiniCart = () => {
  const [isOpen, setIsOpen] = useState(false)
  const { order, numberOfItems, subtractFromCart } = useOrder()

  useEffect(() => {
    if (numberOfItems === 0) {
      setIsOpen(false) // Reset isOpen
    }
  }, [numberOfItems])

  if (numberOfItems === 0) {
    return null
  }

  return (
    <React.Fragment>
      <Button onClick={() => setIsOpen(!isOpen)}>Cart ({numberOfItems})</Button>
      <div hidden={!isOpen}>
        <Heading>Shopping Cart</Heading>
        <ul>
          {Object.keys(order).map(key => (
            <li key={key}>
              {order[key].displayName} - {order[key].count}
              <Button onClick={() => subtractFromCart(order[key])}>-</Button>
            </li>
          ))}
        </ul>
      </div>
    </React.Fragment>
  )
}

export default MiniCart
