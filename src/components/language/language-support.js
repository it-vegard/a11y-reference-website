import React, { createContext, useContext, useState } from "react"
import * as PropTypes from "prop-types"
import TEXTS from "../../data/texts"

import LocationContext from "../location-context"

const LanguageSupportContext = createContext({
  language: "en",
  setLanguage: () => {},
})

const LanguageSupport = ({ children }) => {
  const { location } = useContext(LocationContext)
  const languages = Object.keys(TEXTS)
  const activeLanguage =
    languages.indexOf(location.pathname.split("/")[1]) >= 0 // Language is added in TEXTS
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
