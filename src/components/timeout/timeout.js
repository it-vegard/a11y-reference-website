import { useContext } from "react"
import { navigate } from "gatsby"

import TEXTS from "../../data/texts"
import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import { useLanguage } from "../language"

const hasTimedOut = minutesToTimeout => {
  const savedOrderTimestamp = window.sessionStorage.getItem("orderTimestamp")
  // Set fallback timestamp to now in case no timestamp has been set/no order exists
  const orderTimestamp = savedOrderTimestamp
    ? JSON.parse(savedOrderTimestamp)
    : Date.now()
  return Date.now() - orderTimestamp > minutesToTimeout * 60 * 1000
}

const extendTime = minutesToTimeout => {
  window.sessionStorage.setItem("orderTimestamp", JSON.stringify(Date.now()))
}

const deleteOrderAndNavigateToFrontPage = language => {
  window.sessionStorage.removeItem("order")
  window.sessionStorage.removeItem("orderTimestamp")
  navigate(TEXTS[language].PAGES.FRONT_PAGE.URL)
}

const useTimeout = minutesToTimeout => {
  const { language } = useLanguage()
  const { rules } = useContext(AccessibilityRulesContext)
  if (rules[CONSTANTS.NO_TIMING] === false) {
    if (hasTimedOut(minutesToTimeout)) {
      if (rules[CONSTANTS.TIMEOUT_ADJUSTABLE] !== false) {
        if (window.confirm(TEXTS[language].TIMEOUT_WARNING(minutesToTimeout))) {
          extendTime()
          return
        }
      }
      deleteOrderAndNavigateToFrontPage(language)
    }
  }
}

export default useTimeout
