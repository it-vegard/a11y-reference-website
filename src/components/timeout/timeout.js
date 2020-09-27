import { useContext } from "react"
import { navigate } from "gatsby"

import TEXTS from "../../data/texts"
import CONSTANTS from "../../data/rules/constants"
import AccessibilityRulesContext from "../accessibility-rules/accessibility-rules-context"
import { useLanguage } from "../language"

const useTimeout = minutesToTimeout => {
  const { language } = useLanguage()
  const { rules } = useContext(AccessibilityRulesContext)
  if (rules[CONSTANTS.TIMEOUT_NO_WARNING] === false) {
    const savedOrderTimestamp = window.sessionStorage.getItem("orderTimestamp")
    // Set fallback timestamp to now in case no timestamp has been set/no order exists
    const orderTimestamp = savedOrderTimestamp
      ? JSON.parse(savedOrderTimestamp)
      : Date.now()
    if (Date.now() - orderTimestamp > minutesToTimeout * 60 * 1000) {
      // Timeout. Delete order and jump to front page
      window.sessionStorage.removeItem("order")
      window.sessionStorage.removeItem("orderTimestamp")
      navigate(TEXTS[language].PAGES.FRONT_PAGE.URL)
    }
  }
}

export default useTimeout
