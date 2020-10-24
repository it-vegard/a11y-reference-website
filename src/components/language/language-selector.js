import React from "react"
import NorwegianFlag from "svg-country-flags/svg/no.svg"
import GreatBritishFlag from "svg-country-flags/svg/gb.svg"

import TEXTS from "../../data/texts"
import DropDown from "../dropdown"
import Link from "../link"
import Image from "../image"
import { useLanguage } from "./language-support"

import "./language-selector.css"

const Flag = ({ languageCode = "en" }) => {
  if (languageCode === "en") {
    return (
      <Image
        alt="English"
        className="language-selector__flag"
        src={GreatBritishFlag}
      />
    )
  } else if (languageCode === "no") {
    return (
      <Image
        alt="Norwegian"
        className="language-selector__flag"
        src={NorwegianFlag}
      />
    )
  } else {
    return null
  }
}

const siteLanguages = ["no", "en"]

const LanguageSelector = () => {
  const { language } = useLanguage()
  const button = (
    <React.Fragment>
      <span className="visually-hidden">Choose language: </span>
      <Flag languageCode={language} />
    </React.Fragment>
  )
  return (
    <DropDown buttonText={button} className="language-selector">
      {siteLanguages.map(language => (
        <Link
          className="language-selector__link"
          title={language.toUpperCase()}
          url={TEXTS[language].PAGES.FRONT_PAGE.URL}
          key={language}
        >
          <Flag languageCode={language} />
        </Link>
      ))}
    </DropDown>
  )
}

export default LanguageSelector
