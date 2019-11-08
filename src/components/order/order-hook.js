import React from "react"
import * as PropTypes from "prop-types"

import { GlobalStateProvider, useGlobalState } from "../global-state"

const orderReducer = (state, action) => {
  const itemId = action.payload.id
  switch (action.type) {
    case "add":
      return {
        ...state,
        [itemId]: {
          ...action.payload,
          count: state[itemId] ? state[itemId].count + 1 : 1,
        },
      }
    case "remove":
      return {
        ...state,
        [itemId]:
          state[itemId] && state[itemId].count > 1
            ? {
                ...state[itemId],
                count: state[itemId] - 1,
              }
            : undefined,
      }
    default:
      return state
  }
}

export const OrderProvider = ({ children }) => {
  let initialState = {}
  if (window) {
    initialState = JSON.parse(window.sessionStorage.getItem("order")) || {}
  }
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
    dispatch(addToCartAction)
  }

  const subtractFromCart = item => {
    const subtractFromCartAction = {
      type: "add",
      payload: item,
    }
    window.sessionStorage.setItem(
      "order",
      JSON.stringify(orderReducer(state, subtractFromCartAction))
    )
    dispatch(subtractFromCartAction)
  }

  return {
    order: state,
    addToCart,
    subtractFromCart,
  }
}
