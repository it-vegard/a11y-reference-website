import React, { createContext, useContext, useReducer } from "react"
import * as PropTypes from "prop-types"

const StateContext = createContext({})

export const GlobalStateProvider = ({
  children,
  initialState = {},
  reducer,
}) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
)

GlobalStateProvider.propTypes = {
  children: PropTypes.node,
  initialState: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  reducer: PropTypes.func,
}

export const useGlobalState = () => useContext(StateContext)
