import React, { createContext, useReducer } from "react"
import * as actionType from "../store/actions"
import { CONFIG } from "../config/constant"

const initialState = {
  ...CONFIG,
  isOpen: [], //for active default menu
  isTrigger: [], //for active default menu, set blank for horizontal
}
const ConfigContext = createContext(initialState)
const { Provider } = ConfigContext

const ConfigProvider = ({ children }) => {
  let trigger = []
  let open = []

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case actionType.RESET:
        return {
          ...state,
          layout: initialState.layout,
          subLayout: initialState.subLayout,
        }
      default:
        throw new Error()
    }
  }, initialState)

  return <Provider value={{ state, dispatch }}>{children}</Provider>
}

export { ConfigContext, ConfigProvider }
