import React, { createContext, useContext, useState } from "react"
import * as PropTypes from "prop-types"

import LocationContext from "../location-context"

const LanguageSupportContext = createContext({
  language: "en",
  setLanguage: () => {},
})

const LanguageSupport = ({ children }) => {
  const { location } = useContext(LocationContext)
  const activeLanguage = location.pathname.split("/")[1]
    ? location.pathname.split("/")[1]
    : "en"
  const [language, setLanguage] = useState(activeLanguage)

  return (
    <LanguageSupportContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageSupportContext.Provider>
  )
}

LanguageSupport.propTypes = {
  children: PropTypes.node,
}

const useLanguage = () => useContext(LanguageSupportContext)

export { LanguageSupport, useLanguage }
