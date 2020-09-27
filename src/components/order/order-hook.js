import React, { useEffect } from "react"
import * as PropTypes from "prop-types"

import { GlobalStateProvider, useGlobalState } from "../global-state"

const orderReducer = (state, action) => {
  const itemId = action.payload.id
  switch (action.type) {
    case "init":
      return action.payload.order
    case "add":
      return {
        ...state,
        [itemId]: {
          ...action.payload,
          count: state[itemId] ? state[itemId].count + 1 : 1,
        },
      }
    case "subtract":
      return Object.keys(state).reduce((acc, curr) => {
        if (curr !== itemId) {
          // Not the type that should be subtracted -> Keep in cart
          return {
            ...acc,
            [curr]: state[curr],
          }
        } else if (state[curr].count > 1) {
          // Has more of same type in cart -> Reduce by one
          return {
            ...acc,
            [curr]: {
              ...state[curr],
              count: state[curr].count - 1,
            },
          }
        } else {
          // Last of type -> remove product from cart
          return Object.keys(state)
            .filter(key => key !== itemId)
            .reduce(
              (acc, curr) => ({
                ...acc,
                [curr]: state[curr],
              }),
              {}
            )
        }
      }, {})
    default:
      return state
  }
}

export const OrderProvider = ({ children }) => {
  let initialState = {}
  useEffect(() => {
    initialState = JSON.parse(window.sessionStorage.getItem("order")) || {}
  })
  return (
    <GlobalStateProvider initialState={initialState} reducer={orderReducer}>
      {children}
    </GlobalStateProvider>
  )
}

OrderProvider.propTypes = {
  children: PropTypes.node,
}

export const useOrder = () => {
  const [state, dispatch] = useGlobalState()

  const addToCart = item => {
    const addToCartAction = {
      type: "add",
      payload: item,
    }
    window.sessionStorage.setItem(
      "order",
      JSON.stringify(orderReducer(state, addToCartAction))
    )
    window.sessionStorage.setItem("orderTimestamp", JSON.stringify(Date.now()))
    dispatch(addToCartAction)
  }

  const subtractFromCart = item => {
    const subtractFromCartAction = {
      type: "subtract",
      payload: item,
    }
    window.sessionStorage.setItem(
      "order",
      JSON.stringify(orderReducer(state, subtractFromCartAction))
    )
    window.sessionStorage.setItem("orderTimestamp", JSON.stringify(Date.now()))
    dispatch(subtractFromCartAction)
  }

  const loadOrder = () => {
    const order = JSON.parse(window.sessionStorage.getItem("order")) || {}
    dispatch({
      type: "init",
      payload: {
        order: order,
      },
    })
  }

  const numberOfItems = Object.keys(state).reduce(
    (acc, curr) => acc + state[curr].count,
    0
  )

  return {
    numberOfItems,
    order: state,
    addToCart,
    subtractFromCart,
    loadOrder,
  }
}
