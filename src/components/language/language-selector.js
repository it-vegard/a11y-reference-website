import React from "react"
import NorwegianFlag from "svg-country-flags/svg/no.svg"
import GreatBritishFlag from "svg-country-flags/svg/gb.svg"

import Link from "../link"
import DropDown from "../dropdown"
import { useLanguage } from "./language-support"

import "./language-selector.css"
import Image from "../image"

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
      <Link className="language-selector__link" title="NO" url="/no">
        <Flag languageCode="no" />
      </Link>
      <Link className="language-selector__link" title="EN" url="/en">
        <Flag languageCode="en" />
      </Link>
    </DropDown>
  )
}

export default LanguageSelector
