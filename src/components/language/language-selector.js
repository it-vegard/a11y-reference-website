import React from "react"
import NorwegianFlag from "svg-country-flags/svg/no.svg"
import GreatBritishFlag from "svg-country-flags/svg/gb.svg"

import Link from "../link"

import "./language-selector.css"

const LanguageSelector = () => (
  <div className="language-selector">
    <Link className="language-selector__link" title="NO" url="/no">
      <img className="language-selector__flag" src={NorwegianFlag} />
    </Link>
    <Link className="language-selector__link" title="EN" url="/en">
      <img className="language-selector__flag" src={GreatBritishFlag} />
    </Link>
  </div>
)

export default LanguageSelector
